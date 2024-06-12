import '../../styles/user.css';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../../modules/UserModules";
import { Col } from "react-bootstrap";

import LoginForm from "../../components/form/LoginForm";
import CustomDivider from "../../components/custom/CustomDivider";
import KakaoButton from "../../components/button/KakaoButton";
import NaverButton from "../../components/button/NaverButton";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (success === true) {
            navigate('/');
            dispatch(reset());
        }
    }, [ success ]);

    return (
        <>
            <div className="auth-content">
                <h2 className="fs-2 mb-5 text-center">로그인</h2>

                <Col xl={4} lg={6} md={8} sm={10} xs={11} className="m-auto">
                    {/* LoginForm */}
                    <LoginForm />

                    <div className="mt-3 text-center">
                        <Link to={"/signup"}>회원이 아니신가요?</Link>
                    </div>

                    {/* Divider */}
                    <CustomDivider text={"또는"} />

                    {/* Social Login Button */}
                    <div className="d-grid gap-3">
                        <KakaoButton />
                        <NaverButton />
                    </div>
                </Col>
            </div>
        </>
    );
}

export default Login;
