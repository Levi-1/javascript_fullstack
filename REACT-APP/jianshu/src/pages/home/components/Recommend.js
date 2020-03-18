import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style.js'
import { connect } from 'react-redux'

class Recommend extends Component {
    render() {
        return (
            <div>
                <RecommendWrapper>
                    {
                        this.props.list.map((item) => (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                            </RecommendItem>
                        ))
                    }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.homeReducer.get('recommendList')
})

export default connect(mapStateToProps, null)(Recommend)