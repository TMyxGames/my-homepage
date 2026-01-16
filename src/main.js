import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueRuter from 'vue-router'

import './styles/reset.css'
import GlobalHeaderJump from './router/GlobalHeaderJump'

const app = createApp(App)

app.config.globalProperties.$http = axios
axios.defaults.baseURL = 'http://localhost:8081'

app.use(VueRuter)
app.use(ElementPlus)
app.use(GlobalHeaderJump)

app.mount('#app')