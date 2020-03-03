import React, { Component } from 'react'
import { Card, Divider } from 'antd'
import './index.less'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }

    }
    render() {
        return (
            <Card style={{ padding: 24 }}>
                <Divider orientation='left'><span>Blog</span></Divider>
                <p>樱花庄的宠物女孩</p>
                <p>作者：鸭志田一</p>
                <p>插画：沟口凯吉</p>
                <p>小说链接</p>
                <p>动画链接</p>
                <Divider orientation='left'>樱花庄的宠物女孩</Divider>
                <ul>
                    <li>女性角色：
                        <ul><li>shina mashiro</li>
                            <li>misaki</li>
                            <li>nanami</li>
                            <li>qihiro</li>
                        </ul>

                    </li>
                    <li>男性角色：
                        <ul>
                            <li>kana sorata</li>
                            <li>jin</li>
                            <li>Ryunosuke</li>
                        </ul>
                    </li>
                </ul>
            </Card>
        )
    }
}

export default About