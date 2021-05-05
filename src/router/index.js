import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import SingleGame from '../views/SingleGame'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/casino/:slug',
        component: SingleGame,
        name: 'SingleGame'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: 'is-active',
    routes
})

export default router