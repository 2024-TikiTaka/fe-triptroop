import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingContent from "../../components/content/SettingContent";
import WithdrawalForm from "../../components/form/WithdrawalForm";

function Withdrawal() {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userReducer);

    return (
        <>
            <SettingContent>
                <WithdrawalForm />
            </SettingContent>
        </>
    );
};

export default Withdrawal;
