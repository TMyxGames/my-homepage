import { defineStore } from 'pinia';
import request from '@/utils/request';

export const useArticleStore = defineStore('article', {
  state: () => ({
    articleList: [],
    currentArticle: null,
    isLoading: false,
  }),
  actions: {
    // 获取所有文章
    async getAllArticles() {
        this.isLoading = true;
        this.articleList = [];
        
        try {
            const res = await request.get('/article/all');
            this.articleList = res.data;
        } catch (error) {
            console.error('获取文章列表失败：', error);
        } finally {
            this.isLoading = false;
        }
    },
    // 获取已发布文章
    async getPublished() {
        this.isLoading = true;
        this.articleList = [];

        try {
            const res = await request.get('/article/published');
            this.articleList = res.data;
        } catch (error) {
            console.error('获取文章列表失败：', error);
        } finally {
            this.isLoading = false;
        }
    },

    // 获取所有草稿
    async getDrafts() {
        this.isLoading = true;
        this.articleList = [];

        try {
            const res = await request.get('/article/drafts');
            this.articleList = res.data;
        } catch (error) {
            console.log("草稿列表加载失败：", error);
        } finally {
            this.isLoading = false;
        }
    },

    // 获取文章详情
    async getArticleById(id) {
        try {
            const res = await request.get(`/article/get/${id}`);
            return res.data;
        } catch (error) {
            console.error('文章获取失败：', error);
            return null;
        }

    },
    // 删除文章
    async removeArticle(id) {
        try {
            const res = await request.delete(`/article/delete/${id}`);
            this.articles = this.articles.filter(article => article.id !== id);
            this.$message.success('删除文章成功');
        } catch (error) {
            console.error('删除文章失败：', error);
            this.$message.error('删除文章成功');
        }
    },

  },
})