import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../utils/TokenUtils";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";
import UserInfoForm from "../../components/form/UserInfoForm";

import { callUserInfoAPI } from "../../apis/UserAPICalls";

function UserSettings() {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (isLogin()) {
            !userInfo && dispatch(callUserInfoAPI());
        }

    }, [ success ]);

    return (
        <>
            <SettingContent>
                <UserInfoForm userInfo={userInfo} />
            </SettingContent>
        </>
    );
};

export default UserSettings;
