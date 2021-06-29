import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import AuthMiddleware from "@/middleware/AuthMiddleware";
import create from "@/store/web/create";

const routes = [

  {
    path: '/login',
    name: 'Login',
    beforeEnter: AuthMiddleware.guest,
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: ''
  },
  {
    path: '/password/reset/email',
    name: 'PasswordSendReset',
    component: ''
  },
  {
    path: '/password/reset/:token',
    name: 'PasswordPostReset',
    component: ''
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: ''
  },
  {
    path: '/expired',
    name: 'AccountExpired',
    beforeEnter: AuthMiddleware.auth,
    component: ''
  },
  {
    path: '/profile/reset',
    name: 'AccountExpired',
    beforeEnter: AuthMiddleware.auth,
    component: ''
  },
  {
    path: '/forced/reset',
    name: 'AccountExpired',
    beforeEnter: AuthMiddleware.auth,
    component: ''
  },
  {
    path: '/typeform-webhook',
    name: 'Webhook',
    component: ''
  },
  {
    path: '/*',
    name: '404',
    component: ''
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
     routes,
      ...create,

  ]
})

export default router
