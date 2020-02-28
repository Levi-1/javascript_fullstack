// 入口
import React, {Component} from 'react'

class App extends Component {
  render () { // props 
    return <div>
      <button>hello {this.props.name}</button> 
      i am {9+9} years old 
    </div>
  }/**{}内的语句会被判断为js语法  */
}

export default App