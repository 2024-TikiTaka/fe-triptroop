import React, { useEffect } from "react";
import SettingContent from "../../components/content/SettingContent";
import ProfileForm from "../../components/form/ProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { callMyProfileAPI } from "../../apis/ProfileAPICalls";

function ProfileSettings() {

    const dispatch = useDispatch();
    const { success: modifySuccess, currentProfile } = useSelector(state => state.profileReducer);


    useEffect(() => {
        if (modifySuccess) {
            dispatch(callMyProfileAPI());
        }
    }, [ dispatch, modifySuccess ]);
    return (
        <>
            <SettingContent>
                <ProfileForm profileInfo={currentProfile} />
            </SettingContent>
        </>
    );
};

export default ProfileSettings;
