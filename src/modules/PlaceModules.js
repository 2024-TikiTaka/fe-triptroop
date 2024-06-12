
/* 초기값 */
import {createActions, handleActions} from "redux-actions";

const initialState = {};

/* 액션 타입 */
const GET_PLACE = 'place/GET_PLACE';

/* 액션 함수 */
export const { place : { getPlace } } = createActions({
    [GET_PLACE] : result => ({ place : result.data.result })
    })
/* 리듀서 함수 */
const placeReducer = handleActions({
    [GET_PLACE] : (state, {payload}) => payload
}, initialState);

export default placeReducer;