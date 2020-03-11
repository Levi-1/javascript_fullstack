import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST_ITEM } from './actionTYPE'
// import axios from 'axios'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_LIST
})
export const getDeleteAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ITEM,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
//             console.log(res)
//             const data = res.data
//             const action = initListAction(Object.keys(data.hotComments[0]))
//             // store.dispatch(action)
//             // console.log(action)
//             dispatch(action)
//         })
//     }
// }