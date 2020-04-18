import React, { Component } from 'react'
import qr from '../../assets/img/qrcode_ys.png'
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
import store from '../../Store/index'
import axios from 'axios'
import { ArticleDataAction, ArticleStatAction, TopicAction } from './store/actionCreator'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState().homeReducer
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.combineArticleData = this.combineArticleData.bind(this)
        store.subscribe(this.handleStoreChange) // 监听store数据变化
    }
    handleStoreChange() {
        // 在store数据改变后 修改数据源
        this.setState(store.getState().homeReducer)
        // console.log(this.state)
    }
    combineArticleData() {
        let RecmdList = []
        for (let index in this.state.recommendedList) {
            RecmdList.push({
                ...this.state.recommendedList[index],
                stat: this.state.statList[index].stat
            }) 
        }
        this.setState({
            recommendedList: RecmdList
        })
    }

componentDidMount() {
    axios.all([
        axios.get('/api/articleData.json'),
        axios.get('/api/articleTopic.json'),
        axios.get('/api/articleStat.json')
    ]).then(axios.spread(function (articleData, topic, stat) {
        const actionData = ArticleDataAction(articleData.data)
        const actionTopic = TopicAction(topic.data)
        const actionStat = ArticleStatAction(stat.data)
        store.dispatch(actionData)
        store.dispatch(actionTopic)
        store.dispatch(actionStat)
    })).then(() => {
        this.combineArticleData()
        console.log(this.state)
    })
    // axios.get('/api/articleData.json').then((res) => {
    //     const action = ArticleDataAction(res.data)
    //     store.dispatch(action)
    // })
    // axios.get('/api/articleTopic.json').then((res) => {
    //     const action = ArticleStatAction(res.data)
    //     // console.log(res.data)
    //     store.dispatch(action)
    // })
    // axios.get('/api/articleStat.json').then((res) => {
    //     const action = TopicAction(res.data)
    //     // console.log(res.data)
    //     store.dispatch(action)
    // })


}
render() {
    return (
        <>
            <MainWrapper>
                <Container>
                    <BannerContainer></BannerContainer>
                    <LeftContainer>
                        <ArticleList recommendedList={this.state.recommendedList}></ArticleList>
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
                        <Topic TopicList={this.state.TopicList}></Topic>
                        <UserList></UserList>
                    </RightContainer>
                </Container>
            </MainWrapper>
        </>
    )
}
}

export default Main