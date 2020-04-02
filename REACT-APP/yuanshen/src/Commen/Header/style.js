import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 66px;
    background-color: rgba(17, 17, 17, 0.75);
    position: relative;
`
export const Icon = styled.div`
    float: left;
    height: 100%;
`

export const HeaderBar = styled.div`
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const BannerItem = styled.div`
    font-size: 17px;
    margin: 0 30px;
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 66px;
    a {
        color: #CCCCCC;
        text-decoration: none;
        :hover {
            text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
            color: #fff;
        }
    }
    
`

export const LoginButton = styled.div`
    color: #CCCCCC;
    position: absolute;
    right: 30px;
    height: 100%;
    line-height: 66px;
    padding: 0 10px;
    :hover{
        color: #FFF;
        cursor: pointer;
    }
`