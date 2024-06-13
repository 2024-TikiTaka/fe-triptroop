import React from "react";
import { Nav } from 'react-bootstrap';
import { BoxArrowRight, Key, PencilSquare, Person, Sliders, Trash } from "react-bootstrap-icons";
import ProfileImage from "./ProfileImage";
import { NavLink } from "react-router-dom";
import { callLogoutAPI } from "../../apis/AuthAPICalls";
import { useDispatch } from "react-redux";

const CustomNavLink = ({ to, children }) => {

    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {children}
        </NavLink>
    );
};
function SettingNavbar({ profileInfo }) {

    const dispatch = useDispatch();
    return (
        <>
            <div className="settings-nav col-lg-4 col-xl-3">
                <div className="offcanvas-lg " tabIndex="-1" id="offcanvasSidebar">
                    <div className="offcanvas-header justify-content-end pb-2">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body p-3 p-lg-0">
                        <div className="card bg-light w-100">

                            <div className="position-absolute top-0 end-0 p-3">
                                <a href="#" className="text-primary-hover" data-bs-toggle="tooltip" data-bs-title="Edit profile">
                                    <PencilSquare />
                                </a>
                            </div>

                            <div className="card-header p-3 bg-white">
                                <div className="text-center">
                                    <ProfileImage size={"7.5rem"} />
                                    <p className="nickname">{profileInfo?.nickname}</p>
                                    <p className="email"></p>
                                </div>

                            </div>

                            <div className="card-body bg-white">
                                <Nav className="nav-pills-primary-soft flex-column text-decoration-none">
                                    <Nav.Item>
                                        <Nav.Link as={CustomNavLink} to="/settings/profile">
                                            <Person className="me-2" />프로필 관리
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={CustomNavLink} to="/settings/user">
                                            <Person className="me-2" />계정 설정
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid mb-0 d-lg-none w-100">
                    <button className="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                        <Sliders color={"white"} /> Menu
                    </button>
                </div>
            </div>
        </>
    );
}

export default SettingNavbar;
