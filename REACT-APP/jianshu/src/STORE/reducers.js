import {reducer as headerReducer} from '../COMMON/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'
import { combineReducers } from 'redux'


export default combineReducers({
    header: headerReducer,
    homeReducer: homeReducer,
    detailReducer,
    loginReducer
})