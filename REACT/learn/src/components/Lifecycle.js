// eslint-disable-next-line
import React, { Component } from 'react'
 class Lifecycle extends Component {
    constructor (props) {
        super (props)
        console.log('1.构造函数')
        this.state = {
            msg: this.props.data // 虽然props已经改变，但是构造函数在父组件传值改变活动中并不会再次执行，所以msg不会被赋予新值
        }                        //执行过程为 componentWillReceiveProps-> shouldComponentUpdate-> componentWillUpdate-> render->componentDidUpdate 
                                 //中间无constructor执行所以 msg: this.props.data 不会被更新
    }                            // 若在render中直接使用this.props，在父组件传值改变的过程中在加载render的时候就会被修改。能够更新值。
    componentWillMount () {
        console.log('2.主键将要挂载')
    }
    componentDidMount () {
        console.log('3.组件已经挂载')
    }
    componentWillReceiveProps () {
        // 父组件传递的属性有变化，
        console.log('4. 组件属性更新了')
        return true
    }
    shouldComponentUpdate () {
        console.log('5.组件是否需要更新')
        return true
    }
    componentWillUpdate () {
        console.log('6.组件将要更新')
    }
    componentDidUpdate () {
        console.log('7.组件已经更新')
    }
    render() {
        console.log('render加载')
        return(
            <div>
                组件生命周期
                {this.state.msg}
            </div>
        )
    }
}

export default class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            someProp: 'hello'
        }
        setTimeout(() => {
            this.setState({
                someProp: 'hello world'
            })
        }, 2000);
    }
    render() {
        return <Lifecycle data = {this.state.someProp}/>
    }
}