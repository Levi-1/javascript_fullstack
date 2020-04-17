import styled from 'styled-components'
import BannerImg from '../../assets/img/banner.jpeg'
export const MainWrapper = styled.div`
    padding-top: 62px;
    background-color: #f0f1f5;
`
export const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 30px;
`
export const BannerContainer = styled.div`
    width: 100%;
    height: 340px;
    background-image: url(${BannerImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
    margin-bottom: 50px;
`

export const LeftContainer = styled.div`
    float: left;
    width: 700px;
    background-color: #fff;
    border-radius: 5px;
`
export const ArticleList = styled.div`
    width: 100%;
`
export const ArticleItem = styled.div`
    width: 100%;
    padding: 24px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
`
export const UserInfo = styled.div`
    font-size: 12px;
    color: #666;
    display: flex;
    align-items:center;
    margin-bottom: 15px;
`
export const Avatar = styled.div`
    width: 24px;
    height: 24px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 15px;
    img{
        width: 100%;
    }
`
export const Level = styled.div`
    height: 12px;
    margin: 0 10px;
    img{
        height: 100%;
    }
`
export const Date = styled.div`
    color: #ccc;
    font-size: 12px;
`

export const Title = styled.div`
    color: #333333;
    font-size: 16px;
    font-weight: 600;
`
export const Content = styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 30px;
`
export const Footer = styled.div`
    margin-top: 7px;
    display: flex;
    width: 100%;
`
export const TopicTag = styled.div`
    height: 24px;
    border-radius: 12px;
    background-color: #f5f5f5;
    font-size:12px;
    color: #666;
    line-height: 24px;
    padding: 0 5px;
    margin-right: 5px;
`
export const DataTag = styled.div`
    height: 18px;
    color: #ccc;
    font-size: 14px;
    margin-left: auto;
`
export const LoadButton = styled.div`
    width: 100%;
    height: 70px;
    color: #4cc3ff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        line-height: 16px;
        padding: 10px 0;
        :hover{
            cursor: pointer;
        }
    }
`
export const RightContainer = styled.div`
    float: right;
    width: 280px;
`
export const QRcodeWrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 140px;
    padding: 20px 14px;
    box-sizing: border-box;
    border-radius: 5px;
    a{
        text-decoration: none;
        width: 100%;
    }
`
export const QRcode = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    img{
        height: 100%;
    }
    p{
        margin: 20px 0px 0px 5px;
        font-size: 16px;
        color: #4cc3ff;
    }
    p:nth-child(2){
        color: #999;
        margin-top: 7px;
    }
`

export const TopicWrapper = styled.div`
    background-color: #fff;
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
`
export const TopicItemWrapper = styled.div`
    padding: 0 20px 30px 20px;
`

export const TopicItem = styled.div`
    height: 50px;
    margin: 20px 0 0 0;
    border-radius: 10px;
    display: flex;
    span{
        height: 100%;
        display: inline-block;
        border-radius: 10px;
        overflow: hidden;
    }
    p{
        padding-left: 20px;
        font-size: 14px;
        color: #666;
    }
    img{
        height: 100%;
    }
`
export const TopicHeader = styled.div`
    padding: 0 20px;
    display:flex;
    height: 50px;
    align-items: center;
    span{
        margin-left: auto;
        color: #999;
    }
    border-bottom: 1px solid #ccc;
`

export const UserRecmdList = styled.div`
    padding: 0 20px 30px 20px;
`
export const UserRecomdItem = styled.div`
    height: 44px;
    width: 100%;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
    align-items:center;
    span.avatar{
        display: inline-block;
        height: 44px;
        border-radius: 22px;
        border: 1px solid #ccc;
        position:relative;
        margin-right: 10px;
        img{
            width:44px;
        }
    }
    span.avatarTag{
        position: absolute;
        height:14px;
        width: 14px;
        right:0;
        bottom: 0;
        img{
            width: 100%;
        }
    }
    .nickName{
        display: inline-block;
        width: 70px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #666;
    }
    .foucsButton{
        height: 26px;
        width: 70px;
        background-color: #4cc3ff;
        color: #fff;
        text-align:center;
        line-height: 26px;
        border-radius: 13px;
        margin-left: 5px;
    }
    .levelimg{
        height: 16px;
        vertical-align: top;
    }
    p{
        font-size: 12px;
        color: #999;
        margin: 0;
    }
`