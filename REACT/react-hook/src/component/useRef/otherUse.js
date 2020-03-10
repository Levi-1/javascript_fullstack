// useRef 获取DOM元素
// useref 保存普通变量

import React, { useRef, useEffect, useState } from 'react'

function Example() {
    // 
    const inputEle = useRef(null)
    const onButtonClick = () => {
        inputEle.current.value = 'levi'
        console.log(inputEle)
    }
    const textRef = useRef()
    const [text,setText] = useState('lv')
    useEffect(()=>{
        textRef.current = text
        console.log(textRef.text)
    })
    return (
        <>
            <input ref={inputEle} type='text' />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <hr/>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}



export default Example