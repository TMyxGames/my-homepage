<template>
    <div id="container">
        <h1 id="title">信息页面</h1>
    </div>

</template>

<script>
    export default {
        name: 'PageInfo',
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

        font-size: 150px;
        font-weight: bold;
        color: rgb(255, 255, 255);
    }
</style>