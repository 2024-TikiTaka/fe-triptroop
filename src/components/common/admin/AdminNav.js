import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Image, Nav, Navbar} from "react-bootstrap";
import {List} from "react-bootstrap-icons";

const CustomNavLink = ({to, children}) => (
    <NavLink
        to={to}
        className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
        {children}
    </NavLink>
);

function AdminNav() {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <div id="sidebar" className="admin-nav fixed-top flex-row ">
            <Button
                variant=""
                className={expanded ? 'd-block' : 'd-md-none d-md-block'}
                onClick={() => setExpanded(!expanded)}
                aria-controls="sidebar-nav"
                aria-expanded={expanded}
            >
                <List size="20px"/>
            </Button>
            <Navbar.Brand
                className={`logo-btn flex-column w-100 vh-100 align-items-center ${expanded ? 'd-block' : 'd-none d-md-block'}`}>
                <Image src="/images/admin_logo.svg" fluid onClick={() => navigate(`/`)}/>
                <Nav className="flex-column" id="sidebar-nav">
                    <Nav.Link as={CustomNavLink} to="/admin/users"><img src="/images/icon_admin_user.png" alt=""/>회원 관리</Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/admin/inquires"><img src="/images/icon_admin_inquiry.png" alt=""/>문의
                        관리</Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/admin/categores"><img src="/images/icon_admin_category.png"
                                                                            alt=""/>카테고리 관리</Nav.Link>
                    <Nav.Link as={CustomNavLink} to="/admin/notices">공지 관리</Nav.Link>
                </Nav>
            </Navbar.Brand>
        </div>
    );
}

export default AdminNav;
