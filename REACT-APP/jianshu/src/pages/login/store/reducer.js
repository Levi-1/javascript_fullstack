import { fromJS } from 'immutable' // 将js对象转化为immutable对象
import * as types from './actionType'
const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    if(action.type === types.CHANGE_LOGIN) {
        return state.set('login', action.value)
    }
    if(action.type === types.LOGOUT) {
        return state.set('login', action.value)
    }
    return state
}