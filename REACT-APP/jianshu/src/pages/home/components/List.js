import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style.js'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <div>
                {
                    list.map((item, index) => (
                        <ListItem key={index}>
                            <img className='pic' src={item.get('imgUrl')} alt=''></img>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}> 阅读更多 </LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.homeReducer.get('articleList'),
    page: state.homeReducer.get('articlePage')
})
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList (page) {
            const action = actionCreators.getMoreList(page)
            action(dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)