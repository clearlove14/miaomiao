import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BABEL_URL,
    routes:[
        movieRouter,
        cinemaRouter,
        mineRouter,
        {
            path:"/*",
            redirect:"/movie"
        }
        // {
        //     path:"/",
        //     name:'home',
        //     component:Home
        // },
        // {
        //     path:"/about",
        //     name:'about',
        //     component:()=>import('.views/About.vue')
        // }
    ]
})