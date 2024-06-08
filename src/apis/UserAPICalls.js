import { toast } from 'react-toastify';
import { authRequest, request } from './api';
import { getCurrentProfile, getCurrentUser, success } from '../modules/UserModules';
import { removeToken, saveToken } from '../utils/TokenUtils';

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
            toast.error('회원가입 중 오류가 발생했습니다.');
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

            toast.info('로그인이 완료되었습니다.');
        } else {
            console.error('Logout Error!');
        }
    };
};

export const callLogoutAPI = () => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/api/v1/logout`);

        if (result?.status === 200) {
            dispatch(success());
        } else {
            console.error('Logout Error!');
        }
        removeToken();
        window.location.reload();
    };
};

