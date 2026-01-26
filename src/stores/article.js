import { defineStore } from 'pinia';
import axios from 'axios';

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [],
    loading: false,
  }),
  actions: {
    // 获取文章列表
    async getArticles() {
        this.loading = true;
        try {
            const res = await axios.get('/article/all');
            this.articles = res.data;
        } catch (error) {
            console.error('获取文章列表失败：', error);
        } finally {
            this.loading = false;
        }
    },
    async getArticleById(id) {
        try {
            const res = await axios.get(`/article/${id}`);
            return res.data;
        } catch (error) {
            console.error('文章获取失败：', error);
            return null;
        }

    },
    // 删除文章
    async removeArticle(id) {
        try {
            const res = await axios.delete(`/article/delete/${id}`);
            if(res.status === 200) {
                this.articles = this.articles.filter(article => article.id !== id);
                this.$message.success('删除文章成功');
            }
        } catch (error) {
            console.error('删除文章失败：', error);
            this.$message.error('删除文章成功');
        }
    },

  },
})