import { Col } from "react-bootstrap";

import LoginForm from "../../components/form/LoginForm";

function Login() {

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
