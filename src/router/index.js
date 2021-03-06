import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Detail from "@/components/Detail.vue"
import Video from "@/components/Video.vue"


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: "/detail/:id",
        name: "detail",
        component: Detail
    }, {
        path: "/video/:id",
        name: "video",
        component: Video
    }]
})