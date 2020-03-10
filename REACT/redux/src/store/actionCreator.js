import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST_ITEM } from './actionTYPE'
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
