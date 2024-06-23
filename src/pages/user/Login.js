import React from "react";

import AuthContent from "../../components/content/AuthContent";
import LoginForm from "../../components/form/LoginForm";
import CustomDivider from "../../components/custom/CustomDivider";
import KakaoButton from "../../components/button/KakaoButton";
import NaverButton from "../../components/button/NaverButton";
import EmailButton from "../../components/button/EmailButton";


function Login() {
    return (
        <>
            <AuthContent title={"로그인"}>

                {/* LoginForm */}
                <LoginForm />

                {/* Divider */}
                <CustomDivider text={"또는"} />

                {/* Social Login Button */}
                <div className="d-grid gap-3">
                    <EmailButton />
                    {/* <KakaoButton /> */}
                    {/* <NaverButton /> */}
                </div>
            </AuthContent>
        </>
    );
}

export default Login;
