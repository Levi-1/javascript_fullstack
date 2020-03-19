import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom' 
class Detail extends Component {
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
        // console.log(this.props.location.search)
    }
    render(){
        return(
            <div>
                <DetailWrapper>
                    <Header>
                        {this.props.title}
                    </Header>
                    <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
                </DetailWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.detailReducer.get('title'),
    content: state.detailReducer.get('content')
})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        const action = actionCreators.getDetail(id)
        action(dispatch)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail)) // withrouter能使detail组件获得通过路由传递的数据，若不使用，在被loadable包裹后，detail或得不到通过/detail/：id传递的数据