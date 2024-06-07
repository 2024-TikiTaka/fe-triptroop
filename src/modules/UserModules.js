import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const SUCCESS = 'user/SUCCESS';
const RESET = 'user/RESET';

/* 액션 함수 */
export const {
    user: { success, reset },
} = createActions({
    [SUCCESS]: () => ({ success: true }),
    [RESET]: () => {},
});

/* 리듀서 함수 */
const userReducer = handleActions(
    {
        [SUCCESS]: (state, { payload }) => payload,
        [RESET]: () => initialState,
    },
    initialState,
);

export default userReducer;
