import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
class Topic extends Component {
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.topicList.map(item => {
                        return (<TopicItem key={item.get('id')}>
                        <img className="topic-pic" alt='' src={item.get('imgUrl')}/>
                        {item.get('title')}
                    </TopicItem>)
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    topicList: state.homeReducer.get('topicList')
})


export default connect(mapStateToProps, null)(Topic)