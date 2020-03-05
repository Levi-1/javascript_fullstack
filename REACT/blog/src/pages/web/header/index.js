import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Row, Col, Menu} from 'antd'
import { SmileOutlined, HomeOutlined } from '@ant-design/icons'
import menus from '../../../router/web'
import './index.less'

const { Header } = Layout


class HeaderCustom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    render () {
        const key = sessionStorage.getItem('webKey') || '0'
        const list = menus.filter(v => v.menu)
        const menuList = list.map((item, i) => {
            return <Menu.Item key={i} onClick={() => {sessionStorage.setItem('webKey', String(i))}}>
                <Link to={item.path}>{React.createElement(item.icon)}<span className='nav-text'>{item.title}</span></Link>
            </Menu.Item>
        })

        return (
            <Header className='header_container'>
                <Row>
                    <Col lg={{span:4}} md={{span: 4}} xs={{span: 0}}>
                        <div className='logo'>
                            <SmileOutlined/>
                            levi's blog
                        </div>
                    </Col>
                    <Col className='mobile' lg={{span:14}} md={{span: 14}} xs={{span: 24}}>
                        <Menu mode='horizontal' defaultSelectedKeys={[key]}>
                         { menuList }
                        </Menu>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default HeaderCustom