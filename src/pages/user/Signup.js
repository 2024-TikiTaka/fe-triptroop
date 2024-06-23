import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { reset } from "../../modules/UserModules";
import SignupForm from "../../components/form/SignupForm";
import AuthContent from "../../components/content/AuthContent";

function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (success === true) {
            navigate(`/login`);
            dispatch(reset());
        }
    }, [ dispatch, navigate, success ]);

    return (
        <>
            <AuthContent title={"이메일로 가입하기"}>
                <SignupForm />
            </AuthContent>
        </>);
}

export default Signup;