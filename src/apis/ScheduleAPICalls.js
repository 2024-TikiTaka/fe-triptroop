import {authRequest,request} from "./api";
import {getSchedules,getSchedule,success} from "../modules/ScheduleModules";

export const callScheduleListAPI = ({currentPage = 1}) => {

    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules?page=${currentPage}`)
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
export const callScheduleDetailAPI = ({scheduleId}) => {

    return async (dispatch,getState) => {
        const result = await request('GET', `/api/v1/schedules/${scheduleId}`);
        console.log('callScheduleDetailAPI : ', result);

        if (result.status === 200) {
            dispatch(getSchedule(result));
        }
    }
};

//일정 등록
// export const callScheduleRegistAPI = ({registRequest}) => {
//
//     return async (dispatch, getState) => {
//         const result = await authRequest.post(`/api/v1/schedules/regist`,registRequest);
//         console.log('callScheduleRegistAPI result : ' , result);
//
//         if (result.status === 201) {
//             dispatch(success());
//         }
//
//     };
// };
// 일정 등록
export const callScheduleRegistAPI = ({ registRequest }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post('/api/v1/schedules/regist', registRequest);
        console.log('callScheduleRegistAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
        }

    }
};
// 일정 수정
export const callScheduleUpdateAPI = ({ scheduleId,modifyRequest }) => {
    return async (dispatch, getState) => {
        const result = await authRequest.put(`/api/v1/schedules/${scheduleId}/modify`, modifyRequest);
        console.log('callScheduleUpdateAPI result : ', result);

        if (result.status === 201) {
            dispatch(success());
        }

    }
};
/// 일정 계획 수정
export const callScheduleItemUpdateAPI = (scheduleItemId, modifyRequest) => {
    return async (dispatch, getState) => {
        try {
            const result = await authRequest.put(`/api/v1/schedules/${scheduleItemId}/item`, modifyRequest);
            console.log('callScheduleItemUpdateAPI result : ', result);

            if (result.status === 201) {
                dispatch(success());
            }
        } catch (error) {
            console.error('callScheduleItemUpdateAPI error:', error);
            throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
        }
    };
};
// // 일정 계획 등록
// // export const callScheduleItemRegistAPI = ({ scheduleId,registRequest }) => {
// //     return async (dispatch, getState) => {
// //         const result = await authRequest.post(`/api/v1/schedules/regist`, registRequest);
// //         console.log('callScheduleItemRegistAPI result : ', result);
// //
// //         if (result.status === 201) {
// //             dispatch(success());
// //         }
// //
// //     }
// // };







