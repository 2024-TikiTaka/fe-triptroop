import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import Logo from "./Logo";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";
import {isLogin} from "../../../utils/TokenUtils";

const CustomNavLink = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {children}
    </NavLink>
);

function DesktopNavbar() {
    return (
        <Navbar bg="" expand="lg" className="d-none d-lg-flex desk-nav">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Logo/>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link as={CustomNavLink} to="/travel">
                        여행지 소개
                    </Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/calender">
                        일정
                    </Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/companions">
                        동행글
                    </Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/inquiries">
                        문의하기
                    </Nav.Link>
                </Nav>
                <Nav>
                    { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default DesktopNavbar;
