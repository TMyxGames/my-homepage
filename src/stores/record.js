import request from '@/utils/request';
import { defineStore } from 'pinia';

export const useRecordStore = defineStore('record', {
    state: () => ({
        recordList: [],
        isLoading: false,
    }),
    actions: {
        async getRecordList() {
            this.isLoading = true;
            try {
                const res = await request.get('/auth/all');
                this.recordList = res.data;
            } catch (error) {
                console.error('获取记录列表失败：', error);
            } finally {
                this.isLoading = false;
            }
            
        },
    },
})