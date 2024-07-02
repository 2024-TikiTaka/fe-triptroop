import {combineReducers} from 'redux';

import scheduleParticipantReducer from "./ScheduleParticipantModules";
import userReducer from './UserModules';
import profileReducer from "./ProfileModules";
import scheduleReducer from './ScheduleModules';
import travelReducer from './TravelModules';
import commentReducer from './TravelCommentModules';
import placeReducer from './PlaceModules';
import adminReducer from './admin/AdminModules';

const rootReducer = combineReducers({
    userReducer,
    profileReducer,
    scheduleReducer,
    scheduleParticipantReducer,
    travelReducer,
    commentReducer,
    placeReducer,
    adminReducer
});

export default rootReducer;
