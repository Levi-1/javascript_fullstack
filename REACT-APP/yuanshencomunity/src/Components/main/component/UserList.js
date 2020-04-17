import React, { Component } from 'react'
import avatar from '../../../assets/img/avatar10013.png'
import avatarTag from '../../../assets/img/userTag.png'
import levelImg2 from '../../../assets/img/level11.png'
import { 
    TopicWrapper,
    TopicHeader,
    UserRecmdList,
    UserRecomdItem
} from '../style'
class UserList extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicHeader>
                    <h3>推荐用户</h3>
                    <span>更多</span>
                </TopicHeader>
                <UserRecmdList>
                    <UserRecomdItem>
                        <span className='avatar'><img src={avatar} alt="avatar" /><span className="avatarTag"><img src={avatarTag} alt="userTag" /></span></span>
                        <div>
                            <div><span className='nickName'>提瓦特徒步旅行</span><img className="levelimg" src={levelImg2} alt="level" /></div>
                            <p>梦想是环游世界</p>
                        </div>
                        <span className="foucsButton">
                            关注
                                        </span>
                    </UserRecomdItem>
                    <UserRecomdItem>
                        <span className='avatar'><img src={avatar} alt="avatar" /><span className="avatarTag"><img src={avatarTag} alt="userTag" /></span></span>
                        <div>
                            <div><span className='nickName'>提瓦特徒步旅行</span><img className="levelimg" src={levelImg2} alt="level" /></div>
                            <p>梦想是环游世界</p>
                        </div>
                        <span className="foucsButton">
                            关注
                                        </span>
                    </UserRecomdItem>
                    <UserRecomdItem>
                        <span className='avatar'><img src={avatar} alt="avatar" /><span className="avatarTag"><img src={avatarTag} alt="userTag" /></span></span>
                        <div>
                            <div><span className='nickName'>提瓦特徒步旅行</span><img className="levelimg" src={levelImg2} alt="level" /></div>
                            <p>梦想是环游世界</p>
                        </div>
                        <span className="foucsButton">
                            关注
                                        </span>
                    </UserRecomdItem>
                    <UserRecomdItem>
                        <span className='avatar'><img src={avatar} alt="avatar" /><span className="avatarTag"><img src={avatarTag} alt="userTag" /></span></span>
                        <div>
                            <div><span className='nickName'>提瓦特徒步旅行</span><img className="levelimg" src={levelImg2} alt="level" /></div>
                            <p>梦想是环游世界</p>
                        </div>
                        <span className="foucsButton">
                            关注
                                        </span>
                    </UserRecomdItem>
                </UserRecmdList>
            </TopicWrapper>
        )
    }
}

export default UserList