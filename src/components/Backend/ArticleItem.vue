<template>
    <div class="article-item">
        <h1 class="title bd-h1">
            {{ articleInfo.title }}
        </h1>
        <el-button
            class="delete-btn"
            type="danger"
            size="large"
            @click="$emit('delete', articleInfo.id)"
        >
            删除文章
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: {
            articleInfo: {
                type: Object,
                required: true,
            }
        },
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

    .delete-btn {
        margin-left: auto;
    }
</style>