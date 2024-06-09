import { createActions, handleActions } from 'redux-actions';

// 초기값
const initialState = {};


// action type
const GET_SCHEDULES = 'schedules/GET_SCHEDULES';
const GET_SCHEDULE = 'schedules/GET_SCHEDULE';
const SUCCESS = 'schedules/SUCCESS';

// action function
export const { schedules: { getSchedules, getSchedule, success } } = createActions({
    [GET_SCHEDULES]: result => ({ schedules: result.data.result }),
    [GET_SCHEDULE]: result => ({ schedule: result.data }),
    [SUCCESS]: () => ({ success: true })
});

// reducer Function
const scheduleReducer = handleActions({
    [GET_SCHEDULES]: (state, {payload}) => payload,
    [GET_SCHEDULE]: (state, {payload}) => payload,
    [SUCCESS]: (state, {payload}) => payload
}, initialState);

export default scheduleReducer;