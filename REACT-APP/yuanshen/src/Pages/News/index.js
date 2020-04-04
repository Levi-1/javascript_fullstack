import React, {Component} from 'react'
import { NewsWrapper, NewsItemWrapper, NewsItem, NewsTitle, NewsDesc, Newsinfo, NewsCateWrapper, NewsCate } from './styled'

class News extends Component {
    render() {
        return (
            <>
                <NewsWrapper>
                    <NewsCateWrapper>
                        <NewsCate className="active">最新</NewsCate>
                        <NewsCate>公告</NewsCate>
                        <NewsCate>通知</NewsCate>
                    </NewsCateWrapper>
                    <NewsItemWrapper>
                        <NewsItem>
                            <NewsTitle>
                                4月4日全服停机
                            </NewsTitle>
                            <NewsDesc>
                                为响应国务院的号召。
                            </NewsDesc>
                            <Newsinfo>
                                <span>2020/04/04</span> <span>公告</span>
                            </Newsinfo>
                        </NewsItem>
                    </NewsItemWrapper>
                </NewsWrapper>
            </>
        )
    }
}

export default News