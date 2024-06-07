import { combineReducers } from 'redux'
import userReducer from './UserModules'
import travelReducer from "./TravelModules";

const rootReducer = combineReducers({
	userReducer, travelReducer
})

export default rootReducer
