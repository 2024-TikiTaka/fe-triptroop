import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContent from "../../components/content/AuthContent";
import FindPasswordForm from "../../components/form/FindPasswordForm";

function FindPassword() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);

    return (
        <>
            <AuthContent title={"비밀번호 찾기"}>
                <FindPasswordForm />
            </AuthContent>
        </>
    );
}

export default FindPassword;
