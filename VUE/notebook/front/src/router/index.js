import Vue from 'vue'
import Router from 'vue-router'
import starNotes from '@/components/starNotes'
import StarBanner from '@/components/StarBanner/StarBanner'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'starNotes',
    component: starNotes,
    meta: {
      title: '星辰笔记'
    }
  },
  {
    path:'/StarBanner',
    name: 'StarBanner',
    component: StarBanner,
    meta: {
      title: 'Banner'
    }
  }  
]
})
