import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import AuthMiddleware from "@/middleware/AuthMiddleware";
import Form from '../views/Form.vue'

import student from "@/router/web/student";

const routes = [

  {
    path: '/login',
    name: 'Login',
    //beforeEnter: AuthMiddleware.guest,
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: ''
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    routes,
    ...student,

  ]
})

export default router
