import React, { Component } from 'react'

const withMouse = (Comp) => {
    return class extends Component {
        state = {x:0, y:0}
        render() {
            return(
                <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                    <Comp {...this.props} mouse={this.state}/>
                </div>
            )
        }
        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y:event.clientY
            })
        }
    }
}

// 定义一个纯函数无状态的组件
const App = (props) => {
    const { x, y} = props.mouse
    return(
        <div style={{height: '100vh'}}>
            <h1>The mouse position is ({x},{y})</h1>
        </div>
    )
}

const AppWithMouse = withMouse(App) // 高阶组件代工

export default AppWithMouse
