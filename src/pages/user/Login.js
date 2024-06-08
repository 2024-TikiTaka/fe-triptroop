import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";

import LoginForm from "../../components/form/LoginForm";
import { reset } from "../../modules/UserModules";

function Login() {
    const navigate = useNavigate();
    const { success } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (success === true) {
            navigate('/');
            dispatch(reset());
        }
    }, [ success ]);

    const onClickSignupHandler = () => {
        navigate('/signup');
    };

    return (
        <>
            <div className="auth-content">
                <Col lg={6} md={10} className="m-auto p-4 p-sm-7">
                    <h2 className="fs-2 mb-5 text-center">로그인</h2>
                    <LoginForm />
                </Col>
            </div>
        </>
    );
}

export default Login;
