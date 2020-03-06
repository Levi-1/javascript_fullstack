import React, { useState } from 'react'
// useState 就是一个Hook
function Example() {
    const [count, setCount] = useState(0) // 0 为初始值
    // cosnt [name, setname ] = useState(0)
    // let _useState = useState(0)
    // let count = _useState[0]
    // let setCount = _useState[1]
    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>click me</button>
        </div>
    )
}

// useState 多状态
function Example2 () {
    const [age, setAge] = useState(18)
    const [sex, setsex] = useState('male')
    const [work, setwork] = useState('fontend')
    // react 是根据useState出现的顺序来确定的
    // react Hooks 不能出现在条件判断语句中， 必须有完全一样的渲染顺序
    return(
        <div>
            <p>levi {age} 岁</p>
            <p>性别：{sex}</p>
        </div>
    )
}


export default Example2


// hooks 本质上就是一类特殊的函数，目的就是不再使用class