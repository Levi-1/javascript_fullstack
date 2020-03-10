// useRef 获取DOM元素
// useref 保存普通变量

import React, { useRef } from 'react'

function Example() {
    // 
    const inputEle = useRef(null)
    const onButtonClick = () => {
        inputEle.current.value = 'levi'
        console.log(inputEle)
    }
    return (
        <>
            <input ref={inputEle} type='text' />
            <button onClick={onButtonClick}>在input上展示文字</button>
        </>
    )
}



export default Example