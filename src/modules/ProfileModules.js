import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const SUCCESS = 'profile/SUCCESS';
const GET_PROFILE = 'profile/GET_PROFILE';

/* 액션 함수 */
export const { profile: { success, getProfile }, } = createActions({
    [SUCCESS]: () => ({ success: true }),
    [GET_PROFILE]: (result) => ({ currentProfile: result }),
});

/* 리듀서 함수 */
const profileReducer = handleActions({
    [SUCCESS]: (state, { payload }) => payload,
    [GET_PROFILE]: (state, { payload }) => payload,
}, initialState);

export default profileReducer;
