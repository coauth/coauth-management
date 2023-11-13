import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  // {
  //   meta: {
  //     title: 'Select style'
  //   },
  //   path: '/',
  //   name: 'style',
  //   component: Style
  // },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  }
  ,
  {
    meta: {
      title: 'Time Based OTP'
    },
    path: '/totp',
    name: 'totp',
    component: () => import('@/views/TotpView.vue')
  },
  {
    meta: {
      title: 'Re-confirm text'
    },
    path: '/reconfirm',
    name: 'reconfirm',
    component: () => import('@/views/ReconfirmView.vue')
  },
  {
    meta: {
      title: 'API Keys'
    },
    path: '/apikey',
    name: 'apikey',
    component: () => import('@/views/ApiKeysView.vue')
  },
  {
    meta: {
      title: 'Co-Auth: Login'
    },
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
