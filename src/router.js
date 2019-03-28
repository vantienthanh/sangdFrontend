import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NProgress from 'nprogress'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { isLogin: true },
      component: () => import('./components/profile/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { isLogin: true },
      component: () => import('./components/profile/login.vue')
    },
    {
      path: '/nguoi-tim-viec',
      name: 'enterpriseListCV',
      component: () => import('./components/frontend/enterpriseListCV.vue')
    },
    {
      path: '/nguoi-tim-viec/:id',
      name: 'enterpriseCVDetail',
      component: () => import('./components/frontend/enterpriseCVDetail.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  const tokenLocal = window.localStorage.getItem('token')
  if (to.meta.isLogin) {
    if (tokenLocal) {
      next({ name: 'home' })
      NProgress.done()
    } else {
      next()
    }
  } else if (to.meta.permission) {
    if (tokenLocal) {
      next()
    } else {
      next({ name: 'home' })
      NProgress.done()
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
