import styled from 'styled-components'
import BG1 from '../../assets/img/characatorCommen/charactorBG1.jpg'
import BG2 from '../../assets/img/characatorCommen/charactorBG2.jpg'
import SwiperBG from '../../assets/img/characatorCommen/characatorBL.png'
import SwiperFL from '../../assets/img/characatorCommen/characatorFL.png'
import Rect from '../../assets/img/characatorCommen/rhombus-halffill.png'
import mic from '../../assets/img/characatorCommen/icomoon mic.png'

export const SwiperContainer = styled.div`
    background-image: url(${BG1});
    background-size: cover;
    background-repeat: no-repeat;
    height: 790px;
    width: 100%;
`

export const Swiper = styled.ul`
    display: block;
    background-image: url(${SwiperBG});
    background-size: cover;
    background-position-x: -70px;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`

export const SwiperItem = styled.li`
    position: relative;
    width: 100%;
    height: 100%;
`


export const Logo = styled.div`
    position: absolute;
    top: 70px;
    left: 280px;
    width: 360px;
    opacity: 0.5;
    img{
        width: 100%;
    }
`


export const Content = styled.div`
    position: absolute;
    width: 550px;
    left: calc(50% - 424px);
    top: 144px;
    img{
        margin-top: 20px;
        width: 400px;
    }
    ::before{
        content:"";
        width: 180px;
        height: 4px;
        display: block;
        background-color: #e3bc8c;
    }
`


export const Pic = styled.div`
    width: 1200px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 50px;
    overflow: hidden;
    img {
        width: 100%;
    }
`

export const CvDesc = styled.div`
    width: 330px;
    height: 54px;
    font-size: 24px;
    padding-left: 60px;
    line-height: 54px;
    background-color: #cca574;
    background-image: url(${Rect});
    background-size: 22px 22px;
    background-position: 10px 15px;
    background-repeat: no-repeat;
    box-shadow: 6px 6px 6px rgba(12, 12, 12, 0.2)
`

export const MicPhone = styled.div`
    float: right;
    height: 54px;
    width: 54px;
    background-image: url(${mic});
    background-size: 40px 40px;
    background-position: 5px 5px;
    background-repeat: no-repeat;
    border-radius: 2px;
    border: 3px solid #947044;
    box-sizing: border-box;
    background-color:#a6875e;
`
export const Desc = styled.div`
    margin-top: 17px;
    padding: 10px 35px 10px 50px;
    background-color: rgba(1, 1, 1, 0.5);
    background-image: url(${Rect});
    background-size: 22px 22px;
    background-position: 15px 15px;
    background-repeat: no-repeat;

    color: #fff;
    font-size: 16px;
    line-height: 26px;
`