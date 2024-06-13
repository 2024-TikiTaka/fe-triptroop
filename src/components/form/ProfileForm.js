import React from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import ProfileImage from "../common/ProfileImage";

function ProfileForm({ profile }) {


    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">프로필 관리</h3>
                </Card.Header>
                <Card.Body>

                    <Col md={12}>
                        {/* 이미지 */}
                        <Form.Group className="mb-3" controlId="profileImage">
                            <Form.Label>
                                프로필 이미지
                            </Form.Label>
                            <div className="d-flex align-items-center">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Replace this pic</Tooltip>}
                                >
                                    <label className="position-relative me-4">
                                        <span className="avatar avatar-xl">
                                            <ProfileImage size={"82px"} />
                                        </span>
                                    </label>
                                </OverlayTrigger>
                                <Col md={12}>
                                    <Button className="me-1">수정</Button>
                                    <Button variant="light">삭제</Button>
                                    <Form.Control id="uploadfile-1" type="file" className="d-none" />
                                </Col>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        {/* 닉네임 */}
                        <Form.Group className="mb-3" controlId="nickname">
                            <Form.Label>닉네임</Form.Label>
                            <Form.Control size="lg" defaultValue={profile?.nickname} />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        {/* 자기소개 */}
                        <Form.Group className="mb-3" controlId="introduction">
                            <Form.Label>자기소개</Form.Label>

                            <Form.Control as="textarea"
                                          size="lg" defaultValue={profile?.introduction} />
                        </Form.Group>
                    </Col>

                    <Col xs={12} className="text-end">
                        <Button
                            type="submit"
                            variant="primary"
                        >
                            저장
                        </Button>
                    </Col>
                </Card.Body>
            </Card>
        </>
    );
}


export default ProfileForm;
