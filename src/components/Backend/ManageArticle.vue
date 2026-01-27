<template>
    <div class="manage-article">
        <span>文章管理</span>
        <el-upload
            class="upload"
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="UploadArticle"
        >
            <el-button type="primary" size="small">
                上传文章
            </el-button>
            
        </el-upload>
        <div class="item-area">
            <article-item
                v-for="item in articleStore.articles"
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
            this.articleStore.getArticles();
        },
        methods: {
            async UploadArticle(file) {
                if (file.status !== 'ready') return;
                if (!file || !file.raw) return;

                let formData = new FormData();
                formData.append('file', file.raw);

                try {
                    const res = await this.$http.post('/article/upload', formData);
                    if (res.status === 200) {
                        this.$message.success('上传成功');
                        this.articleStore.getArticles();
                    }
                    
                } catch (error) {
                    this.$message.error('上传失败');
                }
            },
            async handleUpdateTitle({ id, newTitle }) {
                try {
                    await this.$http.put('/article/updateTitle', { 
                        id: id, 
                        title: newTitle 
                    });

                    const article = this.articleStore.articles.find(a => a.id === id);
                    if (article) {
                        article.title = newTitle;
                    }

                    this.$message.success('标题修改成功');
                } catch (error) {
                    this.$message.error('标题修改失败');
                }
            },
            handleDelete(id) {
                this.$confirm('确定要删除该文章吗?', '提示', { type: 'warning' })
                    .then(() => {
                        this.articleStore.removeArticle(id);
                    });
            }
        },
    }
</script>

<style>
    .item-area {
        display: flex;
        flex-direction: column;
    }
</style>