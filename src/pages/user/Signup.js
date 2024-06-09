import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../../modules/UserModules";
import SignupForm from "../../components/form/SignupForm";
import { Col } from "react-bootstrap";


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

    return (
        <>
            <div className="auth-content">
                <Col lg={6} md={10} className="m-auto p-4 p-sm-7">
                    <h2 className="fs-2 mb-5 text-center">이메일로 가입하기</h2>

                    <SignupForm />
                </Col>
            </div>
        </>
    );
}

export default Signup;