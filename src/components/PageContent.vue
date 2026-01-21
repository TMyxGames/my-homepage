<template>
    <div class="info-container">
        <label class="subtitle">目前本页面用于测试尚未完工的</label>
        <label class="subtitle">自定义Markdown主题</label>

        <div class="introduce-area">
                <div class="bd-markdown" v-html="$md.render(markdownRaw)"></div>
        </div>
    </div>

</template>

<script>
    import testmd from '@/assets/content/test.md?raw';

    export default {
        name: 'PageContent',
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
        padding: 2rem;
        
        box-sizing: border-box;
        background-color: var(--glass-bg);
        color: var(--glass-text);
        box-shadow: 0 0 10px rgba(0, 0, 0, 25%);
        backdrop-filter: blur(10px);
        border-radius: 1rem;

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