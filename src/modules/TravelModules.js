import {createActions, handleActions} from "redux-actions";


/* 초기값 */
const initialState = {};

/* 액션 타입 */
const GET_TRAVELS = 'travel/GET_TRAVELS';
const GET_TRAVEL = 'travel/GET_TRAVEL';

/* 액션 함수 */
export const { travel: { getTravels, getTravel } } = createActions({
    [GET_TRAVELS]: result => ({ travels: result.data.result }),
    [GET_TRAVEL]: result => ({ travel: result.data.result })
});


/* 리듀서 함수 */
const travelReducer = handleActions({
    [GET_TRAVELS] : (state, { payload }) => payload,
    [GET_TRAVEL] : (state, { payload }) => payload
}, initialState);

export default travelReducer;