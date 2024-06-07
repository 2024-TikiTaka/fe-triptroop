import {request} from "./api";
import {getTravels, getTravel} from "../modules/TravelModules";
import {toast} from "react-toastify";

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








