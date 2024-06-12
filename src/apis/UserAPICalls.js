import { authRequest, request } from './api';
import { removeToken, saveToken } from '../utils/TokenUtils';
import { getProfile, getUser, success } from "../modules/UserModules";
import { toast } from "react-toastify";


export const callCheckEmailAPI = ({ email }) => {
    return async (dispatch, getState) => {
        return await request(
            'GET',
            `/api/v1/check/email?email=${email}`,
            { 'Content-Type': 'application/json' }
        );
    };
};

export const callSignupAPI = ({ signupRequest }) => {
    return async (dispatch, getState) => {
        const result = await request(
            'POST',
            '/api/v1/signup',
            { 'Content-Type': 'application/json' },
            JSON.stringify(signupRequest),
        );

        if (result?.status === 201) {
            dispatch(success());
        } else {
            return result;
        }
    };
};

export const callLoginAPI = ({ loginRequest }) => {
    return async (dispatch, getState) => {
        const result = await request(
            'POST',
            '/api/v1/login',
            { 'Content-Type': 'application/json' },
            JSON.stringify(loginRequest),
        );

        if (result?.status === 200) {
            saveToken(result.headers);
            dispatch(success());
        } else if (result?.status === 401) {
            toast.error("로그인 정보가 일치하지 않습니다.", {
                toastId: 'loginFailed'
            });
        } else {
            toast.error("오류가 발생하였습니다.", {
                toastId: 'loginFailed'
            });
        }
    };
};

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/api/v1/logout`);

        if (result?.status === 200) {
            removeToken();
            dispatch(success());
        }
    };
};


export const callUserInfoAPI = () => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/users/me`,);

        if (result.status === 200) {
            dispatch(getUser(result.data.result));
        }
    };
};


export const callProfileAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.get(`/api/v1/users/me/profile`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};