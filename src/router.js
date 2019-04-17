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
      path: '/viec-tim-nguoi',
      name: 'enterpriseListCV',
      component: () => import('./components/frontend/enterpriseListCV.vue')
    },
    {
      path: '/viec-tim-nguoi/:id',
      name: 'enterpriseCVDetail',
      component: () => import('./components/frontend/enterpriseCVDetail.vue')
    },
    {
      path: '/nguoi-tim-viec',
      name: 'memberListCV',
      component: () => import('./components/frontend/memberListCV')
    },
    {
      path: '/nguoi-tim-viec/:id',
      name: 'memberCVDetail',
      component: () => import('./components/frontend/memberCVDetail')
    },
    {
      path: '/phien-giao-dich',
      name: 'session',
      component: () => import('./components/session/listSession')
    },
    {
      path: '/phien-giao-dich/:id',
      name: 'sessionDetail',
      component: () => import('./components/session/sessionDetail')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/profile/profile'),
      children: [
        {
          path: '',
          name: 'profileInfo',
          component: () => import('./components/profile/memberProfile')
        },
        {
          path: '/profile/cv',
          name: 'profileCVIndex',
          component: () => import('./components/profile/profileCVIndex')
        },
        {
          path: '/profile/cv/member',
          name: 'profileCreateMemberCV',
          component: () => import('./components/member/profileCreateMemberCV')
        },
        {
          path: '/profile/cv/member/:id/edit',
          name: 'profileEditMemberCV',
          component: () => import('./components/member/profileEditMemberCV')
        },
        {
          path: '/profile/cv/enterprise',
          name: 'profileCreateEnterpriseCV',
          component: () => import('./components/enterprise/profileCreateEnterpriseCV')
        },
        {
          path: '/profile/cv/enterprise/:id/edit',
          name: 'profileEditEnterpriseCV',
          component: () => import('./components/enterprise/profileEditEnterpriseCV')
        }
      ]
    },
    {
      path: '/session/table/:id',
      name: 'sessionTable',
      component: () => import('./components/session/sessionTable')
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
