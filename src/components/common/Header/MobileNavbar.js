import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {isLogin} from "../../../utils/TokenUtils";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";
import Logo from "./Logo";
import {List} from "react-bootstrap-icons";

const CustomNavLink = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {children}
    </NavLink>
);

function MobileNavbar() {
    return (
        <Navbar id="basic-navbar-nav" bg="" expand="lg" className="d-lg-none mobile-nav">
            <Nav className="menubar">
                <List/>
                <div>
                    <Nav>
                        <Logo/>
                    </Nav>
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
                </div>
            </Nav>
            <Nav>
                { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
            </Nav>
        </Navbar>
    );
}

export default MobileNavbar;
