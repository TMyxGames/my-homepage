import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL || '',
  timeout: 5000,
})

// 你还可以在这里添加拦截器（比如统一处理报错）
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('请求出错:', error)
    return Promise.reject(error)
  }
)

export default apiClient