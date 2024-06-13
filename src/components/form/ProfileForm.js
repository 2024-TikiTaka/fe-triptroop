import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Col, Form, Image, OverlayTrigger, Tooltip, } from "react-bootstrap";

function ProfileForm() {

    const dispatch = useDispatch();

    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">회원 정보</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3">
                        {/* 이미지 */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="profileImage">
                                <Form.Label>프로필 이미지</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 닉네임 */}
                            <Form.Group className="mb-3" controlId="nickname">
                                <Form.Label>닉네임</Form.Label>
                                <Form.Control plaintext readOnly defaultValue={profileInfo?.nickname} />
                                <Button />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 자기소개 */}
                            <Form.Group className="mb-3" controlId="introduction">
                                <Form.Label>자기소개</Form.Label>
                                <Form.Control plaintext readOnly defaultValue={profileInfo?.introduction} />
                            </Form.Group>
                        </Col>

                        {/* <Col xs={12} className="text-end"> */}
                        {/*     <Button */}
                        {/*         type="submit" */}
                        {/*         variant="primary" */}
                        {/*     > */}
                        {/*         저장 */}
                        {/*     </Button> */}
                        {/* </Col> */}
                    </Form>
                </Card.Body>
                <Card.Body>
                    <Form className="row g-3">
                        <Col xs={12}>
                            <Form.Label>
                                프로필 이미지
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="d-flex align-items-center">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Replace this pic</Tooltip>}
                                >
                                    <label className="position-relative me-4" htmlFor="uploadfile-1">
                                        <span className="avatar avatar-xl">
                                            <Image id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src="https://zrr.kr/Aat7"
                                                   style={{ width: "82px", height: "82px" }} alt="프로필 이미지" />
                                        </span>
                                    </label>
                                </OverlayTrigger>
                                <Form.Label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">수정</Form.Label>
                                <Form.Label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">삭제</Form.Label>
                                <Form.Control id="uploadfile-1" type="file" className="d-none" />
                            </div>
                        </Col>
                        <Col md={12}>
                            <Form.Label>Full Name
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control type="text" defaultValue="Jacqueline Miller" placeholder="Enter your full name" />
                        </Col>
                        <Col md={12}>
                            <Form.Label>Email address
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control type="email" defaultValue="hello@gmail.com" placeholder="Enter your email id" />
                        </Col>
                        <Col md={12}>
                            <Form.Label>Mobile number
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control type="text" defaultValue="222 555 666" placeholder="Enter your mobile number" />
                        </Col>
                        <Col md={12}>
                            <Form.Label>Nationality
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select aria-label="Select your country">
                                <option>Select your country</option>
                                <option value="USA">USA</option>
                                <option value="Paris">Paris</option>
                                <option value="India">India</option>
                                <option value="UK">UK</option>
                            </Form.Select>
                        </Col>
                        <Col md={12}>
                            <Form.Label>생년월일
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <input type="text" className="form-control flatpickr flatpickr-input" value="29 Aug 1996" placeholder="Enter date of birth" data-date-format="d M Y"
                                   readOnly="readonly" />
                            <Form.Control type="text" defaultValue="29 Aug 1996" placeholder="Enter date of birth" />
                        </Col>
                        <Col md={12}>
                            <Form.Label>성별
                                <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="d-flex gap-4">
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="genderMale"
                                    defaultChecked
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="genderFemale"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Others"
                                    name="gender"
                                    id="genderOthers"
                                />
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue="2119 N Division Ave, New Hampshire, York, United States" />
                        </Col>
                        <Col xs={12} className="text-end">
                            <Button variant="primary" type="submit">Save Changes</Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}


export default ProfileForm;
