import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router/GlobalJump'

import './styles/reset.css'
import './styles/theme.css'

const app = createApp(App)

app.config.globalProperties.$http = axios
axios.defaults.baseURL = 'http://localhost:9090'

app.use(ElementPlus)
app.use(router)

app.mount('#app')