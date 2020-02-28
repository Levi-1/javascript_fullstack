import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// react router 其中包含了三种类型 ， 1. 路由组件 2. 路由匹配组件 3. 导航组件
// 路由组件 BrowserRouter HashRouter
// 路由匹配组件： Route Switch
// 导航组件 Link

function Header () {
    return (
        <ul>
            <li>
               <Link to='/'>Home</Link> 
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
            <li>
               <Link to='/topics'>Topics</Link>
            </li>
            <li>
               <Link to='/us'>Us</Link> 
            </li>
        </ul>
    )
}

function Home () {
    return(
        <h2>Home</h2>
    )
}
function About () {
    return(
        <h2>About</h2>
    )
}

function Topic ({match}) {
    return(
        <h3>
            Requested Param: { match.params.id }
        </h3>
    )
}

function Topics (props) {
    const { match } = props
    // react中的二级路由
    return(
        <div>
            <h2>topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/component`}>Component</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props.v.State</Link>
                </li>
            </ul>
            <Route exact path={`${match.path}/:id`} component={Topic}></Route>
            <Route  path={match.path} render={() => <h3>please select </h3>}></Route>
        </div>
        
    )
}

function Us () {
    return(
        <h2>Us</h2>
    )
}


function App () {
    return (
        <Router>
            <div>
                <Header></Header>

                <Route exact path='/' component={Home}></Route> {/**精确导航 exact */}
                <Route path='/about' component={About}></Route>
                <Route path='/topics' component={Topics}></Route>
                <Route path='/us' component={Us}></Route>
            </div>
        </Router>
    )
}

export default App
