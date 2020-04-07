import React, { Component } from 'react'
import { Swiper, SwiperContainer, SwiperItem, Logo, Content, Pic, CvDesc, MicPhone, Desc } from "./style";
import Qin from '../../assets/img/characator/qin.png'
import QinLogo from '../../assets/img/characator/qin logo.png'
import QinName from '../../assets/img/characator/qin name.png'


class Charcator extends Component {
    render() {
        return (
            <>
                <SwiperContainer>
                    <Swiper>
                        <SwiperItem>
                            <Pic>
                                <img src={Qin} />
                            </Pic>
                            <Logo>
                                <img src={QinLogo} />
                            </Logo>
                            <Content>
                                <img src={QinName} />
                                <CvDesc>
                                    CV: 林簌
                                    <MicPhone>
                                    </MicPhone>
                                </CvDesc>
                                <Desc>
                                    <p>身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。<br></br>当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。</p>
                                </Desc>
                            </Content>
                        </SwiperItem>
                    </Swiper>
                </SwiperContainer>
            </>
        )
    }
}

export default Charcator