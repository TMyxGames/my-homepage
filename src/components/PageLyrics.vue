<template>
    <div id="container">
        <h1 id="title">这里是歌词页面</h1>

        

    </div>

</template>

<script>
    export default {
        name: 'PageLyrics',
    }
</script>

<style scoped>
    #container {
        display: inline-block;
        overflow: visible;
        width: 100%;
        height: 100%;
        
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        margin-top: 105px;

        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 37.5px;
    }

    #container> #title {
        font-family: '晴雪体';
        font-size: 150px;
        color: rgb(255, 255, 255);
    }

    #container> #subtitle {
        font-family: '晴雪体';
        font-size: 50px;
        color: rgb(255, 255, 255);
    }
</style>