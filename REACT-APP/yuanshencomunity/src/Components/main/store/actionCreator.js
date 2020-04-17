import {GETARTICLEDATA, GETARTICLESTAT, GETTOPIC} from './actionType'

export const ArticleDataAction = (res) =>  ({
    type: GETARTICLEDATA,
    value: res
})

export const ArticleStatAction = (res) => ({
    type: GETARTICLESTAT,
    value: res
})

export const TopicAction = (res) => ({
    type: GETTOPIC,
    value: res
})