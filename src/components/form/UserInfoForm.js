import React, { useState } from 'react';
import { Button, Card, Col, Form } from "react-bootstrap";

function UserInfoForm({ userInfo }) {

    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title">회원 정보</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3">
                        {/* 이메일 */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>이메일 </Form.Label>
                                <p>{userInfo?.email}</p>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 비밀번호 */}
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>비밀번호</Form.Label>
                                비밀번호 변경 하기
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 이름 */}
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>이름</Form.Label>
                                <p>{userInfo?.name}</p>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 성별 */}
                            <Form.Group className="mb-3" controlId="gender">
                                <Form.Label>성별</Form.Label>
                                <p>{userInfo?.gender}</p>
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 생년월일 */}
                            <Form.Group className="mb-3" controlId="birth">
                                <Form.Label>생년월일</Form.Label>
                                <p>{userInfo?.birth}</p>
                            </Form.Group>
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


export default UserInfoForm;
