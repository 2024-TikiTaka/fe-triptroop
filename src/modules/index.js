import { combineReducers } from 'redux'
import userReducer from './UserModules'

const rootReducer = combineReducers({
	userReducer,
})

export default rootReducer
