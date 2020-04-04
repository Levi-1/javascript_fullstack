import React, { Component } from "react";
import { FooterWrapper, FooterContainer, FooterLogo, FooterInfo } from "./style";
import img from "../../assets/img/logo1.png";
import ys from "../../assets/img/ys.png";
class Footer extends Component {
    render() {
        return(
            <>
                <FooterWrapper>
                    <FooterContainer>
                        <FooterLogo>
                            <img src={img} alt=""/>
                            <span></span>
                            <img src={ys} alt=""/>
                        </FooterLogo>
                        <FooterInfo>
                            <p>用户协议 | 隐私政策 | 家长监护工程 | 关于我们 | 联系我们 | 加入我们</p>
                            <p> 健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
                            <p> 适龄提示： 本游戏适合17岁（含）以上玩家娱乐
                                |
                                沪公网安备31010402005045号
                                |
                                 增值电信业务经营许可证：沪B2-20180816</p>
                                <p>沪ICP备18040944号-1 | 沪网文〔2018〕9752-608号</p>
                                <p> 互联网违法不良信息举报邮箱: tousu@mihoyo.com 互联网违法不良信息举报电话: 021-34203135 （工作时间：每天10点 - 20点）</p>
                                <p> 亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
                                <p> ©2012-2020 米哈游公司 版权所有</p>
                        </FooterInfo>
                    </FooterContainer>
                </FooterWrapper>
            </>
        )
    }
}

export default Footer