import Vue from 'vue'
import Vuex from 'vuex' // import 引入文件的部分 require 引入整个文件 export 抛出

Vue.use(Vuex)

const state = {
    count: 1
}
const mutations = { // mutation中获取的数据是从state数据源中获取的数据
    add(e, n) {
        e.count += n
    },
    reduce(state) {
        state.count--
    }
}

const actions = { // actions中方法为异步执行，mutations中的方法为同步执行
    addAction(context) {
        context.commit('add', 10)
    },
    reduceAction({commit}) {
        commit('reduce')        
    }
}

const getters = {
    gcount: (state) => {
        return state.count + 100
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})