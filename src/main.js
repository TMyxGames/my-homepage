import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router/GlobalJump'

import './styles/reset.css'
import './styles/theme.css'
import './styles/BDmarkdown.css'
import md from './utils/markdown'

const pinia = createPinia()
const app = createApp(App)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000,
})

app.config.globalProperties.$http = axios
axios.defaults.baseURL = apiClient

app.config.globalProperties.$md = md

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')