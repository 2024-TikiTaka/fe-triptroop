import { combineReducers } from 'redux'
import userReducer from './UserModules'
import scheduleReducer from "./ScheduleModules";
import adminReducer from "./AdminModules";
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";
import placeReducer from "./PlaceModules";

const rootReducer = combineReducers({
    userReducer,
    scheduleReducer,
    travelReducer,
    commentReducer,
    placeReducer,
    adminReducer
})

export default rootReducer;
