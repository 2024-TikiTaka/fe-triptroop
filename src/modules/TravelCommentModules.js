import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};
/* 액션 타입 */
const GET_COMMENTS = 'comment/GET_COMMENTS'; // 댓글 조회
const SUCCESS = 'comment/SUCCESS';

/* 액션 함수 */

export const { comment : { getComments, success }} = createActions({
    [GET_COMMENTS] : result => ({ comment : result.data.result }),
    [SUCCESS] : () => ({ success : true })
})
/* 리듀서 함수 */
const commentReducer = handleActions({
    [GET_COMMENTS] : (state, {payload}) => payload,
    [SUCCESS] : (state, {payload}) => payload
}, initialState);

export default commentReducer;