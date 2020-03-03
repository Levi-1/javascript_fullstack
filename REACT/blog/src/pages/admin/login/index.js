import React from 'react'
import { Form, Input, Button, message, Card } from 'antd'
import './index.less'
import { FormContext } from 'antd/lib/form/context'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Particles from 'reactparticles.js'
class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: false,
            userName: '',
            passWord: ''
        }
    }
    
    handleSubmit = (e) => {
        // this.props.form.validateFields(async (err, value) => {
        //     if (!err) {
                console.log('登陆成功')
                sessionStorage.setItem('blogUser', 'levi')
                sessionStorage.setItem('menuItenKey', '0')
                this.props.history.push('/') // 路由跳转
        //     }else {
        //         console.log('失败')
        //     }
        // })
        
    }

    render () {
        return (
            <div className="login">
                <Particles id='particles1' config='particles1.json' height='90%'/>
                <Card className="login-form" style={{width:300, borderRadius:10}}>
                    <Form onFinish={this.handleSubmit}>
                        <Form.Item label='userName' name='username' rules= {[{required:true, message:'请输入用户名'}]}>
                            <Input prefix={<UserOutlined style={{color: 'rgba(0 0 0 0.25) '}}/>} placeholder='请输入用户名'/>
                        </Form.Item>
                        <Form.Item label='passWord' name='password' rules= {[{required:true, message:'请输入密码'}]}>
                            <Input prefix={<LockOutlined style={{color: 'rgba(0 0 0 0.25) '}}/>} placeholder='请输入密码'/>
                        </Form.Item>
                        <Button htmlType='submit' type="primary" block className='login-form-button'>Login</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default Login
