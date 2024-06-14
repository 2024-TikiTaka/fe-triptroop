import { authRequest, request } from './api';
import { success } from "../modules/UserModules";
import { removeToken, saveToken } from "../utils/TokenUtils";
import { toast } from "react-toastify";

export async function callKakaoAuthAPI({ code }) {
    return await request('POST', '/api/v1/oauth/kakao/code?code=' + code,
        { "Content-Type": "application/x-www-form-urlencoded", }
    );
}

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
        return await authRequest
            .post(`/api/v1/logout`)
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

export const callCheckEmailAPI = ({ email }) => {
    return async (dispatch, getState) => {
        return await request(
            'GET',
            `/api/v1/check/email?email=${email}`,
            { 'Content-Type': 'application/json' }
        );
    };
};

export const callSendVerificationCodeAPI = ({ email }) => {
    return async (dispatch, getState) => {
        return await request(
            'POST',
            `/api/v1/email/send`,
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            { email: email }
        );
    };
};

export const callCheckVerificationCodeAPI = ({ verifyRequest }) => {
    return async (dispatch, getState) => {
        return await request(
            'POST',
            `/api/v1/email/verify`,
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            new URLSearchParams({ verifyRequest })
        );
    };
};
