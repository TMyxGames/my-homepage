<template>
    <GlobalBackground autoTimeChange/>
    <mid-overlay>
        <glass-layer class="backend-container">
            <!-- 侧边栏 -->
            <backend-sidebar class="sidebar" />

            <!-- 主体 -->
            <card-layer class="main">
                <router-view/>
            </card-layer>
        </glass-layer>
    </mid-overlay>

</template>

<script>
    import GlobalBackground from "@/components/BaseComponents/GlobalBackground.vue";
    import MidOverlay from "../BaseComponents/MidOverlay.vue";
    import GlassLayer from "../BaseComponents/GlassLayer.vue";
    import CardLayer from "../BaseComponents/CardLayer.vue";
    import BackendSidebar from "./BackendSidebar.vue";

    export default {
        name: "BaseBackendPage",
        components: {
            GlobalBackground,
            MidOverlay,
            GlassLayer,
            CardLayer,
            BackendSidebar,
        },
    }
</script>

<style scoped>
    .mid-overlay {
        padding: clamp(1rem, 2vw, 2rem);
    }

    .backend-container {
        width: 100%;
        height: calc(100vh - clamp(2rem, 4vw, 4rem));
        max-width: 120rem;
        max-height: 80rem;
        min-height: 60rem;

        display: grid;
        grid-template-columns: clamp(10rem, 20vw, 20rem) 1fr;
        gap: clamp(1rem, 2vw, 2rem);
    }

    .main {
        width: 100%;
        height: 100%;
    }

    /* 平板屏幕 */
    @media (max-width: 768px) { 
        .mid-overlay {
            padding: clamp(0.5rem, 1vw, 1rem);
        }
        .backend-container {
            gap: clamp(0.5rem, 1vw, 1rem);
        }
    }

    /* 移动屏幕 */
    @media (max-width: 640px) { 

    }
</style>