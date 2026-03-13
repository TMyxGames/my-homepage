import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        // 从localStorage中获取登录状态
        token: localStorage.getItem('token') || null,
        isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    }),
    actions: {
        login(token) {
            localStorage.setItem('token', token);
            localStorage.setItem('isLoggedIn', 'true');
            this.isLoggedIn = true;
            this.token = token;
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');
        }
    }
});