import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../../modules/UserModules";
import SignupForm from "../../components/form/SignupForm";
import { Button, Col } from "react-bootstrap";
import CustomDivider from "../../components/custom/CustomDivider";
import { Kakao, Naver } from "../../components/common/Icons";
import { EnvelopeAt } from "react-bootstrap-icons";


function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (success === true) {
            navigate(`/login`);
            dispatch(reset());
        }
    }, [ success ]);
    
    const SignUpButtonList = () => {
        return (
            <div className="auth-content">
                <h2 className="fs-2 mt-5 mb-5 text-center">회원 가입</h2>

                <Col lg={6} md={10} className="m-auto">
                    <div className="d-grid gap-3">
                        <Button
                            variant="light" size={"lg"}
                            className="fs-6 mb-0">
                            <EnvelopeAt size={"18"} />
                            <span className="ms-2">이메일로 가입하기</span>
                        </Button>

                        {/* Divider */}
                        <CustomDivider text={"또는"} />

                        {/* Social Login Button */}
                        <Button
                            variant="light" size={"lg"}
                            style={{ "background": "#FEE500" }} className="fs-6 mb-0">
                            <Kakao width={"18"} />
                            <span className="ms-2">카카오로 시작하기</span>
                        </Button>
                        <Button
                            variant="light" size={"lg"}
                            style={{ "background": "#03c75a" }} className="fs-6 mb-0">
                            <Naver width={"18"} fill={"#fff"} />
                            <span className="ms-2 text-white">네이버로 시작하기</span>
                        </Button>
                    </div>

                </Col>
            </div>
        );
    };

    const EmailSignUpForm = () => {
        return (
            <div className="auth-content">
                <h2 className="fs-2 mt-5 mb-5 text-center">이메일로 가입하기</h2>

                <Col lg={6} md={10} className="m-auto">
                    <SignupForm />
                </Col>
            </div>
        );
    };

    return (
        <>
            <EmailSignUpForm />
        </>
    );
}

export default Signup;