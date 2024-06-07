import { toast } from 'react-toastify';
import { authRequest, request } from './api';
import { success } from '../modules/UserModules';
import { getEmail, removeToken, saveToken } from '../utils/TokenUtils';

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
            toast.error('오류가 발생했습니다.');
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
            toast.info('로그인이 완료되었습니다.');

            saveToken(result.headers);
            dispatch(success());
        } else {
            toast.error('오류가 발생했습니다.');
        }
    };
};

export const callLogoutAPI = () => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(`/api/v1/logout`);

        if (result?.status === 204) {
            removeToken();
            dispatch(success());
        }
    };
};
