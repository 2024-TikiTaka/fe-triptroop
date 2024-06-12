import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};
/* 액션 타입 */
const GET_COMMENTS = 'comment/GET_COMMENTS'; // 댓글 조회

/* 액션 함수 */

export const { comment : { getComments } } = createActions({
    [GET_COMMENTS] : result => ({ comment : result.data.result })
})
/* 리듀서 함수 */
const commentReducer = handleActions({
    [GET_COMMENTS] : (state, {payload}) => payload
}, initialState);

export default commentReducer;