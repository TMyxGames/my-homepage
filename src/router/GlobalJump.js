import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '../components/PageHome.vue'
import PageContent from '../components/PageContent.vue'
import PageContact from '../components/PageContact.vue'
import PageTest from '../components/PageTest.vue'
import PageLyrics from '@/components/PageLyrics.vue'
import PageWelcome from '@/components/OtherPage/PageWelcome.vue'
import BaseMainPage from '@/components/MainPage/BaseMainPage.vue'
import BaseBackendPage from '@/components/Backend/BaseBackendPage.vue'

import BackendLogin from '@/components/Backend/BackendLogin.vue'

import ManageArticle from '@/components/Backend/ManageArticle.vue'
import PageArticle from '@/components/Article/PageArticle.vue'

import { useUserStore } from '@/stores/user'
import ManageArticleContainer from '@/components/Backend/ManageArticleContainer.vue'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/PageWelcome' },
  { path: '/PageWelcome', component: PageWelcome },

  { path: '/main', component: BaseMainPage, redirect: "/PageHome",
    children: [
      { path: '/PageHome', component: PageHome },
      { path: '/PageContent', component: PageContent },
      { path: '/PageContact', component: PageContact },
      { path: '/PageTest', component: PageTest },
      { path: '/PageLyrics', component: PageLyrics },

      { path: '/PageArticle', component: PageArticle },
      { path: '/PageArticle/:id', name: 'PageArticleDetail',
        component: () => import('@/components/Article/PageArticleDetail.vue')
      },
    ]
  },

  { path: '/BackendLogin', component: BackendLogin, },
  { path: '/backend', component: BaseBackendPage, redirect: "/ManageArticle",
    meta: { requiresAuth: true },
    children: [
      { path: '/article', component: ManageArticleContainer , redirect: "/ManageArticle",
        children: [
          { path: '/ManageArticle', component: ManageArticle },
          { path: '/ManageArticle/:id', name: 'EditArticle',
            component: () => import('@/components/Backend/EditArticle.vue')
          },
        ]
      
      },
      
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userStore.isLoggedIn) {
      next({ path: '/BackendLogin' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router