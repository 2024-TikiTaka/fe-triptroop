import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../utils/TokenUtils";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";

import { callProfileAPI } from "../../apis/UserAPICalls";
import ProfileForm from "../../components/form/ProfileForm";

const ProfileSettings = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

        if (isLogin()) {
            dispatch(callProfileAPI());
        }

    }, [ success ]);

    return (
        <>
            <SettingContent>
                <ProfileForm />
            </SettingContent>
        </>
    );
};

export default ProfileSettings;
