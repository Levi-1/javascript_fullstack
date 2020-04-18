import { GETARTICLEDATA, GETARTICLESTAT, GETTOPIC } from './actionType'
const defaultState = {
    recommendedList: [],
    statList: [],
    TopicList: []
}

export default (state = defaultState, action) => {
    if (action.type === GETARTICLEDATA) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.recommendedList = action.value.recommended_posts
        return newState
    }

    if (action.type === GETARTICLESTAT) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.statList = action.value.data
        // console.log(action.value.recommended_topics)
        return newState
    }

    if (action.type === GETTOPIC) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.TopicList = action.value.recommended_topics.list
        // console.log(action.value.data)
        return newState
    }
    return state
}
