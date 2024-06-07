import { thunk } from 'redux-thunk'
import { applyMiddleware, legacy_createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './modules'
import logger from 'redux-logger'

const store = legacy_createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger)),
)

export default store
