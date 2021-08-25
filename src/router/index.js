import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
         path: '/',
         component: () => import('@/views/Home.vue'),
         name: '/',
      },
      {
        path: '/types',
        component: () => import('@/views/Types.vue'),
        name: 'types',
        params: true,
      },
      {
        path: '/news',
        component: () => import('@/views/News.vue'),
        name: 'news',
      },
      {
        path: '/photos',
        component: () => import('@/views/Photos.vue'),
        name: 'photos',
      },
      {
        path: '/videos',
        component: () => import('@/views/Videos.vue'),
        name: 'videos',
      },
      {
        path: '/partners',
        component: () => import('@/views/Partners.vue'),
        name: 'partners',
      },
      {
        path: '/contacts',
        component: () => import('@/views/Contacts.vue'),
        name: 'contacts',
      },
      {
        path: '/about',
        component: () => import('@/views/About.vue'),
        name: 'about',
        params: true,
      },
    ]
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
