import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

const CustomNavLink = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {children}
    </NavLink>
);

function Navigation() {
    return (
        <Navbar bg="" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;