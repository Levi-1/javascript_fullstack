import {GETHOMEPAGEDATA} from './actionType'
const defaultState = {
    recommendedList: [],
    TopicList: []
}

export default (state = defaultState, action) => {
    if (action.type === GETHOMEPAGEDATA) {
        const newState = JSON.parse(JSON.stringify(state))
        let RecmdList = []
        for (let index in action.recommendedList) {
            RecmdList.push({
                ...action.recommendedList[index],
                stat: action.statList[index].stat
            })
        }
        newState.recommendedList = RecmdList
        newState.TopicList = action.TopicList
        // console.log(action)
        return newState
    }
    return state
}
