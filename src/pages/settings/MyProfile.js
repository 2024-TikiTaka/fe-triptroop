import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../utils/TokenUtils";
import { success } from "../../modules/UserModules";
import SettingsContent from "../../components/content/SettingsContent";
import UserInfoForm from "../../components/form/UserInfoForm";

import { callUserInfoAPI } from "../../apis/UserAPICalls";

const UserSettings = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (isLogin()) {
            dispatch(callUserInfoAPI());
        }

    }, [ success ]);

    return (
        <>
            <SettingsContent>
                <UserInfoForm userInfo={userInfo} />
            </SettingsContent>
        </>
    );
};

export default UserSettings;
