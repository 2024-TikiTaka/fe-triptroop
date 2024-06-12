import { combineReducers } from 'redux'
import userReducer from './UserModules'
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";
import placeReducer from "./PlaceModules";

const rootReducer = combineReducers({
	userReducer, travelReducer, commentReducer, placeReducer
})

export default rootReducer
