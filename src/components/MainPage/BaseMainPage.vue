<template>
    <!-- <GlobalBackground :imgSrc="defaultImg" /> -->
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
    import GlobalBackground from '@/components/BaseComponents/GlobalBackground.vue'
    import GlobalHeader from '@/components/Header/GlobalHeader.vue'
    import GlobalFooter from '@/components/GlobalFooter.vue'
    import defaultImg from '@/assets/backgrounds/星月.jpg'
  
    export default {
        name: 'App',
        data() {
            return {
                defaultImg: defaultImg,
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