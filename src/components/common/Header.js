import { isLogin } from "../../utils/TokenUtils";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LockFill, PersonPlusFill, UnlockFill } from "react-bootstrap-icons";

const CustomNavLink = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {children}
    </NavLink>
);

function Header() {
    function BeforeLogin() {
        return (
            <div className="user-btns">
                <Button className="outline blue-900">
                    <span className="d-none d-lg-inline-block">회원가입</span>
                    <span className="d-lg-none">
                        <PersonPlusFill className="blue-900" />
                    </span>
                </Button>
                <Button className="blue-900">
                    <span className="d-none d-lg-inline-block white">로그인</span>
                    <span className="d-lg-none">
                        <UnlockFill className="white" />
                    </span>
                </Button>
            </div>
        );
    }


    function AfterLogin() {
        return (
            <Col className="user-btns">
                <div className="user-btns">
                    <Button className="outline blue-900">
                        <span className="d-none d-lg-inline-block">마이페이지</span>
                        <span className="d-lg-none">
                            <Image src="/images/header_icon_mypage_basic.png" />
                        </span>
                    </Button>
                    <Button className="blue-900">
                        <span className="d-none d-lg-inline-block white">로그아웃</span>
                        <span className="d-lg-none">
                            <LockFill className="white" />
                        </span>
                    </Button>
                </div>
            </Col>
        );
    }

    return (
        <header className="header">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/#" className="logo-btn">
                        <Image src="/images/logo.svg" fluid />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                제목
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                                <Nav>
                                    {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
                                    <Nav.Link as={CustomNavLink} to="/travel">
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

                                <Nav>
                                    {!isLogin() ? <AfterLogin /> : <BeforeLogin />}
                                </Nav>
                            </Navbar.Collapse>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;