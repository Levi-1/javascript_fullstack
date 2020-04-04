import styled from 'styled-components'


export const FooterWrapper = styled.footer`
    min-height: 360px;
    min-width: 1280px;
    width: 100%;
    z-index: 999;
    background-color: #111;
    color: #fff;
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 300px;
    padding: 30px 0;
    position: relative;
`
export const FooterLogo = styled.div`
    width: 300px;
    position: absolute;
    top: 32%;
    left: 9%;
    margin: auto;
    span{
        width: 1px;
        height: 30px;
        background-color: #666;
        margin: 0 25px;
        display: inline-block;
        vertical-align: middle;
    }
    img {
        width: 110px;
        vertical-align: middle;
    }
`
export const FooterInfo = styled.div`
    position: absolute;
    color: #ccc;
    right: 10%;
    top: 15%;
    p{
        font-size: 14px;
        line-height: 25px;
    }
    p:nth-child(1){
        color: #fff;
        font-size: 17px;
        margin-bottom: 35px;
    }
`