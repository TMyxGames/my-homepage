<template>
    <div class="footer-container">
        <label class="prompt">🚧页面正在施工中🚧</label>
        <label class="prompt">❀ 最后更新日期：2026 / 1 / 22 ❀</label>
        <a class="beian"
            href="http://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
        >
            桂ICP备2026000730号-1
        </a>
    </div>
</template>

<script>
    export default {
        name: 'GlobalFooter',

    }
</script>

<style scoped>
    .footer-container {
        width: 100%;
        height: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;

        color: var(--glass-text);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .prompt {
        font-size: 22px;
    }

    .beian {
        font-size: 16px;
        color: inherit;
        /* text-decoration: none; */
        /* color: rgb(255, 255, 255); */
    }
</style>