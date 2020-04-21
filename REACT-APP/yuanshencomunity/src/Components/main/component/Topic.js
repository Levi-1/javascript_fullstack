import React from 'react'
import {
    TopicWrapper,
    TopicHeader,
    TopicItemWrapper,
    TopicItem,
} from '../style'
const Topic = (props) => {

        return (
            <TopicWrapper>
                <TopicHeader>
                    <h3>推荐话题</h3>
                    <span>更多</span>
                </TopicHeader>
                <TopicItemWrapper>
                    {
                        props.TopicList.map((item, index) => (
                            <TopicItem key={index}>
                                <span><img src={item.cover} alt="" /></span><p>{item.name}</p>
                            </TopicItem>
                        ))
                    }
                </TopicItemWrapper>
            </TopicWrapper>
        )
    }


export default Topic