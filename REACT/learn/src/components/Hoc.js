import React, { Component } from 'react'

// 高阶组件 链式调用

const withName = Comp => {
    class NewComponent extends Component {
        componentDidMount () {
            console.log('do something')
        }

        render () {
            return (
                <Comp {...this.props} name="高阶组件使用"/>
            )
        }
    }

    return NewComponent
}

const withLog = Comp => {
    console.log(Comp.name + '渲染le')
    return props => <Comp {...props}/>
}

@withLog // withLog(jpsite)
@withName

class Jpsite extends Component {
    render() {
        return(
            <div>
                <h2>
                   {this.props.state} - { this.props.name }
                </h2>
            </div>
        )
    }
}

export default  Jpsite