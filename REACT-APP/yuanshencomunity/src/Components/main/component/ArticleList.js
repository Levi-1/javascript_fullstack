import React, { Component } from 'react'
import levelImg from '../../../assets/img/level3.png'
import {
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
} from '../style'
class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <ArticleList>
                {
                    this.props.recommendedList.map((item, index) => (
                        
                        <ArticleItem key={index}>
                            {console.log(item)}
                            <UserInfo>
                                <Avatar>
                                    <img src={item.user.avatar_url} alt="" />
                                </Avatar>
                                        {item.user.nickname}
                                        <Level><img src={levelImg} alt="" /></Level>
                                <Date>{item.post.reply_time.split('-')[1]+ '-' + item.post.reply_time.split('-')[2].split(' ')[0]}</Date>
                            </UserInfo>
                            <Title>{item.post.subject}</Title>
                            <Content></Content>
                            <Footer>
                                {
                                    item.topics.map((tag,ind)=>(
                                        <TopicTag key={ind}>{tag.name}</TopicTag>
                                    ))
                                }
                                
                                <DataTag>
                                    eye: 111
                                    com: 76
                                    good: 123
                                        </DataTag>
                            </Footer>
                        </ArticleItem>
                    ))
                }

                <LoadButton>
                    <span>点击加载更多</span>
                </LoadButton>
            </ArticleList>
        )
    }
}
export default Article