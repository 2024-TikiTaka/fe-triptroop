import { combineReducers } from 'redux'
import userReducer from './UserModules'
import scheduleReducer from "./ScheduleModules";
import adminReducer from "./AdminModules";
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";
import placeReducer from "./PlaceModules";
import scheduleParticipantReducer from "./ScheduleParticipantModules";
import { combineReducers } from 'redux';
import userReducer from './UserModules';
import profileReducer from './ProfileModules';
import scheduleReducer from './ScheduleModules';
import travelReducer from './TravelModules';
import commentReducer from './TravelCommentModules';
import placeReducer from './PlaceModules';
import adminUserReducer from './admin/AdminUserModules';
import adminNoticeReducer from "./admin/AdminNoticeModules";
import adminCategoryReducer from "./admin/AdminCategoryModules";
import adminInquiryReducer from "./admin/AdminInquiryModules";

const rootReducer = combineReducers({
    userReducer,
    profileReducer,
    scheduleReducer,
    scheduleParticipantReducer,
    travelReducer,
    commentReducer,
    placeReducer,
    adminUserReducer,
    adminInquiryReducer,
    adminCategoryReducer,
    adminNoticeReducer
})

export default rootReducer;
