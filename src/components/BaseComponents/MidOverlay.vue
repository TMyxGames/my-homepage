<template>
    <div class="mid-overlay">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "MidOverlay",
    }
</script>

<style>
    .mid-overlay {
        width: 100%;
        height: 100%;
        min-height: 100vh;

        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
</style>