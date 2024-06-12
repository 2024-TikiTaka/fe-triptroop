import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Image } from "react-bootstrap";
import { callProfileAPI } from "../../apis/UserAPICalls";
import { isLogin } from "../../utils/TokenUtils";
import { DefaultProfile } from "./Icons";
import { PencilSquare, Sliders } from "react-bootstrap-icons";

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

                            <div className="card-header p-3">
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

                            <div className="card-body ">
                                <ul className="nav nav-pills-primary-soft flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-profile.html"><i className="bi bi-person fa-fw me-2"></i>My Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-bookings.html"><i className="bi bi-ticket-perforated fa-fw me-2"></i>My Bookings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-travelers.html"><i className="bi bi-people fa-fw me-2"></i>Travelers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-payment-details.html"><i className="bi bi-wallet fa-fw me-2"></i>Payment Details</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="account-wishlist.html"><i className="bi bi-heart fa-fw me-2"></i>Wishlist</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-settings.html"><i className="bi bi-gear fa-fw me-2"></i>Settings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="account-delete.html"><i className="bi bi-trash fa-fw me-2"></i>Delete Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-danger bg-danger-soft-hover" href="#"><i className="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out</a>
                                    </li>
                                </ul>
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
