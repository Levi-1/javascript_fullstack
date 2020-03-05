import React, { Component } from 'react'

// 高阶组件
function HOC(WrapperComponent) {
    return class extends Component {
        constructor (props) {
            super(props) 
            this.state = {
                name: ''
            }
        }
        onChange = (event) => {
            this.setState({
                name: event.target.value
            })
        }
        render() {
            const newProps = {
                name: {
                    value:this.state.name,
                    onChange: this.onChange
                }
            }
            return(
                <WrapperComponent {...newProps}/>
            )
        }
    }
}
// 使用
@HOC
class Example extends Component {
    render() {
        return(
            <input {...this.props.name}/>
        )
    }
}


export default Example