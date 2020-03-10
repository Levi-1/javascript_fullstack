// useMemo(useCallback) 优化React Hooks 程序的性能

import React, { useState, Children, useMemo } from 'react'

function Example () {
    const [wn, setWn] = useState('levi sleeping')
    const [zm, setZm] = useState('meng')

    return(
        <>
        <button onClick={()=>{setWn(new Date().getTime())}}>levi</button>
        <button onClick={()=>{setZm(new Date().getTime()+ 'ing')}}>meng</button>
        <ChildComponent name={zm}>{wn}</ChildComponent>
        </>
    )
}

function ChildComponent ({name, children}) {
    function changeZm(name) {
        console.log('meng他累了他累了')
        return name + '他累了他累了'
    }

    const actionZm = useMemo(() => changeZm(name), [name])

    return (
        <>
        <div>{actionZm}</div>
        <div>{children}</div>
        </>
    )
}

export default Example