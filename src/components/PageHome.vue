<template>
    <div class="banner-container">
        <label class="title">你好</label>
        <label class="subtitle">欢迎来到我的个人页面</label>
    </div>
    <div class="home-container">
        <label class="subtitle emoji">꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱</label>
        <label class="subtitle">目前页面还在施工中...</label>
        <!-- <h2 class="subtitle">(ˆ꜆ .   ̫  . ).   ̫  . ꜀ˆ)</h2> -->
    </div>
</template>

<script>
    export default {
        name: 'PageHome',
        components: {
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }

</script>

<style scoped>
    .banner-container {
        height: 40rem;
        width: 100%;
        padding: clamp(1rem, 2vw, 2rem);
        
        box-sizing: border-box;
        color: var(--glass-text);

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        /* gap: 1rem; */

    }

    .home-container {
        height: 100%;
        width: 100%;
        padding: clamp(1rem, 2vw, 2rem);
        
        box-sizing: border-box;
        background-color: var(--glass-bg);
        color: var(--glass-text);
        backdrop-filter: blur(10px);
        border-radius: 1rem;

        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem; */
        display: grid;

    }

    .title {
        font-size: clamp(2rem, 10vw, 10rem);
    }

    .subtitle {
        font-size: clamp(1rem, 5vw, 5rem);
    }

    /* 平板屏幕 */
    @media (max-width: 768px) { 
        .banner-container {
            height: 28rem;
        }
    }

    /* 移动屏幕 */
    @media (max-width: 640px) { 
        .banner-container {
            height: 16rem;
        }
    }

</style>