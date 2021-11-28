import VueRouter from 'vue-router'

import Login from './components/Login'
import Main from './components/Main'


const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Main }
]

const router = new VueRouter({ routes })

export default router