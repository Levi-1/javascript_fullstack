import {reducer as headerReducer} from '../COMMON/header/store'
import  {reducer as homeReducer} from '../pages/home/store'
import { combineReducers } from 'redux'

export default combineReducers({
    header: headerReducer,
    homeReducer: homeReducer
})