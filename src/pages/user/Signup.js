import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../../modules/UserModules";
import SignupForm from "../../components/form/SignupForm";
import { Button, Col } from "react-bootstrap";
import CustomDivider from "../../components/custom/CustomDivider";
import { Kakao, Naver } from "../../components/common/Icons";


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
                <h2 className="fs-2 mt-5 mb-5 text-center">회원 가입</h2>

                <Col xl={4} lg={6} md={8} sm={10} xs={11} className="m-auto">
                    <div className="d-grid gap-3">

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


                        {/* Divider */}
                        <CustomDivider text={"또는"} my={"my-4"} />

                        <SignupForm />
                    </div>
                </Col>
            </div>
        </>);
}

export default Signup;