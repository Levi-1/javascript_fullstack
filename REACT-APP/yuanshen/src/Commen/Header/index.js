import React, { Component } from 'react'
import { HeaderWrapper,HeaderBar,LoginButton,Icon,BannerItem } from './style'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <HeaderWrapper>
                <Icon>
                    <img height="100%" src="https://webstatic.mihoyo.com/bh3/upload/officialsites/201908/ys_1565764084_7084.png" alt=""></img>
                </Icon>
                <HeaderBar>
                    <BannerItem><Link to="/">首页</Link></BannerItem>
                    <BannerItem><Link to="/charator">角色</Link></BannerItem>
                    <BannerItem><Link to="/world">世界</Link></BannerItem>
                    <BannerItem><Link to="/news">新闻</Link></BannerItem>
                    <BannerItem><Link to="/comics">漫画</Link></BannerItem>
                    <BannerItem><Link to="/community">社区</Link></BannerItem>
                </HeaderBar>
                <LoginButton>登&nbsp;录&nbsp;<span className="iconfont">&#xe60a;</span> </LoginButton>
            </HeaderWrapper>
        )
    }
}

export default Header