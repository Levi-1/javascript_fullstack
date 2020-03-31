// 覆盖next。js中一些默认值

import App from 'next/app'
import 'antd/dist/antd.css'
import React from 'react'
import Layout from '../components/Layout'

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        console.log('app init')
        let pageProps
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps // 这return啥意思 --initialprops
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </>
        )
    }
}


export default MyApp