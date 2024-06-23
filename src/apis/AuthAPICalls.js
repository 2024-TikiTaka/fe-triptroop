import { authRequest, request } from './api';
import { success } from "../modules/UserModules";
import { removeToken, saveToken } from "../utils/TokenUtils";
import { toast } from "react-toastify";

export const callCheckEmailAPI = (email) => {
    return async (dispatch, getState) => {
        const response = await request(
            'GET',
            `/api/v1/check/email?email=${email}`,
            { 'Content-Type': 'application/json' }
        );

        return response.data;
    };
};

export const callSendVerificationCodeAPI = (email) => {
    return async (dispatch, getState) => {
        const response = await request(
            'POST',
            `/api/v1/email/send`,
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            { email: email }
        );

        return response.data;
    };
};

export const callCheckVerificationCodeAPI = (verifyToken, codeValue, emailValue) => {
    return async (dispatch, getState) => {
        const response = await request(
            'POST',
            `/api/v1/email/verify`,
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            new URLSearchParams({ token: verifyToken, code: codeValue, email: emailValue })
        );

        return response.data;
    };
};

export const callSignupAPI = ({ signupRequest }) => {
    return async (dispatch, getState) => {
        const response = await request(
            'POST',
            '/api/v1/signup',
            { 'Content-Type': 'application/json' },
            JSON.stringify(signupRequest),
        );

        if (response?.status === 201) {
            dispatch(success());
        } else {
            return response;
        }
    };
};

export const callLoginAPI = ({ loginRequest }) => {
    return async (dispatch, getState) => {
        const response = await request('POST',
            '/api/v1/login',
            { 'Content-Type': 'application/json' },
            JSON.stringify(loginRequest),
        );

        if (response?.status === 200) {
            saveToken(response.headers);
            dispatch(success());
        } else if (response?.status === 401) {
            toast.error("로그인 정보가 올바르지 않습니다.", { toastId: 'login' });
        } else {
            toast.error("오류가 발생하였습니다.", { toastId: 'login' });
        }
    };
};

export const callLogoutAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/logout`)
                                .then(result => {
                                    removeToken();
                                    dispatch(success());
                                })
                                .catch(error => {
                                    removeToken();
                                    window.location.replace('/');
                                });
    };
};

export async function callKakaoAuthAPI({ code }) {
    return await request('POST', '/api/v1/oauth/kakao/code?code=' + code,
        { "Content-Type": "application/x-www-form-urlencoded", }
    );
}
