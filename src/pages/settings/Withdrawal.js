import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/UserModules";
import SettingsContent from "../../components/content/SettingsContent";

const Withdrawal = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

    }, [ success ]);

    return (
        <>
            <SettingsContent>
                탈퇴
            </SettingsContent>
        </>
    );
};

export default Withdrawal;
