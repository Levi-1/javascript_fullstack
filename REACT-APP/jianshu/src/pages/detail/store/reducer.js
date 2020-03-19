import { fromJS } from 'immutable' // 将js对象转化为immutable对象
import { types } from '.'
// import * as types from './actionType'
const defaultState = fromJS({
    title: '',
    content: ""
})

export default (state = defaultState, action) => {
    if(action.type === types.GET_DETAIL){
        return state.merge({
            title: action.title,
            content: action.content
        })
    }
    return state
}