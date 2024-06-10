import '../../styles/user.css';
import React from "react";
import { Button, Col } from "react-bootstrap";

import LoginForm from "../../components/form/LoginForm";
import CustomDivider from "../../components/custom/CustomDivider";
import { Kakao, Naver } from "../../components/common/Icons";
import { Link } from "react-router-dom";

function Login() {

    return (
        <>
            <div className="auth-content">
                <Col lg={6} md={10} className="m-auto p-4 p-sm-7">
                    <h2 className="fs-2 mb-5 text-center">로그인</h2>

                    <LoginForm />

                    <div className="mt-3 text-center">
                        <Link to={"/signup"}>회원이 아니신가요?</Link>
                    </div>

                    {/* Divider */}
                    <CustomDivider text={"또는"} />

                    {/* Social Login Button */}
                    <div className="d-grid gap-3">
                        <Button variant="light" className="mb-0 ">
                            <Kakao width={"18"} />
                            <span className="ms-2">카카오 아이디로 로그인</span>
                        </Button>
                        <Button variant="light" className="mb-0 ">
                            <Naver width={"18"} />
                            <span className="ms-2">네이버 아이디로 로그인</span>
                        </Button>
                    </div>
                </Col>
            </div>
        </>
    );
}

export default Login;
