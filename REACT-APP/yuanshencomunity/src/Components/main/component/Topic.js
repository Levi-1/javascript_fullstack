import React, { Component } from 'react'
import topicimg from '../../../assets/img/zai.jpg'
import {
    TopicWrapper,
    TopicHeader,
    TopicItemWrapper,
    TopicItem,
} from '../style'
class Topic extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.TopicList)
    }
    render() {
        return (
            <TopicWrapper>
                <TopicHeader>
                    <h3>推荐话题</h3>
                    <span>更多</span>
                </TopicHeader>
                <TopicItemWrapper>
                    {
                        this.props.TopicList.map((item, index) => (
                            <TopicItem key={index}>
                                <span><img src={item.cover} alt="" /></span><p>{item.name}</p>
                            </TopicItem>
                        ))
                    }
                </TopicItemWrapper>
            </TopicWrapper>
        )
    }
}

export default Topic