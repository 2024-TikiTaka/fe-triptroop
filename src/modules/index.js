import { combineReducers } from 'redux'
import userReducer from './UserModules'
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";

const rootReducer = combineReducers({
	userReducer, travelReducer, commentReducer
})

export default rootReducer
