import axios from 'axios'
import * as types from './actionType'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: types.LOAD_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeData = (result, nextPage) => ({
    type: types.ADD_HOME_DATA,
    list: fromJS(result.articleList),
    nextPage: nextPage
})


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            const action = changeHomeData(result)
            dispatch(action)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res)=>{
            const result = res.data.data
            dispatch(addHomeData(result, page + 1))
        })
    }
}

export const toggleToTop = (show) => ({
    type: types.TOGGLE_TO_TOP,
    show: show
})