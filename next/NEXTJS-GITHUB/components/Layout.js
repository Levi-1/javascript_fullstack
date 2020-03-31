// import React, {Component} from 'react'
import { Button } from 'antd'

import Link from 'next/link' // 路由跳转的两种方式
import Router from 'next/router'

export default ({ children }) => (
    // link 内只能存在一个children节点 link 不会被编译成任何标签
    <>
        <Link href='/test/a?id=1' as={'/a/1'}>
            <div>
                <Button>A</Button>
            </div>
        </Link>
        <Link href='/test/b'>
            <div>
                <Button>B</Button>
            </div>
        </Link>
        <div>{children}</div>
    </>
)