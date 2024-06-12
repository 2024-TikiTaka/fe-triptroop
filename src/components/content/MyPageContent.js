import React from "react";
import { Gear, List } from "react-bootstrap-icons";

function MyPageContent() {
    return (
        <>
            <div className="mypage-content">
                <section className="pt-4">
                    <div className="container">
                        <div className="card rounded-3 border p-3 pb-2">
                            <div className="d-sm-flex align-items-center">
                                <div className="avatar avatar-xl mb-2 mb-sm-0">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                </div>
                                <h4 className="mb-2 mb-sm-0 ms-sm-3">
                                    {/* <span className="fw-light">Hi</span> */}
                                    닉네임
                                </h4>
                                <a href="#" className="btn btn-sm btn-primary-soft mb-0 ms-auto flex-shrink-0"><i className="bi bi-plus-lg fa-fw me-2"></i>Add New Listing</a>
                            </div>

                            <button className="btn btn-primary w-100 d-block d-xl-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#dashboardMenu" aria-controls="dashboardMenu">
                                <List color={"white"} />Dashboard Menu
                            </button>

                            <div className="offcanvas-xl offcanvas-end mt-xl-3" tabIndex="-1" id="dashboardMenu">
                                <div className="offcanvas-header border-bottom p-3">
                                    <h5 className="offcanvas-title">Menu</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#dashboardMenu" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body p-3 p-xl-0">
                                    <div className="navbar navbar-expand-xl">
                                        <ul className="navbar-nav navbar-offcanvas-menu">
                                            <li className="nav-item"><a className="nav-link active" href="#"><i className="bi bi-house-door fa-fw me-1"></i>Dashboard</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-journals fa-fw me-1"></i>Listings</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-bookmark-heart fa-fw me-1"></i>Bookings</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="dropdoanMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bi bi-list-ul fa-fw me-1"></i>Dropdown
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdoanMenu">
                                                    <li><a className="dropdown-item" href="#">Item 1</a></li>
                                                    <li><a className="dropdown-item" href="#">Item 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container vstack gap-4">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fs-4 mb-0"><Gear />Settings</h1>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-12">
                                <div className="bg-light pb-0 px-2 px-lg-0 rounded-top">
                                    <ul className="nav nav-tabs nav-bottom-line nav-responsive border-0 nav-justified" role="tablist">
                                        <li className="nav-item" role="presentation"><a className="nav-link mb-0 active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab"><i
                                            className="fas fa-cog fa-fw me-2"></i>Edit Profile</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-2" aria-selected="false" tabIndex="-1" role="tab"><i
                                            className="fas fa-bell fa-fw me-2"></i>Notification Settings</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link mb-0" data-bs-toggle="tab" href="#tab-3" aria-selected="false" tabIndex="-1" role="tab"><i
                                            className="fas fa-user-circle fa-fw me-2"></i>Account Settings</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-12">
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="tab-1" role="tabpanel">
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="card border">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Edit Profile</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="mb-3">
                                                            <label className="form-label">Name</label>
                                                            <input type="text" className="form-control" value="Jacqueline Miller" placeholder="Name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Profile picture</label>
                                                            <div className="d-flex align-items-center">
                                                                <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                                                    <span className="avatar avatar-xl">
                                                                        <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow"
                                                                             src="assets/images/avatar/01.jpg" alt="" />
                                                                    </span>
                                                                </label>
                                                                <label className="btn btn-sm btn-primary-soft mb-0" htmlFor="uploadfile-1">Change</label>
                                                                <input id="uploadfile-1" className="form-control d-none" type="file" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Email id</label>
                                                            <input type="email" className="form-control" value="hello@gmail.com" placeholder="Enter your email id" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Mobile number</label>
                                                            <input type="text" className="form-control" value="222 555 666" placeholder="Enter your mobile number" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Location</label>
                                                            <input className="form-control" type="text" value="New Hampshire" />
                                                        </div>
                                                        <div>
                                                            <label className="form-label">Birthday</label>
                                                            <input type="text" className="form-control flatpickr flatpickr-input" value="29 Aug 1994" placeholder="Enter your birth-date"
                                                                   data-date-format="d M Y" readOnly="readonly" />
                                                        </div>
                                                        <div className="d-flex justify-content-end mt-4">
                                                            <a href="#" className="btn text-secondary border-0 me-2">Discard</a>
                                                            <a href="#" className="btn btn-primary">Save change</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card border">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Update Email</h5>
                                                        <p className="mb-0 small">Your current email address is <span className="text-primary">example@gmail.com</span></p>
                                                    </div>
                                                    <form className="card-body">
                                                        <label className="form-label">Enter your new email id</label>
                                                        <input type="email" className="form-control" placeholder="Enter your email id" />

                                                        <div className="text-end mt-3">
                                                            <a href="#" className="btn btn-primary mb-0">Save Email</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="card border">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Update Password</h5>
                                                        <p className="mb-0 small">Your current email address is <span className="text-primary">example@gmail.com</span></p>
                                                    </div>
                                                    <form className="card-body">
                                                        <div className="mb-3">
                                                            <label className="form-label">Current password</label>
                                                            <input className="form-control" type="password" placeholder="Enter current password" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label"> Enter new password</label>
                                                            <div className="input-group">
                                                                <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                                                                <span className="input-group-text p-0 bg-transparent">
                                                                    <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="form-label">Confirm new password</label>
                                                            <input className="form-control" type="password" placeholder="Confirm new password" />
                                                        </div>

                                                        <div className="text-end mt-3">
                                                            <a href="#" className="btn btn-primary mb-0">Change Password</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="tab-2" role="tabpanel">
                                        <div className="card border mb-4">
                                            <div className="card-header bg-transparent border-bottom">
                                                <h5 className="card-header-title">Notification Settings</h5>
                                                <p className="mb-0">Figure what you want to be notified about, and unsubscribe from what you don't.</p>
                                            </div>

                                            <form className="card-body">
                                                <div className="mb-4">
                                                    <label className="form-label">Newsletter *</label>
                                                    <div className="d-flex gap-4 flex-wrap">
                                                        <div className="form-check radio-bg-light">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDaily" checked="" />
                                                            <label className="form-check-label" htmlFor="flexRadioDaily">
                                                                Daily
                                                            </label>
                                                        </div>
                                                        <div className="form-check radio-bg-light">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Twice a week
                                                            </label>
                                                        </div>
                                                        <div className="form-check radio-bg-light">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                Weekly
                                                            </label>
                                                        </div>
                                                        <div className="form-check radio-bg-light">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                Never
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy1">Notify me via email when logging in</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy1" checked="" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy2">I would like to receive booking assist reminders</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy2" checked="" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy3">I would like to receive emails about Booking promotions</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy3" checked="" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy7">I would like to know about information and offers related to my upcoming
                                                        trip
                                                    </label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy7" checked="" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy4">Show your profile publicly</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy4" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy6">Send SMS confirmation for all online payments</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy6" />
                                                </div>

                                                <div className="form-check form-switch form-check-md d-flex justify-content-between mb-4">
                                                    <label className="form-check-label ps-0 pe-4" htmlFor="checkPrivacy5">Check which device(s) access your account</label>
                                                    <input className="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy5" checked="" />
                                                </div>

                                                <div className="d-sm-flex justify-content-end">
                                                    <button type="button" className="btn btn-sm btn-primary me-2 mb-0">Save changes</button>
                                                    <a href="#" className="btn btn-sm btn-outline-secondary mb-0">Cancel</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="tab-3" role="tabpanel">
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="card border">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Security settings</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <form className="mb-3">
                                                            <h6>Two-factor authentication</h6>
                                                            <label className="form-label">Add a phone number to set up two-factor authentication</label>
                                                            <input type="text" className="form-control mb-2" placeholder="Enter your mobile number" />
                                                            <button className="btn btn-sm btn-primary mb-0">Send Code</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="card border rounded-3">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Linked account</h5>
                                                    </div>
                                                    <div className="card-body pb-0">
                                                        <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                                                            <h2 className="fs-1 mb-0 me-3"><i className="fab fa-google text-google-icon"></i></h2>
                                                            <div>
                                                                <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                                                                    <i className="bi bi-check-circle-fill text-success fs-5"></i>
                                                                </div>
                                                                <h6 className="mb-1">Google</h6>
                                                                <p className="mb-1 small">You are successfully connected to your Google account</p>
                                                                <button type="button" className="btn btn-sm btn-danger mb-0">Invoke</button>
                                                                <a href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</a>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4 d-sm-flex border p-3 rounded">
                                                            <h2 className="fs-1 mb-0 me-3"><i className="fab fa-linkedin-in text-linkedin"></i></h2>
                                                            <div>
                                                                <h6 className="mb-1">Linkedin</h6>
                                                                <p className="mb-1 small">Connect with Linkedin account for a personalized experience</p>
                                                                <button type="button" className="btn btn-sm btn-primary mb-0">Connect Linkedin</button>
                                                                <a href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</a>
                                                            </div>
                                                        </div>

                                                        <div className="mb-4 d-sm-flex border p-3 rounded">
                                                            <h2 className="fs-1 mb-0 me-3"><i className="fab fa-facebook text-facebook"></i></h2>
                                                            <div>
                                                                <h6 className="mb-1">Facebook</h6>
                                                                <p className="mb-1 small">Connect with Facebook account for a personalized experience</p>
                                                                <button type="button" className="btn btn-sm btn-primary mb-0">Connect Facebook</button>
                                                                <a href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="card border rounded-3">
                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Social media profile</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="mb-3">
                                                            <label className="form-label"><i className="fab fa-facebook text-facebook me-2"></i>Enter facebook username</label>
                                                            <input className="form-control" type="text" value="loristev" placeholder="Enter username" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label"><i className="bi bi-twitter text-twitter me-2"></i>Enter twitter username</label>
                                                            <input className="form-control" type="text" value="loristev" placeholder="Enter username" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label"><i className="fab fa-instagram text-instagram-gradient me-2"></i>Enter instagram username</label>
                                                            <input className="form-control" type="text" value="loristev" placeholder="Enter username" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label"><i className="fab fa-youtube text-youtube me-2"></i>Add your youtube profile URL</label>
                                                            <input className="form-control" type="text" value="https://www.youtube.com/in/Booking-05620abc" placeholder="Enter username" />
                                                        </div>

                                                        <div className="d-flex justify-content-end mt-4">
                                                            <button type="button" className="btn btn-primary mb-0">Save change</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="card border">

                                                    <div className="card-header border-bottom">
                                                        <h5 className="card-header-title">Active Logs</h5>
                                                    </div>

                                                    <div className="card-body">
                                                        <div className="table-responsive border-0">
                                                            <table className="table align-middle p-4 mb-0 table-hover">

                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col" className="border-0 rounded-start">Browser</th>
                                                                        <th scope="col" className="border-0">IP</th>
                                                                        <th scope="col" className="border-0">Time</th>
                                                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>
                                                                    <tr>
                                                                        <td> Chrome On Window</td>
                                                                        <td> 173.238.198.108</td>
                                                                        <td> 12 Nov 2021</td>
                                                                        <td>
                                                                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td> Mozilla On Window</td>
                                                                        <td> 107.222.146.90</td>
                                                                        <td> 08 Nov 2021</td>
                                                                        <td>
                                                                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td> Chrome On iMac</td>
                                                                        <td> 231.213.125.55</td>
                                                                        <td> 06 Nov 2021</td>
                                                                        <td>
                                                                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Mozilla On Window</td>
                                                                        <td> 37.242.105.138</td>
                                                                        <td> 02 Nov 2021</td>
                                                                        <td>
                                                                            <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Sign out</button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <form className="mt-4">
                                                            <h6 className="mb-0">Active sessions</h6>
                                                            <p className="mb-2">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p>
                                                            <button className="btn btn-sm btn-danger mb-0">Sign Out of all devices</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default MyPageContent;
