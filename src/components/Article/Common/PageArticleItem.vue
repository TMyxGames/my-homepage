<template>
    <card-layer class="article-item bd-default" @click="toDetail">
        <h1 class="title bd-h1">
            {{ articleInfo.title }}
        </h1>
        <!-- <span class="upload-time ">
            发布时间：{{ formatTime(articleInfo.uploadTime) }}
        </span> -->
    </card-layer>
</template>

<script>
    import GlassLayer from '@/components/BaseComponents/GlassLayer.vue';
    import CardLayer from '@/components/BaseComponents/CardLayer.vue';

    export default {
        name: "PageArticleItem",
        components: {
            GlassLayer,
            CardLayer,
        },
        props: {
            articleInfo: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            // 格式化日期
            formatTime(time) {
                if (!time) return '';
                return time.replace('T', ' ').substring(0, 16);
            },
            // 跳转详情
            toDetail() {
                this.$router.push(`/PageArticle/${this.articleInfo.id}`);
            }
            
        },

    }
</script>

<style scoped>
    .article-item {
        width: 100%;
        height: auto;
        transition: all 0.25s ease;
    }

    .article-item:hover {
        transform: scale(1.025);
    }
</style>