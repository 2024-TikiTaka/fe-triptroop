import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image, Nav } from 'react-bootstrap';
import { BoxArrowRight, Key, PencilSquare, Person, Sliders, Trash } from "react-bootstrap-icons";
import { callProfileAPI } from "../../apis/UserAPICalls";
import { isLogin } from "../../utils/TokenUtils";
import { DefaultProfile } from "./Icons";
import * as PropTypes from "prop-types";

function Keygen(props) {
    return null;
}

Keygen.propTypes = { className: PropTypes.string };
function SettingsNavbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (isLogin()) {
            dispatch(callProfileAPI());
        }
    }, []);


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
                                    <div className="avatar avatar-xl mb-2 profile-image">
                                        {!profileInfo ?
                                            (
                                                <DefaultProfile
                                                    className="avatar mx-auto d-block"

                                                />)
                                            : <Image src={profileInfo?.profile.profileImage} className="avatar" />
                                        }
                                    </div>
                                    <p className="nickname">{profileInfo?.profile.nickname}</p>
                                    {/* <p className="email">hello@gmail.com</p> */}
                                </div>

                            </div>

                            <div className="card-body bg-white">
                                <Nav className="nav-pills-primary-soft flex-column text-decoration-none">
                                    <Nav.Item>
                                        <Nav.Link className="text-none ">
                                            <Person className="me-2" />계정
                                        </Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item> */}
                                    {/*     <Nav.Link> */}
                                    {/*         <Person className="me-2" />프로필 */}
                                    {/*     </Nav.Link> */}
                                    {/* </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link>
                                            <Key className="me-2" />비밀번호
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link>
                                            <Trash className="me-2" />회원 탈퇴
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="">
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

export default SettingsNavbar;
