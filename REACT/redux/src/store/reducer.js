import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST_ITEM } from './actionTYPE'
const defaultState = {
    inputValue: '',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
}
// state 是store内上次存储的数据
// action 用户传递的操作
// 纯函数指的是，给定的输入就一定就会有固定的输出，不会有任何副作用。
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))// 深拷贝
        newState.inputValue = action.value
        return newState // reducer 有一个系那只可以接收state，但是绝对不能修改state
    }
    if (action.type === ADD_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === INIT_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    console.log(state, action)
    return state
}