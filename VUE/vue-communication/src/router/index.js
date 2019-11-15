import Vue from 'vue'
import Router from 'vue-router'
import D1 from '@/components/view/demo1/father'
import D2 from '@/components/view/demo2/father'
import D3 from '@/components/view/demo3/father'
import D4 from '@/components/view/demo4/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/D1',
      name: 'D1',
      component: D1
    },
    {
      path: '/D2',
      name: 'D2',
      component: D2
    },
    {
      path: '/D3',
      name: 'D3',
      component: D3
    },
    {
      path: '/D4',
      name: 'D4',
      component: D4
    }
  ]
})
