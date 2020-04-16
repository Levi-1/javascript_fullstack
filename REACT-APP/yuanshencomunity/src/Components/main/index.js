import React, { Component } from 'react'
import avatarImg from '../../assets/img/avatar1.png'
import levelImg from '../../assets/img/level3.png'
import qr from '../../assets/img/qrcode_ys.png'
import {
    MainWrapper,
    Container,
    BannerContainer,
    LeftContainer,
    RightContainer,
    ArticleList,
    UserInfo,
    Avatar,
    Level,
    Date,
    Title,
    Content,
    Footer,
    TopicTag,
    DataTag,
    ArticleItem,
    LoadButton,
    QRcode,
    QRcodeWrapper,
    TopicWrapper,
    TopicHeader,
    TopicItemWrapper,
    TopicItem
} from './style'
class Main extends Component {
    render() {
        return (
            <>
                <MainWrapper>
                    <Container>
                        <BannerContainer></BannerContainer>

                        <LeftContainer>
                            <ArticleList>
                                <ArticleItem>
                                    <UserInfo>
                                        <Avatar>
                                            <img src={avatarImg} alt="" />
                                        </Avatar>
                                        咸鱼喵
                                        <Level><img src={levelImg} alt="" /></Level>
                                        <Date>04-13</Date>
                                    </UserInfo>
                                    <Title>芭芭拉</Title>
                                    <Content></Content>
                                    <Footer>
                                        <TopicTag>同人作品</TopicTag>
                                        <DataTag>
                                            eye: 111
                                            com: 76
                                            good: 123
                                        </DataTag>
                                    </Footer>
                                </ArticleItem>
                                <LoadButton>
                                    <span>点击加载更多</span>
                                </LoadButton>
                            </ArticleList>
                        </LeftContainer>
                        <RightContainer>
                            <QRcodeWrapper>
                                <a href="https://bbs.mihoyo.com/" target="_blank">
                                    <QRcode>
                                        <img src={qr} alt="" />
                                        <span>
                                            <p>扫码下载米游社App</p>
                                            <p>和小伙伴一起团聚吧</p>
                                        </span>
                                    </QRcode></a>
                            </QRcodeWrapper>
                            <TopicWrapper>
                                <TopicHeader>
                                    <h3>推荐话题</h3>
                                    <span>更多</span>
                                </TopicHeader>
                                <TopicItemWrapper>
                                    <TopicItem>

                                    </TopicItem>
                                </TopicItemWrapper>

                            </TopicWrapper>
                        </RightContainer>
                    </Container>
                </MainWrapper>
            </>
        )
    }
}

export default Main