<template>
    <glass-layer class="info-container">
        <label class="subtitle">目前本页面用于测试尚未完工的</label>
        <label class="subtitle">自定义Markdown主题</label>

        <card-layer class="introduce-area">
            <div class="bd-markdown" v-html="$md.render(markdownRaw)"></div>
        </card-layer>
    </glass-layer>

</template>

<script>
    import GlassLayer from './BaseComponents/GlassLayer.vue';
    import CardLayer from './BaseComponents/CardLayer.vue';
    import testmd from '@/assets/content/test.md?raw';

    export default {
        name: 'PageContent',
        components: {
            GlassLayer,
            CardLayer,
        },
        data() {
            return {
                markdownRaw: testmd
            }
        },
    }
</script>

<style scoped>
    .info-container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: clamp(1rem, 2vw, 2rem);
    }

    .introduce-area {
        height: 100%;
        width: 100%;

        padding: clamp(1rem, 2vw, 2rem);
        box-sizing: border-box;
        border-radius: 1rem;

        background-color: var(--card-bg);
        color: var(--card-text)
    }

    .title {
        font-size: clamp(2rem, 10vw, 10rem);
    }

    .subtitle {
        font-size: clamp(1rem, 5vw, 5rem);
    }
</style>