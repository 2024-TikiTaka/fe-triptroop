import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../utils/TokenUtils";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";
import UserInfoForm from "../../components/form/UserInfoForm";

import { callCurrentUserAPI } from "../../apis/UserAPICalls";

function UserSettings() {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (isLogin()) {
            !currentUser && dispatch(callCurrentUserAPI());
        }

    }, [ dispatch, currentUser ]);

    return (
        <>
            <SettingContent>
                <UserInfoForm userInfo={currentUser} />
            </SettingContent>
        </>
    );
};

export default UserSettings;
