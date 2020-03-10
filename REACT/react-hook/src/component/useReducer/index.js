// function countReducer(state, action) {
//     switch(action) {
//         case 'add':
//             return state + 1
//         case 'reduce':
//             return state - 1
//         default:
//             return state
//     }
// }

import React, { useReducer } from 'react'

function ReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'reduce':
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>dispatch('add')}>add</button>
            <button onClick={()=>{dispatch('reduce')}}>reduce</button>
        </div>
    )
}



export default ReducerDemo