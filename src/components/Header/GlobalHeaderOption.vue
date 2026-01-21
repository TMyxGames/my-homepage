<template>
    <!-- <button class="option">{{ name }}</button> -->

    <div class="option-container" :class="{ 'is-active': active }">
        <span class="option-text">{{ name }}</span>
    </div>
</template>

<script>
    export default {
        name: 'GlobalHeaderOption',
        props: {
            name: String,
            active: Boolean,
        },
        methods: {

        }
    }
</script>

<style scoped>

    .option-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        height: 50px;
        padding: 0px 10px 0px 10px; 
        /* background-color: rgba(255, 255, 255, 25%); */

        position: relative;
        cursor: pointer;
        flex-shrink: 0;
        transition: all 0.3s ease;
    }
    
    .option-text {
        /* font-weight: 900; */
        font-size: 20px;
        user-select: none;
        color: #F8F6F6;
        position: relative;
        white-space: nowrap;
        transition: all 0.3s ease;
        z-index: 1;
    }

    .option-text::after {
        content: '';
        position: absolute;
        z-index: -1;

        bottom: -0.25rem;
        left: 0;
        width: 0;
        height: 0.3rem;

        border-radius: 1rem;
        background-color: var(--text-hightlight);
        backdrop-filter: blur(10px);
        transform-origin: left;
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .option-container:not(.is-active):hover .option-text::after {
        width: 100%;
    }

    .is-active .option-text {
        transform: scale(1.2);
    }

    .is-active .option-text::after {
        bottom: 0.15rem;
        width: 100%;
        height: 0.55rem;

        background-color: var(--text-hightlight); /* 红色下划线 */
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    /* 已弃用 */
    /* .option {
        border: 0px;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 37.5px;

        font-family: '晴雪体';
        font-size: 28px;
        font-weight: bold;
        color: rgb(255, 255, 255);
    }

    .option:focus {
        border: 0px;
        background-color: rgba(255, 255, 255, 50%);
        backdrop-filter: blur(10px);
        border-radius: 37.5px;

        font-family: '晴雪体';
        font-size: 28px;
        font-weight: bold;
        color: rgb(255, 255, 255);
    } */
</style>