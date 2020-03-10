import React, { useState, createContext, useContext } from 'react'
// useContext 让父子组件传值更加简单

const CountContext = createContext()

function Parent() {
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>你点了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}


function Counter () {
    const count = useContext(CountContext)
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default Parent