import { authRequest } from './api';
import { getProfile } from "../modules/ProfileModules";

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

export const callProfileSaveAPI = ({ profileImage, profileRequest }) => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/profiles/me`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};


export const callProfileModifyAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.put(`/api/v1/profiles/me`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};


export const callProfileImageSaveAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.post(`/api/v1/profiles/me/upload`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};

export const callProfileImageRemoveAPI = () => {
    return async (dispatch, getState) => {
        return await authRequest.delete(`/api/v1/profiles/me/upload`)
                                .then(response => {
                                    dispatch(getProfile(response.data.result));
                                })
                                .catch(error => {
                                    console.log(error);
                                });
    };
};
