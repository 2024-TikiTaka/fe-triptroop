import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const RESET = 'profile/RESET';
const SUCCESS = 'profile/SUCCESS';
const GET_PROFILE = 'profile/GET_PROFILE';

/* 액션 함수 */
export const {
    profile: {
        reset, success, getUser, getProfile
    },
} = createActions({
    [RESET]: () => {},
    [SUCCESS]: () => ({ success: true }),
    [GET_PROFILE]: result => ({ profile: result }),
});

/* 리듀서 함수 */
const userReducer = handleActions({
    [RESET]: () => initialState,
    [SUCCESS]: (state, { payload }) => payload,
    [GET_PROFILE]: (state, { payload }) => payload,
}, initialState);

export default userReducer;
