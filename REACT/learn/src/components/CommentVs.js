import React, { Component } from 'react'

export default class CommentVs extends Component {
    constructor (props) {
        super(props)
        this.state = {
            comment: []
        }
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({
                comment: [
                    {body: 'react', author:'lyx'},
                    {body: 'vue', author: 'lyx'}
                ]
            })
        }, 2000);
    }
    render() {
        return(
            <div>
                {this.state.comment.map((c, i) => (
                    <Comment key={i} data={c}/>
                ))}
            </div>
        )
    }
}
// 展示组件
function Comment({ data }) {
    return(
        <div>
            <p>{data.body}</p>
            <p>{data.author}</p>
        </div>
    )
}