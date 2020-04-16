import React, { Component } from 'react'
import Logo from '../../assets/img/headermihoyo.png'
import UserDefaultImg from '../../assets/img/avatarDefaultPc.png'
import icon from '../../assets/img/search.png'
import { HeaderWrapper, HeaderContainer, LogoWrapper, BannerWrapper, BannerItem, UserLoginWrapper, SearchWrapper, Search } from './style.js'
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <>
                <HeaderWrapper>
                    <HeaderContainer>
                        <LogoWrapper><img src={Logo} alt=""/>丨&nbsp;米友社·原神</LogoWrapper>
                        <BannerWrapper>
                            <Link to='/'><BannerItem>首页</BannerItem></Link>
                            <Link to='/jiuguan'><BannerItem>酒馆</BannerItem></Link>
                            <Link to='/guanfang'><BannerItem>官方</BannerItem></Link>
                            <Link to='/tuqu'><BannerItem>图区</BannerItem></Link>
                            <Link to='/guance'><BannerItem>观测枢</BannerItem></Link>
                        </BannerWrapper>
                        
                        <UserLoginWrapper>
                            <img src={UserDefaultImg} alt="touxiang"/>
                        </UserLoginWrapper>
                        <SearchWrapper>
                            <Search></Search><img src={icon} alt=""/>
                        </SearchWrapper>
                    </HeaderContainer>
                </HeaderWrapper>
            </>
        )
    }
}

export default Header