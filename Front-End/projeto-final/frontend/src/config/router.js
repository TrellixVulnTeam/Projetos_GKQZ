import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/home/Home"
import AdminPages from "../components/admin/AdminPages"
import ArticleByCategory from "../components/article/ArticleByCategory"
import ArticleById from "../components/article/ArticleById"
import Auth from "../components/auth/Auth"

import { userKey } from "@/global"

Vue.use(VueRouter)

const route = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "adminPages",
    path: "/admin",
    component: AdminPages,
    meta: { requireAdmin: true }
}, {
    name: "articlesByCategory",
    path: "/categories/:id/articles",
    component: ArticleByCategory
},
{
    name: "articleById",
    path: "/articles/:id",
    component: ArticleById
},
{
    name: "auth",
    path: "/auth",
    component: Auth
}]

const router = new VueRouter({
    mode: "history",
    routes: route
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requireAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: "/" })
    }else {
        next()
    }
})

export default router