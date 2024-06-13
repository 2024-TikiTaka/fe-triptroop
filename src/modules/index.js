import {combineReducers} from 'redux'
import userReducer from './UserModules'
import scheduleReducer from "./ScheduleModules";
import adminUserReducer from "./admin/AdminUserModules";
import travelReducer from "./TravelModules";
import commentReducer from "./TravelCommentModules";
import placeReducer from "./PlaceModules";
// import adminNoticeReducer from "./admin/AdminNoticeModules";
// import adminCategoryReducer from "./admin/AdminCategoryModules";
// import adminInquiryReducer from "./admin/AdminInquiryModules";

const rootReducer = combineReducers({
    userReducer,
    scheduleReducer,
    travelReducer,
    commentReducer,
    placeReducer,
    adminUserReducer
    // adminInquiryReducer,
    // adminCategoryReducer,
    // adminNoticeReducer
})

export default rootReducer;
