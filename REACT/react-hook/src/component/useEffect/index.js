import React, { Component } from 'react'
// 副作用 hooks模式状态下 state 发生变更的时候提供给我们做额外操作的功能


class Example extends Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this)
    }
    componentDidMount() {
        console.log(`点击次数${this.state.count}`)
    }
    componentDidUpdate() {
        console.log(`点击次数${this.state.count}`)
    }
    addCount () {
        this.setState({
            count: this.state.count + 1
        })
    }
    render () {
        return (
            <div>
                <p>你点了{this.state.count}次</p>
                <button onClick={this.addCount}>click me</button>
            </div>
        )
    }
}

export default Example