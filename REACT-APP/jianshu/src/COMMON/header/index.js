import React from 'react'
import { SearchWrapper, Addition, Button, NavSearch, HeaderWrapper, Logo, Nav, NavItem } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left'><a href='/'>首页</a></NavItem>
                <NavItem className='left'>下载</NavItem>
                {/* { 为什么退出添加了一个a标签后每次点击退出都会跳转到登录页面 但是使用link包裹就不会发生*/}
                {
                    props.login ? <NavItem onClick={props.logout} className='right'><a href='/'>退出</a></NavItem> : <NavItem className='right'><a href='/login'>登录</a></NavItem>
                }
                <NavItem className='right'><span className="iconfont">&#xe650;</span></NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={400} in={props.focused} classNames="slide">
                        <NavSearch onBlur={props.handleInputBlur} onFocus={props.handleInputFocus} className={props.focused ? 'focused' : ''}>
                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</span>
                </SearchWrapper>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Link to='/write'>
                        <Button className='writting'><span className="iconfont">&#xe64a;</span>写文章</Button>
                    </Link>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return { // state
        focused: state.header.get('focused'),
        login: state.loginReducer.get('login')
    }
}
const mapDispatchToProps = (dispatch) => {
    return { // methods
        handleInputFocus() {
            const action = actionCreators.searchFocus
            dispatch(action)
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur
            dispatch(action)
        },
        logout() {
            dispatch(LoginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)