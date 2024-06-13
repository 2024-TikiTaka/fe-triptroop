import React, { useEffect } from "react";
import SettingContent from "../../components/content/SettingContent";
import ProfileForm from "../../components/form/ProfileForm";
import { useSelector } from "react-redux";
import userReducer from "../../modules/UserModules";
import { isLogin } from "../../utils/TokenUtils";
import { callProfileAPI } from "../../apis/UserAPICalls";

function ProfileSettings() {

    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (isLogin()) {
            !profileInfo && userReducer(callProfileAPI());
        }
    }, []);

    return (
        <>
            <SettingContent>
                <ProfileForm profileInfo={profileInfo} />
            </SettingContent>
        </>
    );
};

export default ProfileSettings;
