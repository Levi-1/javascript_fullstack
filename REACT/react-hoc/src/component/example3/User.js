import React, { Component } from 'react'

class User extends Component {
    inputElement = null

    sayHello() {
        console.log('hello world')
    }
    constructor(props) {
        super(props)
        this.focus = this.focus.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    state = {
        name: '',
        age: 0
    }

    componentDidMount () {
        this.setState({
            name: this.props.name,
            age: this.props.age
        })
    }

    focus() {
        this.inputElement.focus()
    }
    onChange  = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return (
            <div>
                <div>
                    姓名：{this.state.name}
                    <div>
                        年龄：
                        <input onChange={this.onChange} type='number' value={this.state.age} ref={input => {
                            if (this.props.inputRef) {
                                this.props.inputRef(input) // 父组件传入的ref回调函数
                            }
                            this.inputElement = input
                        }} />
                    </div>
                    <button onClick={this.focus}>获取输入框焦点</button>
                </div>
            </div>
        )
    }
}

export default User