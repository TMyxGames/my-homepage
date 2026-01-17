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
        margin-top: 7rem;
        padding: 2rem;
        
        box-sizing: border-box;
        overflow: visible;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 2rem;
    }

    .title {
        font-family: '晴雪体';
        font-size: 10rem;
        color: rgb(255, 255, 255);
    }

    .subtitle {
        font-family: '晴雪体';
        font-size: 5rem;
        color: rgb(255, 255, 255);
    }



</style>