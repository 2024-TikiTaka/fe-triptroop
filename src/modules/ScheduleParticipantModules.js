import { createActions, handleActions } from 'redux-actions';

// 초기값
const initialState = {};

// 액션 타입
const GET_PARTICIPANTS = 'PARTICIPANTS/GET_PARTICIPANTS';
const SUCCESS = 'PARTICIPANTS/SUCCESS';

// 액션 생성 함수
export const { participants: { getParticipants, success } } = createActions({
    [GET_PARTICIPANTS]: result => ({ participants: result.data.result }),
    [SUCCESS]: () => ({ success: true })
});

// 리듀서 함수
const scheduleParticipantReducer = handleActions({
    [GET_PARTICIPANTS]: (state, { payload }) =>  payload ,
    [SUCCESS]: (state, { payload }) => payload ,
}, initialState);

export default scheduleParticipantReducer;
