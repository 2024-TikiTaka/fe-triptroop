import { authRequest, request } from './api';
import { getProfile, success } from "../modules/ProfileModules";
import { toast } from "react-toastify";


export const callCheckNicknameAPI = ({ nickname }) => {
    return async (dispatch, getState) => {
        return await authRequest.get(`/api/v1/check/nickname?nickname=${nickname}`)
                                .then((response) => response.data)
                                .catch((error) => error.response.data);
    };
};

export const callMyProfileAPI = (history) => {

    return (dispatch, getState) => {
        return authRequest.get(`/api/v1/profiles/me`)
                          .then(response => {
                              if (response.status === 200) {
                                  dispatch(getProfile(response.data.result));
                              }
                          })
                          .catch(error => error.response);

    };
};
export const callMyProfileSaveAPI = ({ profileImage, profileRequest }) => {
    return async (dispatch, getState) => {
        const response = await authRequest.post(`/api/v1/profiles/me`);
        // .then(response => {
        //     dispatch(getProfile(response.data.result));
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    };
};


export const callMyProfileModifyAPI = ({ profileRequest }) => {
    return async (dispatch, getState) => {
        console.log(profileRequest);
        return await authRequest.put(
            `/api/v1/profiles/me`,
            JSON.stringify(profileRequest),
            { headers: { 'Content-Type': 'application/json' } })
                                .then((response) => response.data)
                                .catch((error) => error.response.data);
    };
};


export const callMyProfileImageSaveAPI = ({ profileImage }) => {
    return async (dispatch, getState) => {
        const response = await authRequest.post(`/api/v1/profiles/me/upload`, profileImage);

        if (response.status === 201) {
            dispatch(success());
            toast.info(response.data.message);
        } else {
            const data = response.data;
            toast.error(data?.message || '파일 업로드 중 오류가 발생하였습니다.');
        }
    };
};

export const callMyProfileImageRemoveAPI = () => {
    return async (dispatch, getState) => {
        try {
            const response = await authRequest.delete(`/api/v1/profiles/me/upload`);

            if (response.status === 204) {
                dispatch(success());
                toast.info('프로필 삭제가 완료되었습니다.');
            }
        } catch (error) {
            console.warn(error);
        }
    };
};
