import Vue from 'vue'
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [{
        path: '/',
        name: 'home',
        meta: {},
        component: () =>
            import ('@/views/Home')
    },
    {
        path: '/update',
        name: 'update',
        meta: {},
        component: () =>
            import ('@/components/PersonSettings')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router