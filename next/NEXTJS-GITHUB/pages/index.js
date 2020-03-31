// import React, {Component} from 'react'
import { Button } from 'antd'

import Link from 'next/link' // 路由跳转的两种方式
import Router from 'next/router'

const events = [
    'routerChangeStart',
    'routerChangeComplete',
    'routerChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete'
]

function makeEvent(type) {
    return (...args) => {
        
    }
}

export default () => (
    // link 内只能存在一个children节点 link 不会被编译成任何标签
    <>{/**as 映射路由 */}
        <Link href='/test/a?id=1' as={'/a/1'}>
            <div>
                <Button>Index0</Button>
                {/* <Button>Index1</Button> */}
            </div>
        </Link>
        {/* <Button onClick={()=> {Router.push('/test/b')}}>B</Button> */}
        <Button onClick={() => {
            Router.push({
                pathname: '/test/b',
                query: {
                    id: 2
                }
            }, 'test/b/2') // 路由映射
        }}>B</Button>
    </>
)