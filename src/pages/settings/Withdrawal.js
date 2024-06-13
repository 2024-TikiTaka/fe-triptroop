import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { success } from "../../modules/UserModules";
import SettingContent from "../../components/content/SettingContent";

const Withdrawal = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    useEffect(() => {

    }, [ success ]);

    return (
        <>
            <SettingContent>
                탈퇴
            </SettingContent>
        </>
    );
};

export default Withdrawal;
