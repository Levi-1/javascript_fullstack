import React, { Component } from "react";



const Context = React.createContext()

const store = {
    name: '恭喜',
    sayHi () {
        console.log(this.name)
    }
}

const withProvider = Comp => props => (
    <Context.Provider value={store}>
        <Comp {...props}/>
    </Context.Provider>
)

const withConsumer = Comp => props => (
    <Context.Consumer>
        {value => <Comp {...props} value={value}/>}
    </Context.Consumer>
)

@withConsumer 
class Inner extends Component {
    render () {
        return (
            <div>
                {this.props.value.name}
            </div>
        )
    }
}

@withProvider

class ContextSample extends Component {
    render () {
        console.log('ContextSample')
        return (
            <div>
                <Inner></Inner>
            </div>
        )
    }
}

export default ContextSample