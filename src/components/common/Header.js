import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Chat, Person, } from "react-bootstrap-icons";
import { Button, Container, Dropdown, Image, Nav, Navbar } from "react-bootstrap";

import { isLogin } from "../../utils/TokenUtils";
import { reset } from "../../modules/UserModules";
import { callLogoutAPI } from "../../apis/UserAPICalls";

import ChatBox from "../box/ChatBox";

const CustomNavLink = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? "px-2 fs-5 active" : "px-2 fs-5"}>
        {children}
    </NavLink>
);

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { success } = useSelector(state => state.userReducer);
    const [ showChat, setShowChat ] = useState(false);

    useEffect(() => {
        if (success === true) {
            navigate(`/`);
            dispatch(reset());
        }
    }, [ success ]);

    function BeforeLogin() {
        return (
            <>
                <Dropdown className="ms-3">
                    <Dropdown.Toggle
                        variant="light"
                        data-bs-auto-close="outside" data-bs-display="static">
                        <Person size="22px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                        <Dropdown.Item onClick={() => navigate(`/login`)}>로그인 </Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate(`/signup`)}>회원가입</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </>
        );
    }

    function AfterLogin() {
        return (
            <>
                {/* Chat */}
                <Navbar expand="md">
                    <Container>
                        <Button variant="light" onClick={() => setShowChat(!showChat)}>
                            <Chat size="20px" /> 채팅
                        </Button>


                        {/* Profile */}
                        <Dropdown className="ms-3">
                            <Dropdown.Toggle
                                role="button"
                                variant="light"
                                data-bs-auto-close="outside">
                                <Person size="22px" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-animation dropdown-menu-end shadow" aria-labelledby="profileDropdown">
                                <Dropdown.Item as="div" className="px-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <Image
                                                src="https://zrr.kr/Aat7" roundedCircle
                                                className="avatar mx-auto d-block mb-3"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        </div>
                                        <div>
                                            <a className="h6 mt-2 mt-sm-0">Lori Ferguson</a>
                                            <p className="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => navigate(`/mypage`)}>마이페이지 </Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate(`/likes`)}>좋아요</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate(`/settings`)}>설정</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => dispatch(callLogoutAPI())}>로그아웃</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Navbar>
            </>
        );
    }

    return (
        <header className="header">
            <Navbar expand="md">
                <Container fluid>
                    {/* Logo */}
                    <Navbar.Brand
                        className="logo-btn"
                        onClick={() => navigate(`/`)}>
                        <Image src="/images/logo.svg" fluid />
                    </Navbar.Brand>

                    {/* Menu */}
                    <Navbar.Toggle
                        className="custom-navbar-toggler ms-auto mx-3 p-0 p-sm-2"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarCollapse">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomNavLink} to="/travels">
                                여행지
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/schedules">
                                일정
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/companions">
                                동행
                            </Nav.Link>
                            <Nav.Link as={CustomNavLink} to="/inquiry">
                                문의
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {!isLogin() ? BeforeLogin() : AfterLogin()}

                    <ChatBox show={showChat} handleClose={() => setShowChat(false)} />
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;
