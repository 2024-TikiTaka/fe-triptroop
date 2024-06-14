import { combineReducers } from 'redux'
import userReducer from './UserModules'
import scheduleReducer from "./ScheduleModules";
import adminReducer from "./AdminModules";
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";
import placeReducer from "./PlaceModules";
import scheduleParticipantReducer from "./ScheduleParticipantModules";

const rootReducer = combineReducers({
    userReducer,
    scheduleReducer,
    scheduleParticipantReducer,
    travelReducer,
    commentReducer,
    placeReducer,
    adminReducer
})

export default rootReducer;
