import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router/GlobalJump'
import apiClient from './utils/request'

import './styles/reset.css'
import './styles/theme.css'
import './styles/BDmarkdown.css'
import md from './utils/markdown'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$http = apiClient

app.config.globalProperties.$md = md

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')