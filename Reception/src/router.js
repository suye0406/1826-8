import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CHome from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'chome',
          name:'CHome',
          component: CHome
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      // {
      //     path: '/chome',
      //     name: 'chome',
      //     component: CHome
      // },
  ]
})
