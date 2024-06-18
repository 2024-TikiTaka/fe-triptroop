import React from 'react';
import { Card, Col, Form } from "react-bootstrap";

function UserInfoForm({ userInfo }) {

    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">회원 정보</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3">
                        {/* 이메일 */}
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>이메일</Form.Label>
                                <Form.Control readOnly defaultValue={userInfo?.email} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 이름 */}
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>이름</Form.Label>
                                <Form.Control readOnly defaultValue={userInfo?.name} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 성별 */}
                            <Form.Group className="mb-3" controlId="gender">
                                <Form.Label>성별</Form.Label>
                                <Form.Control defaultValue={userInfo?.gender === 'F' ? '여자' : '남자'} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 생년월일 */}
                            <Form.Group className="mb-3" controlId="birth">
                                <Form.Label>생년월일</Form.Label>
                                <Form.Control readOnly defaultValue={userInfo?.birth} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            {/* 전화번호 */}
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>전화번호</Form.Label>
                                <Form.Control readOnly defaultValue={userInfo?.phone} />
                            </Form.Group>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}


export default UserInfoForm;
