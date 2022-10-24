import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { 
        path: '/',
        component: () => import('@/views/main/MainView.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/main/MainHome.vue')
            },
            {
                path: 'sign-in',
                name: 'sign-in',
                component: () => import('@/views/main/SignIn.vue')
            },
            {
                path: 'sign-up',
                name: 'sign-up',
                component: () => import('@/views/main/SignUp.vue')
            }
        ]
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from) => {
    // ...
    // explicitly return false to cancel the navigation
    //   return false
})

export default router