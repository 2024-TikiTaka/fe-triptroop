import {authRequest,request} from "./api";
import {getSchedules,getSchedule,success} from "../modules/ScheduleModules";

export const callScheduleListAPI = ({currentPage = 1}) => {

    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules`)
        console.log('callScheduleListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getSchedules(result));
        }

    }
};
// 지역별 조회
export const callScheduleAreaListAPI = ({ area, currentPage = 1 }) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules?area=${area}&page=${currentPage}`);
        console.log('callScheduleAreaListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getSchedules(result));
        }
    }
};

// 정렬 조회
export const callScheduleSortListAPI = ({ sort, currentPage = 1 }) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules?sort=${sort}&page=${currentPage}`);
        console.log('callScheduleSortListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getSchedules(result));
        }
    }
};

// 검색 조회
export const callScheduleSearchListAPI = ({ keyword, currentPage = 1 }) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules?keyword=${keyword}&page=${currentPage}`);
        console.log('callScheduleSearchListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getSchedules(result));
        }
    }
};


// 상세 조회
export const callScheduleDetailAPI = ({ scheduleId}) => {

    return async (dispatch,getState) => {
        const result = await request('GET', `/api/v1/schedules/${scheduleId}`);
        console.log('callScheduleDetailAPI : ', result);

        if (result.status === 200) {
            dispatch(getSchedule(result));
        }
    }
};



