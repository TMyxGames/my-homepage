<template>
    <div class="info-container">
        <label class="title">信息页面</label>
    </div>

</template>

<script>
    export default {
        name: 'PageInfo',
    }
</script>

<style scoped>
    .info-container {
        width: 100%;
        height: 100%;
        padding: 2rem;
        
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 150px;
    }
</style>