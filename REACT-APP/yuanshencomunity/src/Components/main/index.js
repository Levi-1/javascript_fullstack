import React, { useEffect, useState } from 'react'
import qr from '../../assets/img/qrcode_ys.png'
import { connect } from 'react-redux'
import {
    MainWrapper,
    Container,
    BannerContainer,
    LeftContainer,
    RightContainer,
    QRcode,
    QRcodeWrapper
} from './style'
import ArticleList from './component/ArticleList'
import Topic from './component/Topic'
import UserList from './component/UserList'
import { HomePageAction } from './store/actionCreator'
const Main = (props) => {

    useEffect(() => {
        props.getHomeData()
    }, [])
    
    return (
        <>{
            console.log('recommendedList', props.recommendedList),
            console.log('TopicList', props.TopicList)
        }
            <MainWrapper>
                <Container>
                    <BannerContainer></BannerContainer>
                    <LeftContainer>
                        <ArticleList recommendedList={props.recommendedList}></ArticleList>
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
                        <Topic TopicList={props.TopicList}></Topic>
                        <UserList></UserList>
                    </RightContainer>
                </Container>
            </MainWrapper>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        recommendedList: state.homeReducer.recommendedList,
        TopicList: state.homeReducer.TopicList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData() {
            const action = HomePageAction()
            action(dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)