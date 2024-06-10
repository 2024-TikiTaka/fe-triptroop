import { authRequest, request } from './api';
import { removeToken, saveToken } from '../utils/TokenUtils';
import { getUserInfo, getProfileInfo, success } from "../modules/UserModules";


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
        const result = await authRequest.get(`/api/v1/users/me`);

        console.log(result);
        if (result.status === 200) {
            dispatch(getUserInfo(result));
        }
    };
};


export const callProfileInfoAPI = () => {

    return async (dispatch, getState) => {
        const result = await authRequest.get(`/api/v1/users/me/profile`);

        if (result?.status === 200) {
            dispatch(getProfileInfo(result));
        }
    };
};