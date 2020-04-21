import { GETHOMEPAGEDATA } from './actionType'
import axios from 'axios'
const HomePageData = (articleData, topic, stat) => ({
    type: GETHOMEPAGEDATA,
    recommendedList: articleData.recommended_posts,
    TopicList: topic.recommended_topics.list,
    statList: stat.data
})

export const HomePageAction = () => {
    return (dispatch) => {
        axios.all([
            axios.get('/api/articleData.json'),
            axios.get('/api/articleTopic.json'),
            axios.get('/api/articleStat.json')
        ]).then(axios.spread(function (articleData, topic, stat) {
            dispatch(HomePageData(articleData.data, topic.data, stat.data))
        }))
    }
}