import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import AuthMiddleware from "@/middleware/AuthMiddleware";
import Welcome from '../views/Student/Welcome'

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: ''
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    beforeEnter: AuthMiddleware.student,
    component: Welcome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
