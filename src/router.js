import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';
import AppAbout from './pages/AppAbout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'Home'
            },
        },

        {
            path: '/posts',
            name: 'postList',
            component: PostList,
            meta: {
                title: 'PostList'
            },
        },

        {
            path: '/about',
            name: 'about',
            component: AppAbout,
            meta: {
                title: 'About'
            },
        }
    ],
});

router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Postfolio - ' + to.meta.title : 'Postfolio';
});

export {router};