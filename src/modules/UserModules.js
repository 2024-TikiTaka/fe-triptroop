import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const RESET = 'user/RESET';
const SUCCESS = 'user/SUCCESS';
const GET_CURRENT_USER = 'user/me/GET_USER_INFO';
const GET_CURRENT_PROFILE = 'user/me/GET_PROFILE_INFO';


/* 액션 함수 */
export const {
    user: { reset, success, getCurrentUser, getCurrentProfile },
} = createActions({
    [RESET]: () => {},
    [SUCCESS]: () => ({ success: true }),
    [GET_CURRENT_USER]: (result) => ({ currentUserInfo: result.data }),
    [GET_CURRENT_PROFILE]: (result) => ({ currentUserProfileInfo: result.data })
});

/* 리듀서 함수 */
const userReducer = handleActions({
        [RESET]: () => initialState,
        [SUCCESS]: (state, { payload }) => payload,
        [GET_CURRENT_USER]: () => (state, { payload }) => payload,
        [GET_CURRENT_PROFILE]: () => (state, { payload }) => payload,
    }, initialState
);

export default userReducer;
