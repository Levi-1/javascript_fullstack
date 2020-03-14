import {reducer as headerReducer} from '../COMMON/header/store'
import { combineReducers } from 'redux'

export default combineReducers({
    header: headerReducer
})