import styled from 'styled-components'
import BGIMG from '../../assets/img/newsbg.jpg'

export const NewsWrapper = styled.div`
    width: 100%;
    background-image: url(${BGIMG});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: inline-block;
`

export const NewsItemWrapper = styled.ul`
    min-height: 600px;
    width: 1280px;
    margin: 66px auto 0 auto;
    opacity: .8;
`
export const NewsItem = styled.li`
    box-sizing: border-box;
    border-left: 6px solid #bc80ff;
    background-color: rgba(17, 17, 17);
    height: 160px;
    width: 100%;
    padding: 23px 47px;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
`
export const NewsTitle = styled.div`
    color: #FFF;
    font-size: 24px;
`

export const NewsDesc = styled.div`
    height: 40px;
    margin-top: 11px;
    color: #fff;
`
export const Newsinfo = styled.div`
    float: right;
    margin-top: 30px;
    color: #999999;
    font-size: 14px;
`
export const NewsCateWrapper = styled.ul`
    margin: 104px auto 0 auto;
    width: 1280px;
    opacity: .8;
`

export const NewsCate = styled.li`
    background-color: #111;
    color: #CCC;
    width: 155px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    &.active{
        color: #333;
        background-color: #fff;
    }
`