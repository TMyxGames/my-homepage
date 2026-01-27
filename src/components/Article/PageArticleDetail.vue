<template>
    <glass-layer class="article-detail-container">
        <card-layer class="content-area thin">
            <div class="bd-markdown" v-html="$md.render(markdownRaw)"></div>
        </card-layer>
    </glass-layer>
</template>

<script>
    import { useArticleStore } from '@/stores/article';
    import GlassLayer from '../BaseComponents/GlassLayer.vue';
    import CardLayer from '../BaseComponents/CardLayer.vue';

    export default {
        name: "PageArticleDetail",
        components: {
            GlassLayer,
            CardLayer,
        },
        setup() {
            const articleStore = useArticleStore();
            return { articleStore };
        },
        data() {
            return {
                currentArticle: null,
                markdownRaw: "",
            }
        },
        async mounted() {
            const id = this.$route.params.id;
            const data = await this.articleStore.getArticleById(id);

            if (data) {
                this.currentArticle = data;
                console.log("后端返回的原始 contentUrl:", this.currentArticle.contentUrl);
                await this.loadMarkdown(this.currentArticle.contentUrl);
            } else {
                this.$message.error("文章不存在或已被删除");
            }
        },
        methods: {
            async loadMarkdown(url) {
                if (!url) return;
                try {
                    const res = await this.$http.get(url);
                    this.markdownRaw = res.data;
                } catch (error) {
                    console.error("文章详情加载失败：", error);
                    this.markdownRaw = "文章加载失败";
                }
                
            }
        }

    }
</script>

<style>
    .article-detail-container {
        width: 100%;
        height: 100%;
    }

</style>