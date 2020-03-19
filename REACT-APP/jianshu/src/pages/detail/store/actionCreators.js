import axios from 'axios'
import * as types from './actionType'

const loadDetail = (res) => ({
    type: types.GET_DETAIL,
    title: res.data.data.title,
    content: res.data.data.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const action = loadDetail(res)
            dispatch(action)
        })
    }
}