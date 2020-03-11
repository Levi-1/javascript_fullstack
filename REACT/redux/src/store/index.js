import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas.js'
// import thunk from 'redux-thunk'
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const composeEnhanders = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

}) : compose

const enhancer = composeEnhanders(
    applyMiddleware(sagaMiddleware)
)
// 将saga中间件加载到store中
const store = createStore(
    reducer,
    enhancer
    ) // store 与reducer联系
// 运行saga
sagaMiddleware.run(mySaga)

export default store