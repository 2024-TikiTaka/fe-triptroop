import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Image, Nav, Navbar} from "react-bootstrap";
import {List} from "react-bootstrap-icons";

const CustomNavLink = ({to, children, onMouseEnter, onMouseLeave}) => (
    <NavLink
        to={to}
        className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </NavLink>
);

const navItems = [
    {to: "/admin", src: "/images/icon_admin_home.png", label: "메인으로"},
    {to: "/admin/users", src: "/images/icon_admin_user.png", label: "회원 관리"},
    {to: "/admin/inquires", src: "/images/icon_admin_inquiry.png", label: "문의 관리"},
    {to: "/admin/categories", src: "/images/icon_admin_category.png", label: "카테고리 관리"},
    {to: "/admin/notices", src: "/images/icon_admin_notice.png", label: "공지 관리"}
];

function AdminNav() {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = (item, e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) {
            img.src = item.src.replace('.png', '_hover.png');
        }
    };

    const handleMouseLeave = (item, e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) {
            img.src = item.src;
        }
    };

    return (
        <div id="sidebar" className="admin-nav fixed-top flex-row">
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
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={(e) => handleMouseEnter(item, e)}
                            onMouseLeave={(e) => handleMouseLeave(item, e)}
                        >
                            <CustomNavLink to={item.to}>
                                <img src={item.src} alt=""/>{item.label}
                            </CustomNavLink>
                        </div>
                    ))}
                </Nav>
            </Navbar.Brand>
        </div>
    );
}

export default AdminNav;
