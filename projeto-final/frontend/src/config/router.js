import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/home/Home"
import AdminPages from "../components/admin/AdminPages"

Vue.use(VueRouter)

const route = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "adminPages",
    path: "/admin",
    component: AdminPages
}]

const router = new VueRouter({
    mode: "history",
    routes: route
})

export default router