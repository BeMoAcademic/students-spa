import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Auth/Login.vue'
import AuthMiddleware from "@/middleware/AuthMiddleware";
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
