import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const RESET = 'user/RESET';
const SUCCESS = 'user/SUCCESS';
const GET_USER = 'user/me/GET_USER';
const GET_USER_PROFILE = 'user/me/GET_MY_PROFILE';

/* 액션 함수 */
export const {
    user: { reset, success, getUserInfo, getProfileInfo },
} = createActions({
    [RESET]: () => {},
    [SUCCESS]: () => ({ success: true }),
    [GET_USER]: (result) => ({ userInfo: result.data.result }),
    [GET_USER_PROFILE]: (result) => ({ profileInfo: result.data.result })
});

/* 리듀서 함수 */
const userReducer = handleActions({
        [RESET]: () => initialState,
        [SUCCESS]: (state, { payload }) => payload,
        [GET_USER]: () => (state, { payload }) => payload,
        [GET_USER_PROFILE]: () => (state, { payload }) => payload,
    }, initialState
);

export default userReducer;
