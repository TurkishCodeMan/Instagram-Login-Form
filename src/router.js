import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [

    {
        path: "/instagram", redirect: () => {
            window.location.href = 'http://www.instagram.com'

        }

    }
]

export const router = new VueRouter({
    routes: routes,
    mode: "hash"
})