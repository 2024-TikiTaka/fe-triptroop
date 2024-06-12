import { combineReducers } from 'redux'
import userReducer from './UserModules'
import scheduleReducer from "./ScheduleModules";
import adminReducer from "./AdminModules";


const rootReducer = combineReducers({
	userReducer,scheduleReducer, admin : adminReducer
})

export default rootReducer
