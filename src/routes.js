import { createRouter, createWebHistory } from 'vue-router'

import Login from './components/LoginComp.vue'
import Register from './components/RegisterComp.vue'
import Otp from './components/OtpVerification.vue'
import EditProfile from './components/EditProfile.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/otp-verify',
        name: 'Otp',
        component: Otp
    },
    {
        path: '/dashboard',
        name: 'EditProfile',
        component: EditProfile
    },
]


const router = createRouter({ history: createWebHistory(), routes });
export default router