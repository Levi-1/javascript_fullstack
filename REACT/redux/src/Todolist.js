import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteAction } from './store/actionCreator'
// Redux = flux + Reduce
import UI from './TodolistUI'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 只要store内的数据发生变化，就执行括号内的方法
    // maybe 是个副操作
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) // 向reducer通信 
  }
  handleStoreChange() {
    this.setState(store.getState()) // 貌似是异步的，下面的console打印出来的是上次的inputvalue
    console.log(this.state.inputValue)
    console.log('state changed')
  }
  handleButtonClick() {
    const action = getAddItemAction()
    store.dispatch(action) // 为什么此处向仓库中添加字段，能够直接影响到本页的state
    console.log(this.state.list)// 而input输入框中的修改却需要 通过subscribe来触发方法重新获取仓库中的数据？
  }
  handleItemDelete(index) {
    const action = getDeleteAction(index)
    store.dispatch(action)
  }
  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
  }                // 此时store已经集成了thunk的功能，所以支持dispatch一个函数，且会自动执行这个函数
  render() {
    return (
      <UI inputValue={this.state.inputValue}
        handleButtonClick={this.handleButtonClick}
        handleInputChange={this.handleInputChange}
        handleItemDelete={this.handleItemDelete}
        list={this.state.list}></UI>
    )
  }
}

export default App