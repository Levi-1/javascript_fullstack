import React, { Component } from 'react'
import { HomeWrapper, BackToTop, HomeRight, HomeLeft } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writter from './components/Writter'
import { actionCreators } from './store'
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount() {
        this.props.loadHomeData()
        this.bindEvents()
    }
    componentWillMount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    bindEvents () {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='bannerImg' alt='' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584381899627&di=0f51ed4b3ec15c23e3e23f215a866a43&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F17%2F05%2F22%2F159362b98d1999339fa9efa3cdb26396.jpg' />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>
                    </Recommend>
                    <Writter>
                    </Writter>
                </HomeRight>
                {
                    this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>↑</BackToTop> : null
                }
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadHomeData() {
            const action = actionCreators.getHomeInfo()
            action(dispatch)
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop > 300){
                dispatch(actionCreators.toggleToTop(true))
            }
            else {
                dispatch(actionCreators.toggleToTop(false))
            }
        }
    }
}

const mapState = (state) => ({
    showScroll: state.homeReducer.get('showScroll')
})

export default connect(mapState, mapDispatchToProps)(Home)