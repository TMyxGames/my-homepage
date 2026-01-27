<template>
    <div class="card-layer">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'CardLayer',
        props: {
            width: {
                type: String,
                default: '1rem',
            },
            height: {
                type: String,
                default: '1rem',
            }
        },
    }
</script>

<style scoped>
    .card-layer {
        box-sizing: border-box;
        padding: clamp(1rem, 2vw, 2rem);

        background-color: var(--card-bg);
        color: var(--card-text);
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 25%); */
        backdrop-filter: blur(10px);
        border-radius: 1rem;
    }

    /* 平板屏幕 */
    @media (max-width: 768px) { 
        .thin{
            padding:clamp(0.5rem, 1vw, 1rem);
        }
    }

    /* 移动屏幕 */
    @media (max-width: 640px) { 

    }
</style>