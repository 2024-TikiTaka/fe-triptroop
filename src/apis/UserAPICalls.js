import { authRequest } from './api';
import { getProfile, getUser } from "../modules/UserModules";


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
        return await authRequest.get(`/api/v1/profiles/me`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};