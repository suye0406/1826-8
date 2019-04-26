import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/components/User/Login'
import InterList from '@/components/List/InterList'
import List from '@/components/List/List'
import Upload from '@/components/List/Upload'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },{
            path: '/login',
            name: 'Login',
            component: Login
        },{
            path: '/interlist',
            name: 'InterList',
            component: InterList
        },{
            path: '/list',
            name: 'List',
            component: List
        },{
            path: '/upload',
            name: 'Upload',
            component: Upload
        },{
            path: '/home',
            name: 'Home',
            component: Home,
            children:[{
                path: '/home',
                component: Home,
                name: 'Home',
            },
                {
                    path: '/interlist',
                    component: InterList,
                    name: 'InterList',
                }]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
