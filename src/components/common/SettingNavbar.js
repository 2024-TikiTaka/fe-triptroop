import React, { useEffect } from "react";
import { Button, Card, Col, Nav, Offcanvas, Row } from 'react-bootstrap';
import { BoxArrowRight, Key, PencilSquare, Person, Sliders, Trash } from "react-bootstrap-icons";
import ProfileImage from "./ProfileImage";
import { NavLink } from "react-router-dom";
import { callLogoutAPI } from "../../apis/AuthAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/ProfileModules";
import { callMyProfileAPI } from "../../apis/ProfileAPICalls";

const CustomNavLink = ({ to, children }) => {

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {children}
        </NavLink>
    );
};
function SettingNavbar() {

    const dispatch = useDispatch();
    const { success: profileSuccess, currentProfile } = useSelector(state => state.profileReducer);

    useEffect(() => {
        if (!currentProfile || success) {
            dispatch(callMyProfileAPI());
        }
    }, [ profileSuccess ]);


    return (
        <>
            <Col className="settings-nav" lg={4} xl={3}>
                <Card className="bg-white w-100">
                    <Card.Header className="d-none d-lg-block pt-4 p-3 bg-white ">
                        <Row className="text-center">
                            <Col xs={12}>
                                <ProfileImage src={currentProfile?.profileImage} size={"6.5rem"} className="c-block" />
                            </Col>
                            <Col xs={12}>
                                <p className="nickname">{currentProfile?.nickname || '닉네임'}</p>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body className="bg-white">
                        <Nav variant="pills-primary-soft" className="flex-column text-decoration-none">
                            <Nav.Item>
                                <Nav.Link as={CustomNavLink} to="/settings/profile">
                                    <Person className="me-2" />프로필 관리
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={CustomNavLink} to="/settings/user">
                                    <Person className="me-2" />회원 정보
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={CustomNavLink} to="/settings/password">
                                    <Key className="me-2" />비밀번호
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={CustomNavLink} to="/settings/withdrawal">
                                    <Trash className="me-2" />회원 탈퇴
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => dispatch(callLogoutAPI())}>
                                    <BoxArrowRight className="me-2" />로그아웃
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default SettingNavbar;
