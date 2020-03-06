// 副作用 hooks模式状态下 state 发生变更的时候提供给我们做额外操作的功能

import React, { useState, useEffect } from 'react'

function Example () {
    const [count, setCount] = useState(0)

    useEffect(() => { // 渲染，更新时时都会发生
        console.log(count)
    })

    return(
        <div>
            <p>你点击了{count}</p>
            <button onClick={() => {setCount(count+1)}}>Click me</button>
        </div>
    )
}

export default Example

// 1.react的首次渲染和每次渲染都会执行useEffect函数
// 2.useEffect 里定义的函数时异步执行的，它不会阻碍浏览器更新视图
