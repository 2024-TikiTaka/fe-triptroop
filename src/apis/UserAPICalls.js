import { authRequest } from './api';
import { getUser, success } from "../modules/UserModules";
import { toast } from "react-toastify";


export const callUserInfoAPI = () => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/users/me`,);

        if (result.status === 200) {
            dispatch(getUser(result.data.result));
        }
    };
};

export const callChangePasswordAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/users/me/password`)
                                .then(response => {
                                    dispatch(getUser(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};
export const callWithdrawalAPI = ({ email, password }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.delete(
            `/api/v1/profiles/me`,
            new URLSearchParams({ email: email, password: password })
        ).then(response => {
            dispatch(success());
            toast.info("회원 탈퇴가 완료되었습니다.");
        }).catch(error => {
            console.log(error);
        });
    };
};

