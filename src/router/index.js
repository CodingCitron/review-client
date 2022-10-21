import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { 
        path: '/',
        name: 'main',
        component: () => import('@/views/main/MainView.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/main/MainHome.vue')
            },
            {
                path: 'sign-in',
                component: () => import('@/views/main/SignIn.vue')
            },
            {
                path: 'sign-up',
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