import React, { Component } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'


class Login extends Component {
    render() {
        const { loginFlag } = this.props
        if(!loginFlag) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account = input}}/>
                        <Input placeholder='密码' ref={(input)=>{this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return <Redirect to='/'/>
        }
        
    }
}
const mapStateToProps = (state) => ({
    loginFlag: state.loginReducer.get('login')
})

const mapDispatchToProps = (dispatch) => {
    return {
        login(account, password) {
            const action = actionCreators.loginAction(account.value, password.value)
            action(dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)