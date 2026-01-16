<template>
    <div id="container">
        <div>
            <h1 id="title">这里是测试页面</h1>
        </div>
        <PageTestOption class="option"></PageTestOption>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

    </div>

</template>

<script>
import PageTestOption from './PageTestOption.vue'

    export default {
        name: 'PageTest',
        components: {
            PageTestOption,
        }
    }

</script>

<style scoped>

    #container {
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
        width: 100%;
        height: 100%;

        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin-top: 105px;
        padding: 25px;

        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 37.5px;
    }

    #title {
        font-family: '晴雪体';
        font-size: 48px;
        color: rgb(255, 255, 255);

        margin: 0px;
    }

    .option {
        margin: 25px;
    }
</style>