import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/UserModules";
import SettingsContent from "../../components/content/SettingsContent";

const UserSettings = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

    }, [ success ]);

    return (
        <>
            <SettingsContent>
                비밀번호 변경
            </SettingsContent>
        </>
    );
};

export default UserSettings;
