<template>
    <glass-layer class="article-container">
        <page-article-item
            v-for="item in articleStore.articles"
            :key="item.id"
            :articleInfo="item"
        >
        </page-article-item>
    </glass-layer>
</template>

<script>
    import { useArticleStore } from '@/stores/article';
    import MidOverlay from '../BaseComponents/MidOverlay.vue';
    import GlassLayer from '../BaseComponents/GlassLayer.vue';
    import CardLayer from '../BaseComponents/CardLayer.vue';
    import PageArticleItem from './Common/PageArticleItem.vue';

    export default {
        name: "PageArticle",
        components: {
            MidOverlay,
            GlassLayer,
            CardLayer,
            PageArticleItem,
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
    }
</script>

<style>
    .article-container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
</style>