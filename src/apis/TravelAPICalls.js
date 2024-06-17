import {authRequest, request} from "./api";
import {getTravels, getTravel, success} from "../modules/TravelModules";
import {toast} from "react-toastify";
import {getComments} from "../modules/TravelCommentModules";
import {getPlace} from "../modules/PlaceModules";

/* 전체 조회 */
export const callTravelListAPI = ({ currentPage = 1}) => {

    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/travels?page=${currentPage}`);
        console.log('callTravelListAPI result :' ,result);

        if (result?.status === 200) {
            dispatch(getTravels(result));
        } else {
            toast.error("error")
        }
    }
};

export const callTravelCategoryListAPI = ({ categoryId, currentPage = 1 }) => {

    return async (dispatch, getState) => {

        const result = await request('GET', `/api/v1/travels?categoryId=${categoryId}&page=${currentPage}`);

    }

}



/* 상세 조회 */
export const callTravelDetailAPI = ({ travelId }) => {
    return async (dispatch, getState) => {
        console.log('travelId' ,travelId)
        const result = await request('GET', `/api/v1/travels/${travelId}`);
        console.log('callTravelDetailAPI result : ', result);

        if (result?.status === 200) {
            dispatch(getTravel(result));
        } else {
            toast.error("error")
        }
    }
}


/* 댓글 조회 */
export const callCommentAPI = ({ travelId ,currentPage = 1}) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/travels/${travelId}/comments?page=${currentPage}`);
        console.log('API호출 callCommentAPI result : ', result);

        if (result?.status === 200) {
            dispatch(getComments(result));
        } else {
            toast.error("error");
        }
    }
}

export const callPlaceAPI = ({ travelId }) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/travels/${travelId}/place`);
        console.log('API 호출 callPlaceAPI : ' , result);

        if (result?.status === 200) {
            dispatch(getPlace(result));
        } else {
            toast.error("error");
        }
    }
}

    /* 여행지 등록 */
export const callTravelInsertAPI = ({ registRequest }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post('api/v1/travels', registRequest);
        console.log('callTravelInsertAPI result: ' , result);

        if (result.status === 201) {
            dispatch(success());
        }
    }
};

/* 여행지 소개 수정 */
export const callTravelModifyAPI = ({ travelId, modifyRequest }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.put(`/api/v1/travels/${travelId}`, modifyRequest)
        console.log(`callTravelModifyAPI  result : ` , (result));

        if (result.status === 201) {
            dispatch(success());
        }
    }
};

/* 여행지 소개 삭제 */
export const callTravelDeleteAPI = ({ travelId }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.delete(`/api/v1/travels/${travelId}`);
        console.log(`callTravelDeleteAPI result : ` , (result));

        if (result.status === 204 ) {
            dispatch(success());
        }
    }
}

/* 댓글 등록 */
export const callCommentRegistAPI = ({ travelId, registRequest }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/api/v1/travels/${travelId}/comments`, registRequest);
        console.log(`callCommentRegistAPI : `, result);

        if (result.status === 201) {
            dispatch(success());
        }

    }
}

















