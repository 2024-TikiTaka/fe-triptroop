import { combineReducers } from 'redux';
import userReducer from './UserModules';
import scheduleReducer from "./ScheduleModules";

const rootReducer = combineReducers({
    userReducer,
    scheduleReducer
});

export default rootReducer;
