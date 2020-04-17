import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 62px;
    background-color: #2d2f33;
    position: fixed;
    z-index: 999;
`
export const HeaderContainer = styled.div`
    margin: 0 auto;
    width: 1000px;
    height: 100%;
    position: relative;
    overflow: hidden;
`

export const LogoWrapper = styled.div`
    float: left;
    width: 270px;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    line-height: 62px;
    img {
        vertical-align: middle;
        display: inline-block;
        width: 90px;
    }
`
export const BannerWrapper = styled.div`
    float: left;
`
export const BannerItem = styled.div`
    display: inline-block;
    padding: 21px 0;
    color: #fff;
    font-size: 14px;
    width: 68px;
    text-align: center;
    cursor: pointer;
    :hover{
        background-color: rgba(255, 255, 255, 0.18);
    }
`

export const SearchWrapper = styled.div`
    float: right;
    line-height: 62px;
    position: relative;
    img{
        height: 25px;
        vertical-align: middle;
        :hover{
            cursor: pointer;
        }
    }
`
export const Search = styled.input`
    border-radius: 15px;
    height: 30px;
    width: 100px;
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.22);
    outline: none;
    :focus{
        width: 130px;
    }
    transition: all 0.5s ease;
`
export const UserLoginWrapper = styled.div`
    padding: 13px 20px;
    float: right;
    height: 100%;
    box-sizing: border-box;
    img{
        height: 100%;
    }
`