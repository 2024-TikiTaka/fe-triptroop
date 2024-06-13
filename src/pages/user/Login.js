import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/TokenUtils";
import { reset } from "../../modules/UserModules";

import LoginForm from "../../components/form/LoginForm";
import CustomDivider from "../../components/custom/CustomDivider";
import KakaoButton from "../../components/button/KakaoButton";
import NaverButton from "../../components/button/NaverButton";
import AuthContent from "../../components/content/AuthContent";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (success === true) {
            if (isAdmin()) {
                navigate('/admin');
            } else {
                navigate('/');
            }

            dispatch(reset());
        }

    }, [ success ]);

    return (
        <>
            <AuthContent title={"로그인"}>

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
            </AuthContent>
        </>
    );
}

export default Login;
