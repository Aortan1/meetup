
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'

import Home from '../components/Home.vue'
import Meetups from '../components/Meetup/Meetups.vue'
import CreateMeetup from '../components/Meetup/CreateMeetup.vue'
import Profile from '../components/User/Profile.vue'
import Signup from '../components/User/Signup.vue'
import Signin from '../components/User/Signin.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/meetups',
        name: 'Meetups',
        component: Meetups
    },
    {
        path: '/meetup/new',
        name: 'CreateMeetup',
        component: CreateMeetup
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;