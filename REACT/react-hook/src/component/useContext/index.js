import React, { Component } from 'react'

class Child extends Component {
    render() {
        return(
            <div>
                <p>name from Parent: {this.props.name}</p>
            </div>
        )
    }
}

class Parent extends Component {
    constructor (props){
        super(props)
        this.state = {
            name: 'levi'
        }
    }
    render () {
        return(
            <div>
                <p>父组件中的name: {this.state.name}</p>
                <Child name={this.state.name}></Child>
            </div>
        )
    }
}

export default Parent