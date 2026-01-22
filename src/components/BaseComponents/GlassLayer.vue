<template>
    <div class="glass-layer">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'GlassLayer',
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
    .glass-layer {
        padding: clamp(1rem, 2vw, 2rem);

        background-color: var(--glass-bg);
        color: var(--glass-text);
        box-shadow: 0 0 10px rgba(0, 0, 0, 25%);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
    }
</style>