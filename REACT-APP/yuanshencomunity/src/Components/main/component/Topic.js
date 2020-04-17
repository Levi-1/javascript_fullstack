import React, { Component } from 'react'
import topicimg from '../../../assets/img/zai.jpg'
import {
    TopicWrapper,
    TopicHeader,
    TopicItemWrapper,
    TopicItem,
} from '../style'
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicHeader>
                    <h3>推荐话题</h3>
                    <span>更多</span>
                </TopicHeader>
                <TopicItemWrapper>
                    <TopicItem>
                        <span><img src={topicimg} alt="" /></span><p>再临测试内容</p>
                    </TopicItem>
                    <TopicItem>
                        <span><img src={topicimg} alt="" /></span><p>再临测试内容</p>
                    </TopicItem>
                    <TopicItem>
                        <span><img src={topicimg} alt="" /></span><p>再临测试内容</p>
                    </TopicItem>
                    <TopicItem>
                        <span><img src={topicimg} alt="" /></span><p>再临测试内容</p>
                    </TopicItem>
                </TopicItemWrapper>
            </TopicWrapper>
        )
    }
}

export default Topic