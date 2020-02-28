import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import PageLayout from './pages/Layout'


function App () {
  return (
    <Router>
      <Route path='/' component={PageLayout}></Route>
    </Router>
  )
}

export default App