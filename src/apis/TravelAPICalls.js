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

export const callTravelInsertAPI = ({ registRequest }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post('api/v1/travels', registRequest);
        console.log('callTravelInsertAPI result: ' , result);

        if (result.status === 201) {
            dispatch(success());
        }
    }
};










