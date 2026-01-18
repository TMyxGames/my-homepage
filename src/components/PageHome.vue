<template>
    <div class="home-container">
        <label class="title">你好</label>
        <label class="subtitle emoji">꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱</label>
        <label class="subtitle">欢迎来到我的个人页面</label>
        <label class="subtitle">目前页面还在施工中...</label>
        <!-- <h2 class="subtitle">(ˆ꜆ .   ̫  . ).   ̫  . ꜀ˆ)</h2> -->
    </div>

</template>

<script>
    export default {
        name: 'PageHome',
    }

</script>

<style scoped>
    .home-container {
        height: 100%;
        width: 100%;
        padding: 2rem;
        
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

    .title {
        font-size: clamp(5rem, 10vw, 10rem);
    }

    .subtitle {
        font-size: clamp(2rem, 5vw, 5rem);
    }



</style>