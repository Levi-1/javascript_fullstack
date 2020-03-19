import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Write extends Component {
    render() {
        const { loginFlag } = this.props
        if(loginFlag) {
            return(
                <div>写文章页面</div>
            )
        }
        else {
            return <Redirect to='/login'/>
        }
        
    }
}
const mapStateToProps = (state) => ({
    loginFlag: state.loginReducer.get('login')
})



export default connect(mapStateToProps, null)(Write)