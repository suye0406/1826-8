import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CHome from '@/components/home/Home'
import ShopDetails from '@/components/public/shopDetails/shopDetails'
import Serach_list from '@/components/public/serach_list'
import My from '@/components/my/my'
import Cart from '@/components/cart/cart'
import Pay from '@/components/public/pay/pay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chome',
      component: CHome,
      // children:[
      //   {
      //     // 当 /user/:id/profile 匹配成功，
      //     // UserProfile 会被渲染在 User 的 <router-view> 中
      //     path: 'chome',
      //     name:'CHome',
      //     component: CHome
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/chome',
        name: 'chome',
        component: CHome
    },{
        path: '/shopdetails/:goods_id',
        name: 'ShopDetails',
        component: ShopDetails
    },{
        path: '/serach_list',
        name: 'Serach_list.vue',
        component: Serach_list
    },{
        path: '/my',
        name: 'My',
        component: My
    },{
        path: '/cart',
        name: 'cart',
        component: Cart
    },{
        path: '/pay',
        name: 'Pay',
        component: Pay
    },{
          path: '/personal',
          name: 'personal',
          component: () => import('@/components/my/personal')
      },{
          path: '/newAddress',
          name: 'newAddress',
          component: () => import('@/components/public/address/newAddress')
      },

  ]
})
