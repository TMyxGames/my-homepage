import axios from 'axios'
import { useUserStore } from '@/stores/user'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '',
    timeout: 15000,
})

request.interceptors.request.use(
    config => {
        const userStore = useUserStore();
        if (userStore.token) {
            config.headers['Authorization'] = userStore.token;
        }
        return config;
    }, 
    error => {
        return Promise.reject(error);
});

request.interceptors.response.use(
    res => {
        const result = res.data;
        // 如果返回的不是对象（比如是纯文本 Markdown），直接返回内容
        if (typeof result !== 'object' || result === null) {
            return result;
        }

        if (result.hasOwnProperty('code') && result.code !== 200) {
            return Promise.reject(result.msg);
        }

        return result;
    },
    error => {
        if (error.response && error.response.status === 401) {
            const userStore = useUserStore();
            userStore.logout(); // 清理残留状态
            window.location.href = '/BackendLogin'; // 跳转登录
            alert('登录已过期，请重新登录');
        }
        return Promise.reject(error);
    }
)

export default request