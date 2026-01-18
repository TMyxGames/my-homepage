<template>
    <!-- <GlobalBackground :imgSrc="require('@/assets/backgrounds/星月.jpg')" /> -->
    <GlobalBackground autoTimeChange/>

    <GlobalHeader></GlobalHeader>
    <div class="main-page-container">
        <div class="main-page-view">

            <router-view></router-view>

        </div>
    </div>
    <global-footer></global-footer>
</template>
  
<script>
    import GlobalBackground from '@/components/GlobalBackground.vue'
    import GlobalHeader from '@/components/Header/GlobalHeader.vue'
    import GlobalFooter from '@/components/GlobalFooter.vue'
  
    export default {
        name: 'App',
        data() {
            return {
            
            }
        },
        components: {
            GlobalBackground,
            GlobalHeader,
            GlobalFooter
        },
        methods: {
    
        },
    }
</script>
  
<style>
    .main-page-container {
        width: 100vw;
        height: auto;

        margin-top: 5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-page-view {
        width: 100%;
        max-width: 100rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
  

</style>