import { authRequest } from './api';
import { getUser, success } from "../modules/UserModules";
import { toast } from "react-toastify";
import { removeToken } from "../utils/TokenUtils";

export const callCurrentUserAPI = () => {
    return async (dispatch, getState) => {
        const response = await authRequest.get(`/api/v1/users/me`);

        if (response.status === 200) {
            dispatch(getUser(response.data.result));
        }
    };
};
export const callChangePasswordAPI = (currentPassword, newPassword) => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/users/me/password`, JSON.stringify({ currentPassword, newPassword }))
                                .then(response => response.data)
                                .catch(error => error);
    };
};


export const callCheckPasswordAPI = (password) => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/users/me/password`, JSON.stringify({ password }))
                                .then(response => response.data)
                                .catch(error => error);
    };
};

export const callWithdrawalAPI = ({ email, password }) => {
    return async (dispatch, getState) => {
        const response = await authRequest.delete(`/api/v1/profiles/me`, new URLSearchParams({ email, password }))
                                          .then(response => {
                                              if (response.status === 204) {
                                                  dispatch(success());
                                                  removeToken();
                                                  toast.info('회원 탈퇴가 완료되었습니다.');
                                              }
                                          })
                                          .catch(error => {
                                              console.log(error);
                                          });
    };
};


