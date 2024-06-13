import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";

const PasswordSettings = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

    }, [ success ]);

    return (
        <>
            <SettingContent>
                비밀번호 변경
            </SettingContent>
        </>
    );
};

export default PasswordSettings;
