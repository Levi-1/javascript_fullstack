import * as types from './actionType'
import { fromJS } from 'immutable' // 将js对象转化为immutable对象
const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === types.SEARCH_FOCUS) {
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = true
        return state.set('focused', true)
    }
    if(action.type === types.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}