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
    background-color: #ccc;
    font-size:12px;
    color: #666;
    line-height: 24px;
    padding: 0 5px;
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
    height: 380px;
    box-sizing: border-box;
`
export const TopicItemWrapper = styled.div`
    padding: 20px;
`

export const TopicItem = styled.div`

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