import React from "react";

import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import MyPageHeader from "../common/MyPageHeader";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
 
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {children}
        </NavLink>
    );
};
function MyPageContent({ children }) {
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
                                    <Nav
                                        variant="pills"
                                        className="mypage-tab mb-4"
                                    >
                                        <Nav.Item>
                                            <Nav.Link as={CustomNavLink} to={"/mypage/home"}>홈</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={CustomNavLink} to={"/mypage/travels"}>여행</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={CustomNavLink} to={"/mypage/schedules"}>일정</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={CustomNavLink} to={"/mypage/likes"}>좋아요</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    {/* 내용 */}
                                    <Container className="mypage-content-inner">
                                        {children}
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    );
}
export default MyPageContent;
