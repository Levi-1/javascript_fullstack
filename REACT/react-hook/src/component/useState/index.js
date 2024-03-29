import React, { Component } from 'react' 

class Example extends Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this)
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