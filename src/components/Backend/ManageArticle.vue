<template>
    <div class="manage-article">
        <div class="form-row">
            <el-button type="primary" @click="goToCreate">添加文章</el-button>
        </div>
        <div class="item-area">
            <article-item
                v-for="item in articleStore.articleList"
                :key="item.id"
                :articleInfo="item"
                @update-title="handleUpdateTitle"
                @delete="handleDelete"
            >
            </article-item>
        </div>
    </div>
</template>

<script>
    import { useArticleStore } from '@/stores/article';
    import ArticleItem from './ArticleItem.vue';

    export default {
        name: "ManageArticle",
        components: {
            ArticleItem,
        },
        setup() {
            const articleStore = useArticleStore();
            return { articleStore };
        },
        data() {
            return {
                
            }
        },
        mounted() {
            this.articleStore.getAllArticles();
        },
        methods: {
            // 创建新文章
            async goToCreate() {
                try {
                    const res = await this.$http.get('/article/preGenerateId');

                    const newId = res.data;
                    this.$router.push(`/ManageArticle/${newId}`);
                } catch (error) {
                    console.log('创建文章失败：', error);
                }
            },
            async handleUpdateTitle({ id, newTitle }) {
                try {
                    await this.$http.put('/article/updateTitle', { 
                        id: id, 
                        title: newTitle 
                    });

                    const article = this.articleStore.articleList.find(a => a.id === id);
                    if (article) {
                        article.title = newTitle;
                    }

                    this.$message.success('标题修改成功');
                } catch (error) {
                    this.$message.error('标题修改失败');
                }
            },
        },
    }
</script>

<style>
    .item-area {
        display: flex;
        flex-direction: column;
    }
</style>