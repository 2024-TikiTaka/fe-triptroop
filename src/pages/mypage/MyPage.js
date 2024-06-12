import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isLogin } from "../../utils/TokenUtils";
import { success } from "../../modules/UserModules";
import { callProfileAPI } from "../../apis/UserAPICalls";

import MyPageContent from "../../components/content/MyPageContent";

const MyPageHome = () => {

    const dispatch = useDispatch();
    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (isLogin()) {
            dispatch(callProfileAPI());
        }

    }, [ success ]);

    return (
        <>
            <MyPageContent>
            </MyPageContent>
        </>
    );
};

export default MyPageHome;
