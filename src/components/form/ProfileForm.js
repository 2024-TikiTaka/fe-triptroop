import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callCheckNicknameAPI, callMyProfileAPI, callMyProfileImageRemoveAPI, callMyProfileImageSaveAPI, callMyProfileModifyAPI, callMyProfileSaveAPI } from "../../apis/ProfileAPICalls";
import { toast } from "react-toastify";
import ProfileImage from "../common/ProfileImage";

const MBTI_TYPES = [
    "ESTJ", "ESTP", "ESFJ", "ESFP",
    "ENTJ", "ENTP", "ENFJ", "ENFP",
    "ISTJ", "ISTP", "ISFJ", "ISFP",
    "INTJ", "INTP", "INFJ", "INFP"
];

function ProfileForm() {
    const dispatch = useDispatch();
    const { success, currentProfile } = useSelector(state => state.profileReducer);
    const [ form, setForm ] = useState();
    const [ file, setFile ] = useState(null);
    const [ preview, setPreview ] = useState(currentProfile?.profileImage || null);

    useEffect(() => {
        dispatch(callMyProfileAPI());
        setForm({ ...currentProfile });
    }, [ success ]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedTypes = [ 'image/jpeg', 'image/png' ];

        if (!allowedTypes.includes(selectedFile.type)) {
            toast.error('JPG 또는 PNG 파일만 업로드할 수 있습니다.');
        } else {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleUploadFile = async () => {
        if (!file) {
            toast.error('파일을 선택해주세요.');
            return;
        }

        const uploadImage = new FormData();
        uploadImage.append('profileImage', file);

        dispatch(callMyProfileImageSaveAPI({ profileImage: uploadImage }));
    };

    const handleDeleteFile = () => {
        if (!form.profileImage) {
            return;
        }
        setForm({ ...form, profileImage: '' });
        setPreview(null);
        dispatch(callMyProfileImageRemoveAPI());
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const onSubmit = async () => {
        dispatch(callMyProfileModifyAPI({ ...form }));
    };

    return (
        <>
            <Form>
                <Card className="border">
                    <Card.Header className="border-bottom">
                        <h3 className="card-header-title my-1">프로필 관리</h3>
                    </Card.Header>
                    <Card.Body>
                        {/* 이미지 */}
                        <Col md={12}>
                            <Form.Group className="mt-3 mb-3" controlId="profileImage">
                                <Form.Label>프로필 이미지</Form.Label>
                                <Row className="align-items-center me-md-auto">
                                    <Col xs={12} md={"auto"}>
                                        <label className="my-2">
                                            <span className="avatar avatar-xl">
                                                <Form.Control type="file" name="profileImage" className="d-none" onChange={handleFileChange} />
                                                <ProfileImage src={preview || currentProfile?.profileImage} size={"6rem"} />
                                            </span>
                                        </label>
                                    </Col>
                                    <Col xs={12} md={"auto"}>
                                        <Button className="me-3" onClick={handleUploadFile}>저장</Button>
                                        <Button variant="light" onClick={handleDeleteFile}>삭제</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>

                        {/* 닉네임 */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="nickname">
                                <Form.Label>닉네임</Form.Label>
                                <Form.Control
                                    onBlur={onChangeHandler}
                                    // isInvalid={validated != '' && !validated}
                                    defaultValue={currentProfile?.nickname}
                                />
                                <Form.Control.Feedback type="invalid">
                                    사용 불가한 닉네임입니다.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* MBTI */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="mbti">
                                <Form.Label>MBTI</Form.Label>
                                <Form.Select
                                    name="mbti"
                                    onChange={onChangeHandler}
                                >
                                    <option value="">선택</option>
                                    {MBTI_TYPES.map((option) => (
                                        <option key={option} value={option} selected={currentProfile?.mbti}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {/* 자기소개 */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="introduction">
                                <Form.Label>자기소개</Form.Label>
                                <Form.Control as="textarea"
                                              name="introduction"
                                              onChange={onChangeHandler}
                                              defaultValue={currentProfile?.introduction} />
                            </Form.Group>
                        </Col>
                        {/* 저장 버튼 */}
                        <Col xs={12} className="text-end">
                            <Button variant="primary"
                                    onClick={onSubmit}>
                                프로필 수정
                            </Button>
                        </Col>
                    </Card.Body>
                </Card>
            </Form>
        </>
    );
}

export default ProfileForm;
