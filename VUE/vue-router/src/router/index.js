import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import Mine2 from '@/components/Mine2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'登录页面',
      component: Login
    },
    {
      path: '/mine',
      name: '我的页面',
      component: Mine,
      children:[//子路由
        {
          path:'mine2',
          name:'name2',
          component:Mine2
        }
      ]
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    }
  ]
})
