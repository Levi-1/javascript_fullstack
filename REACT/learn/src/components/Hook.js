// Hook 钩子函数 可在不编写class 的情况下使用state内部的状态和React


// 使用state Hook


import React, { useState, useEffect } from 'react'

export default function HookTest () {
    // useState(initialState), 接收初始状态，返回一个状态变量和他的更新函数，属性名可以自定义
    // 声明一个新的叫做“count” 的state变量
    const [count, setCount] = useState(0)

    // 数据获取，设置订阅，以及手动更改React组件中的DOM --- 副作用
    useEffect (() => {
        document.title = `你点击了${count}次`
    })
    return (
        <div>
            <p>
                you clicked {count} times
                {/* {调用setCount修改count} */}
            </p>
            <button onClick = {() => setCount(count+1)}>clicked</button>
        </div>
    )
}