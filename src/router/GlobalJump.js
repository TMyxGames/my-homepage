import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageContent from '../components/PageContent.vue'
import PageContact from '../components/PageContact.vue'
import PageTest from '../components/PageTest.vue'
import PageLyrics from '@/components/PageLyrics.vue'
import PageWelcome from '@/components/OtherPage/PageWelcome.vue'
import BaseMainPage from '@/components/MainPage/BaseMainPage.vue'
import BaseBackendPage from '@/components/BackendPage/BaseBackendPage.vue'



const routes = [
  { path: '/:catchAll(.*)', redirect: '/PageWelcome' },
  { path: '/PageWelcome', component: PageWelcome },

  { path: '/BaseMainPage', component: BaseMainPage, redirect: "/PageHome",
    children: [
      { path: '/PageHome', component: PageHome },
      { path: '/PageContent', component: PageContent },
      { path: '/PageContact', component: PageContact },
      { path: '/PageTest', component: PageTest },
      { path: '/PageLyrics', component: PageLyrics },
    ]
  },

  { path: '/BaseBackendPage', component: BaseBackendPage,
    
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router