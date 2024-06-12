import React from "react";

import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import MyPageHeader from "../common/MyPageHeader";

function MyPageContent() {
    return (
        <>
            <div className="mypage-content">
                <MyPageHeader />

                <Container>
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col md={12}>
                                    {/* 탭 영역 */}
                                    <Nav variant="pills" defaultActiveKey="/home">
                                        <Nav.Item>
                                            <Nav.Link href="/home">홈</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-1">여행</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-2">일정</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="link-3">좋아요</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Row className="mt-4">
                                        <Col md={8}>
                                            <Card>
                                                <Card.Body>
                                                    <h5>다녀온 여행지</h5>
                                                    <img src="assets/images/map.png" alt="Map" className="img-fluid" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card>
                                                <Card.Body>
                                                    <h5>추천 회원</h5>
                                                    <div className="d-flex flex-wrap">
                                                        {[ "김다솔", "김아현", "박병언", "이은재", "조형기", "이한솔", "김현준" ].map((name) => (
                                                            <div key={name} className="m-2 text-center">
                                                                <img src="assets/images/avatar-placeholder.png" alt={name} className="rounded-circle" width="50" />
                                                                <p>{name}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body></Card>
                </Container>
            </div>
        </>
    );
}
export default MyPageContent;
