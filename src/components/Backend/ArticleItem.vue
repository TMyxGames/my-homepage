<template>
    <div class="article-item">
        <div class="info-area">
            <h1 class="title bd-h1" v-if="!isEditing" @click="startEdit">
                {{ articleInfo.title }}
            </h1>
            <el-input
                class="title-input"
                v-else
                ref="titleInput"
                v-model="tempTitle"
                size="large"
                @blur="saveTitle"
                @keyup.enter="saveTitle"
            ></el-input>

            <span class="file-name">
                {{ formatTime(articleInfo.uploadTime) }}
            </span>
        </div>
        <el-button
            class="btn"
            v-if="articleInfo.status === 0"
            type="success"
            size="large"
            @click="handlePublish"
        >发布文章</el-button>
        <el-button
            class="btn"
            type="primary"
            size="large"
            @click="handleEdit"
        >
            编辑文章
        </el-button>
        <el-button
            class="btn"
            type="danger"
            size="large"
            plain
            @click="handleDelete"
        >
            删除文章
        </el-button>
    </div>
</template>

<script>
    import { useArticleStore } from "@/stores/article";

    export default {
        name: "ArticleItem",
        props: {
            articleInfo: {
                type: Object,
                required: true,
            }
        },
        setup() {
            const articleStore = useArticleStore();
            return { articleStore };
        },
        data() {
            return {
                isEditing: false,
                tempTitle: "",
            };
        },
        methods: {
            // 格式化日期
            formatTime(time) {
                if (!time) return '';
                return time.replace('T', ' ').substring(0, 16);
            },

            // 发布文章（将文章状态改为1）
            async handlePublish() {
                try {
                    const res = await this.$http.post('/article/save', {
                        id: this.articleInfo.id,
                        title: this.articleInfo.title,
                        status: 1,
                    });
                    this.$message.success('文章已发布');
                    this.articleStore.getAllArticles();
                } catch (error) {
                    this.$message.error('发布失败');
                }
            },

            startEdit() {
                this.tempTitle = this.articleInfo.title;
                this.isEditing = true;
                this.$nextTick(() => {
                    this.$refs.titleInput.focus();
                });
            },
            saveTitle() {
                // 如何内容没变，则直接退出
                if (this.tempTitle === this.articleInfo.title) {
                    this.isEditing = false;
                    return;
                }
                this.$emit('update-title', {
                    id: this.articleInfo.id,
                    newTitle: this.tempTitle
                });
                this.isEditing = false;
            },

            // 编辑文章
            handleEdit() {
                this.$router.push({
                    name: 'EditArticle',
                    params: { id: this.articleInfo.id },
                    query: { mode: 'edit' }
                });
            },

            handleDelete() {
                this.$confirm('确定要删除该文章吗?', '提示', { type: 'warning' })
                    .then(() => {
                        this.articleStore.removeArticle(this.articleInfo.id);
                    });
            }
        }
    };
</script>

<style scoped>
    .article-item {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .info-area {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .title {
        transition: all 0.25s ease;
    }

    .title:hover {
        transform: scale(1.025);
    }

    .btn {
        margin-left: auto;
    }
</style>