// componentWillUnmount 组件卸载之前
// useEffect 实现componentWillUnmount (解绑副作用)

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Example () {
    const [count, setCount] = useState(0)

    useEffect(() => { // 渲染，更新时时都会发生
        console.log(count)
        return () => {
            console.log('-----------')
        }
    }, [count])

    return(
        <div>
            <p>你点击了{count}</p>
            <button onClick={() => {setCount(count+1)}}>Click me</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list' component={List}/>
            </Router>
        </div>
    )
}

function Index () {
    useEffect(()=>{
        console.log('index page')
        return ()=>{
            console.log('leave index')
        }
    }, []) // 第二个参数为关联状态, [] 意味无关联return在销毁时执行
    return(
        <h2>
            hooks
        </h2>
    )
}

function List () {
    useEffect(()=>{
        console.log('list page')
    })
    return <h2>List-page</h2>
}

export default Example


