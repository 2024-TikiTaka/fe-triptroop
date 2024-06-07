import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Image, Nav, Navbar, Offcanvas, } from "react-bootstrap";

import { isLogin } from "../../utils/TokenUtils";

import ChatBox from "../box/ChatBox";
import ProfileBox from "../box/ProfileBox";
import { callLogoutAPI } from "../../apis/UserAPICalls";


const CustomNavLink = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            isActive ? "nav-link px-2 fs-5 active" : "nav-link px-2 fs-5"
        }
    >
        {children}
    </NavLink>
);

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ showChat, setShowChat ] = useState(false);
    const handleChatShow = () => setShowChat(true);
    const handleChatClose = () => setShowChat(false);

    function BeforeLogin() {
        return (
            <>
                <Offcanvas.Body>
                    <Navbar.Collapse className="justify-content-between">
                        <Nav className="justify-content-center">
                            <Nav.Link as={CustomNavLink} to="/travels">
                                여행지 소개
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/schedule">
                                일정
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/companion">
                                동행글
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/inquiry">
                                문의하기
                            </Nav.Link>
                        </Nav>
                        <Nav className="text-end">
                            <Button
                                className="outline blue-900 fs-6 mx-1"
                                onClick={() => navigate(`/login`)}
                            >
                                로그인
                            </Button>
                            <Button
                                className="blue-900 white fs-6 mx-1"
                                onClick={() => navigate(`/signup`)}
                            >
                                회원가입
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Offcanvas.Body>
            </>
        );
    }

    function AfterLogin() {
        return (
            <>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <ProfileBox />
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Navbar.Collapse className="justify-content-between">
                        <Nav className="justify-content-center">
                            <Nav.Link as={CustomNavLink} to="/travels">
                                여행지 소개
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/schedule">
                                일정
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/companions">
                                동행글
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/inquiry">
                                문의하기
                            </Nav.Link>
                        </Nav>
                        <Nav className="text-end">
                            <Button onClick={handleChatShow}>
                                <span>채팅</span>
                            </Button>
                            <Button
                                className="outline blue-900 fs-6 mx-1"
                                onClick={() => navigate(`/mypage`)}
                            >
                                마이페이지
                            </Button>
                            <Button
                                className="blue-900 whit fs-6 mx-1"
                                onClick={() => dispatch(callLogoutAPI(), navigate(`/`))}
                            >
                                로그아웃
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Offcanvas.Body>
            </>
        );
    }

    return (
        <header className="header">
            <Navbar expand="md py-3">
                <Container fluid="lg">
                    <Navbar.Brand
                        className="logo-btn col-md-3"
                        onClick={() => navigate(`/`)}
                    >
                        <Image src="/images/logo.svg" fluid />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Offcanvas placement="end">
                        {isLogin() ? <AfterLogin /> : <BeforeLogin />}
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/* 채팅 */}
            <div className="chat-container">
                <ChatBox show={showChat} handleClose={handleChatClose} />
            </div>
        </header>
    );
}

export default Header;
