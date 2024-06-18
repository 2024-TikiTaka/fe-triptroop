import React, { useEffect } from "react";

import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import MyPageHeader from "../common/MyPageHeader";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callMyProfileAPI } from "../../apis/ProfileAPICalls";
import { callCurrentUserAPI } from "../../apis/UserAPICalls";

const CustomNavLink = ({ children, ...props }) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
            }
        >
            {children}
        </NavLink>
    );
};

function MyPageContent({ children }) {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.userReducer);
    const { currentProfile } = useSelector(state => state.profileReducer);

    useEffect(() => {
        !currentUser && dispatch(callCurrentUserAPI());
        !currentProfile && dispatch(callMyProfileAPI());
    }, [ dispatch ]);

    return (
        <>
            <div className="mypage-content">
                <MyPageHeader userInfo={currentUser} profileInfo={currentProfile} />

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
                                            <Nav.Link as={CustomNavLink} to={"/mypage"} exact>홈</Nav.Link>
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
