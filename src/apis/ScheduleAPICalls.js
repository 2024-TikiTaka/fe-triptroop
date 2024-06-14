import {authRequest,request} from "./api";
import {getSchedules,getSchedule,success} from "../modules/ScheduleModules";
import {getParticipants} from "../modules/ScheduleParticipantModules";
import {toast} from "react-toastify";

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
// 일정 삭제
export const callScheduleRemoveAPI = ( scheduleId ) => {

    return async (dispatch, getState) => {
        const result = await authRequest.delete(`/api/v1/schedules/${scheduleId}/remove`);
        console.log('callScheduleRemoveAPI result : ',result);

        if(result.status === 204) {
            dispatch(success());
        }
    }
};
// 일정 계획 삭제
export const callScheduleItemRemoveAPI = ( scheduleItemId ) => {

    return async (dispatch, getState) => {
        const result = await authRequest.delete(`/api/v1/schedules/${scheduleItemId}/remove-item`);
        console.log('callScheduleItemRemoveAPI result : ',result);

        if(result.status === 204) {
            dispatch(success());
        }
    }
};
// 일정 신청
export const callScheduleApplyAPI = ( scheduleId ) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/api/v1/schedules/${scheduleId}/apply`);
        console.log('callScheduleApplyAPI result : ',result);

        if(result.status === 201) {
            dispatch(success());
        }
    }
};
// 일정 신청 승인
export const callScheduleAcceptAPI = ( scheduleParticipantId ) => {

    return async (dispatch, getState) => {
        const result = await authRequest.put(`/api/v1/schedules/${scheduleParticipantId}/accept`);
        console.log('callScheduleAcceptAPI result : ',result);

        if(result.status === 201) {
            dispatch(success());
            toast.info("일정 참여 신청을 승인하였습니다.")
        }
    }
};
// 일정 신청 반려
// export const callScheduleRejectedAPI = ( scheduleParticipantId ,scheduleParticipantRejectedRequest) => {
//
//     return async (dispatch, getState) => {
//         const result = await authRequest.post(`/api/v1/schedules/${scheduleParticipantId}/rejected`,scheduleParticipantRejectedRequest);
//         console.log('callScheduleRejectedAPI result : ',result);
//
//         if(result.status === 201) {
//             dispatch(success());
//         }
//     }
// };

export const callScheduleRejectedAPI = (scheduleParticipantId, scheduleParticipantRejectedRequest) => {
    return async (dispatch) => {
        try {
            const response = await authRequest.put(`/api/v1/schedules/${scheduleParticipantId}/rejected`, scheduleParticipantRejectedRequest);
            dispatch({ type: 'SCHEDULE_REJECT_SUCCESS', payload: response.data });
            toast.info("일정 참여 신청을 거절하였습니다.")

        } catch (error) {
            dispatch({ type: 'SCHEDULE_REJECT_FAILURE', payload: error });
        }
    };
};


// 일정 참여자 조회


// 일정 참여자 조회
// export const callScheduleParticipantsAPI = (scheduleId, currentPage = 1) => {
//     return async (dispatch, getState) => {
//         try {
//             console.log("API call: Fetching schedule participants");
//             const result = await authRequest.get(`/api/v1/schedules/${scheduleId}/schedulesParticipantList`, {
//                 params: { page: currentPage },
//                 headers: {
//                     'Cache-Control': 'no-cache'
//                 }
//             });
//             console.log('callScheduleParticipantsAPI : ', result);
//
//             if (result.status === 200) {
//                 dispatch(getScheduleParticipants(result));
//             } else if (result.status === 304) {
//                 console.log('Using cached data');
//                 // 캐시된 데이터를 사용할 경우, 캐시된 데이터를 직접 사용할 수 있도록 처리
//             } else {
//                 console.error('Error fetching schedule participants:', result.status, result.statusText);
//             }
//         } catch (error) {
//             console.error('Error fetching schedule participants:', error);
//         }
//     }
// };
export const callScheduleParticipantsAPI = ({scheduleId}) => {

    return async (dispatch, getState) => {
        const result = await request('GET', `/api/v1/schedules/${scheduleId}/schedulesParticipantList`)
        console.log('callScheduleParticipantsAPI result : ', result);

        if (result.status === 200) {
            dispatch(getParticipants(result));
        }

    }
};














