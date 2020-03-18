import { fromJS } from 'immutable' // 将js对象转化为immutable对象
import * as types from './actionType'
const defaultState = fromJS({
    topicList: [
    ],
    articleList: [
    ],
    recommendList: [
    ],
    articlePage: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    if(action.type === types.LOAD_HOME_DATA) {
        return state.merge({
            topicList: fromJS(action.topicList), // 
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
        })
    }
    if(action.type === types.ADD_HOME_DATA) {
        return state.merge({
            articleList: state.get('articleList').concat(action.list),
            articlePage: action.nextPage 
        })
    }
    if(action.type === types.TOGGLE_TO_TOP) {
        return state.set('showScroll', action.show)
    }
    return state
}