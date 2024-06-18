import React, { useEffect } from "react";

import AuthContent from "../../components/content/AuthContent";
import LoginForm from "../../components/form/LoginForm";
import CustomDivider from "../../components/custom/CustomDivider";
import KakaoButton from "../../components/button/KakaoButton";
import NaverButton from "../../components/button/NaverButton";
import EmailButton from "../../components/button/EmailButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callMyProfileAPI } from "../../apis/ProfileAPICalls";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentProfile } = useSelector(state => state.profileReducer);

    useEffect(() => {
        const loadProfile = async () => {
            const profileData = await dispatch(callMyProfileAPI());

            if (!profileData) {
                navigate('/profile/add'); // Redirect to /profile/register if profile data is missing
            }
        };

        loadProfile();
    }, [ dispatch, navigate ]);
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
