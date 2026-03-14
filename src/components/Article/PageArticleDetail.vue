<template>
    <glass-layer class="article-detail-container">
        <card-layer class="menu-area thin" v-if="!isMobile">
            <span class="article-title">{{currentArticle?.title}}</span>
            <div class="catalog-container">
                <div 
                    v-for="(item, index) in catalog"
                    :key="index"
                    :class="['catalog-item', `level-${item.level}`]"
                    @click="scrollToAnchor(item.id)"
                >
                    {{ item.title }}
                </div>
            </div>
        </card-layer>
        <card-layer class="content-area thin" v-if="markdownRaw">
            <!-- <div class="header">
                <div class="article-author">作者：{{currentArticle?.author}}</div>
            </div> -->
            <div class="bd-markdown" v-html="$md.render(markdownRaw)"/>
        </card-layer>
        <card-layer class="content-area thin" v-else>
            <div class="bd-markdown">文章加载中...</div>
        </card-layer>
    </glass-layer>
</template>

<script setup>
    import { ref, onMounted, inject } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import { useArticleStore } from '@/stores/article';
    import GlassLayer from '../BaseComponents/GlassLayer.vue';
    import CardLayer from '../BaseComponents/CardLayer.vue';
    import { ElMessage } from 'element-plus';
        
    const router = useRouter();
    const route = useRoute();
    const isMobile = inject('isMobile');

    const currentArticle = ref(null);
    const markdownRaw =  ref("");
    const catalog = ref([]);

    onMounted( async () => {
        const id = route.params.id;
        const articleStore = useArticleStore();
        const data = await articleStore.getArticleById(id);

        if (data) {
            currentArticle.value = data;
            markdownRaw.value = data.content;
            generateCatalog(markdownRaw.value);
        } else {
            ElMessage.error("文章不存在或已被删除");
        }
    });

    const generateCatalog = (rawMarkdown) => {
        // 正则匹配所有标题：# 标题 或 ## 标题
        const reg = /^(#+)\s+(.+)$/gm;
        let match;
        const res = [];
        
        while ((match = reg.exec(rawMarkdown)) !== null) {
            const level = match[1].length; // # 的个数代表层级
            const title = match[2].trim();
            // 生成与 anchor 插件一致的 ID
            const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
            
            res.push({ level, title, id });
        }
        catalog.value = res;
    };

    const scrollToAnchor = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.offsetTop - 5; // 减去你的 Header 高度（如 80px）
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    };

</script>

<style>
    .article-detail-container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: flex-start;
        /* gap: clamp(1rem, 2vw, 2rem); */
        gap: var(--thin-gap);
        position: relative;
    }

    .menu-area {
        width: clamp(12rem, 20vw, 20rem);
        height: clamp(calc(100vh - 10rem), 91vh, calc(100vh - 9rem));

        overflow-y: auto;

        position: sticky;
        top: clamp(6rem, 8.5vh, 8.5rem);

        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        gap: var(--thin-gap);
    }

    .content-area {
        flex: 1;
    }

    .catalog-container {
        margin-top: 1.5rem;
        font-family: '晴雪体', sans-serif;
    }

    .catalog-item {
        cursor: pointer;
        padding: 5px 0;

        color: var(--text-color);
        font-size: 0.95rem;

        transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .catalog-item:hover {
        color: var(--text-hightlight);
        transform: translateX(5px);
    }

    /* 根据层级缩进 */
    .level-1 { font-weight: bold; font-size: 1.1rem; }
    .level-2 { padding-left: 1rem; }
    .level-3 { padding-left: 2rem; color: #666; font-size: 0.85rem; }

    @media (max-width: 768px) {
        .menu-area {
            height: clamp(calc(100vh - 7.5rem), 94vh,calc(100vh - 6rem));
            top: clamp(2.5rem, 5.5vh, 5.5rem);
        }
    }

</style>