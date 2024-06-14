import React, { useEffect } from "react";
import SettingContent from "../../components/content/SettingContent";
import ProfileForm from "../../components/form/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../utils/TokenUtils";
import { callProfileAPI } from "../../apis/ProfileAPICalls";

function ProfileSettings() {

    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.profileReducer);

    useEffect(() => {
        if (isLogin()) {
            !profile && dispatch(callProfileAPI());
        }
    }, []);

    return (
        <>
            <SettingContent>
                <ProfileForm profile={profile} />
            </SettingContent>
        </>
    );
};

export default ProfileSettings;
