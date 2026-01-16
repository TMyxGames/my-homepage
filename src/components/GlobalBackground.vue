<template>
    <div id="container">
        <img src="../assets/背景.jpg" alt="背景图片">

    </div>

</template>

<script>
    export default {
        name: 'GlobalBackground',
    }

</script>

<style scoped>
    #container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    #container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>