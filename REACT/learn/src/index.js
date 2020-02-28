// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import Lifecycle from './components/Lifecycle';
import CommentVs from './components/CommentVs'
import PureComponentTest from './components/PureComponentTest'
import ButtonTest from './components/ButtonTest'
import Hoc from './components/Hoc'
import ContextSample from "./components/ContextSample";
// import App from './App';
import HookTest from './components/Hook'
import  KFormCreate from './components/KFormCreate'
// state
// class Counter extends React.Component {
//     constructor (props) {
//         super(props) // 父类的继承
//         //初始化构造器时，设置内部状态为 num为1
//         this.state = {
//             num: 1
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     // react生命周期
//     componentDidMount () {
//         console.log('组件加载完成')
//     }
//     shouldComponentUpdate(nextProps, nextState) { // 避免组件重复无意义的的渲染
//         console.log(nextState)
//         return false
//     }
//     render () {
//         return (
//             <div>
//              <p>{this.state.num}</p>
//              <button onClick={this.handleClick}>click</button>
//             </div>
//         )
//     }
//     handleClick () {
//         console.log('hello world')
//         this.setState({
//             num: this.state.num + 1
//         })
//     }
// }

// 表单
// 渲染列表
// class TodoList extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             text: '一段测试',
//             todos: ['Learn React', 'Learn-Ant-design', 'Learn koa']
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleChange(e) {
//         console.log(e.target.value)
//         this.setState({
//             text: e.target.value
//         })
//     }
//     handleClick() {
//         if (this.state.text) {
//             this.setState({
//                 todos: [...this.state.todos, this.state.text],
//                 text: ''
//             })
//         }
//     }
//     render() { // jsx语法
//         return (
//             <div>
//                 {this.state.text}
//                 <input type="text" value={this.state.text} onChange={this.handleChange}></input>
//                 <button onClick={this.handleClick}>clear</button>
//                 <ul>
//                     {this.state.todos.map(v => {
//                         return <li key={v}>{v}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }


ReactDOM.render(<KFormCreate/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
