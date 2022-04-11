import VueRouter from 'vue-router'

import AuthRegist from '../components/AuthRegist.vue'
import RegistUser from '../components/RegistUser.vue'
import UserProfile from '../components/UserProfile.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AuthRegist
        },
        {
            path: '/sign_up',
            component: RegistUser
        },
        {
            path: '/profile',
            component: UserProfile
        },
    ],
})