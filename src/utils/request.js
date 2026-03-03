import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '',
    timeout: 15000,
})

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
        return Promise.reject(error);
    }
)

export default request