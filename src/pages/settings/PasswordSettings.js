import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";
import PasswordForm from "../../components/form/PasswordForm";

function PasswordSettings() {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

    }, [ success ]);

    return (
        <>
            <SettingContent>
                <PasswordForm />
            </SettingContent>
        </>
    );
};

export default PasswordSettings;
