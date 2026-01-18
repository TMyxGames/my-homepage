import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageInfo from '../components/PageInfo.vue'
import PageContact from '../components/PageContact.vue'
import PageTest from '../components/PageTest.vue'
import PageLyrics from '@/components/PageLyrics.vue'
import PageWelcome from '@/components/OtherPage/PageWelcome.vue'
import BaseMainPage from '@/components/MainPage/BaseMainPage.vue'


const routes = [
  { path: '/', redirect: '/PageWelcome' },
  { path: '/PageWelcome', component: PageWelcome },

  { path: '/BaseMainPage', component: BaseMainPage, redirect: "/PageHome",
    children: [
      { path: '/PageHome', component: PageHome },
      { path: '/PageInfo', component: PageInfo },
      { path: '/PageContact', component: PageContact },
      { path: '/PageTest', component: PageTest },
      { path: '/PageLyrics', component: PageLyrics },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router