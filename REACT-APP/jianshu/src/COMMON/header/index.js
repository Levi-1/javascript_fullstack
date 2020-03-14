import React from 'react'
import { SearchWrapper, Addition, Button, NavSearch, HeaderWrapper, Logo, Nav, NavItem } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载</NavItem>
                <NavItem className='right'>登录</NavItem>
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
                    <Button className='writting'><span className="iconfont">&#xe64a;</span>写文章</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return { // state
        focused: state.header.get('focused')
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)