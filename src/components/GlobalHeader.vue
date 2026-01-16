<template>
    <div class="gh-container">
        <img class="logo" src="../assets/兔兔.jpg" alt="logo">
        <slot></slot>
        <!-- <GlobalHeaderOption v-for="option in options" :key="option.id" class="option" :name="option.name"></GlobalHeaderOption> -->


    </div>
</template>


<script>
    export default {
        name: 'GlobalHeader',
        props: {

        },
        components: {

        }
    }
</script>

<style scoped>
    .gh-container {
        position: fixed;
        z-index: 1;
        display: flex;
        height: auto;
        top: 5px;
        left: 5px;
        right: 5px;


        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 37.5px;

    }

    .logo {
        width: 75px;
        height: 75px;
        border-radius: 50%;

    }

    /* 此处仅设定 option 的宽高，因为 option 的具体样式由 GlobalHeaderOption 组件决定 */
    /* #gh-container> .option {
        width: 150px;
        height: 75px;
        margin-left: 10px;
    } */


</style>