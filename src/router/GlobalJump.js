import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageInfo from '../components/PageInfo.vue'
import PageContact from '../components/PageContact.vue'
import PageTest from '../components/PageTest.vue'
import PageLyrics from '@/components/PageLyrics.vue'


const routes = [
  { path: '/', redirect: "/PageHome" },
  { path: '/PageHome', component: PageHome },
  { path: '/PageInfo', component: PageInfo },
  { path: '/PageContact', component: PageContact },
  { path: '/PageTest', component: PageTest },
  { path: '/PageLyrics', component: PageLyrics },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router