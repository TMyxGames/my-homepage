<template>
    <div class="banner-container">
        <label class="title">你好</label>
        <label class="subtitle">欢迎来到我的个人页面</label>
    </div>

    <section class="home-container">

        <glass-layer class="top">
            <card-layer class="my-info">
                <div class="avatar-area">
                    <img class="avatar" src="@/assets/兔兔.jpg" alt="Avatar" />
                </div>
                <div class="info-area"> 
                    <label class="name">❀花海寻梦❀</label>
                    <!-- <div class="github-icon"></div> -->
                </div>
            </card-layer>

            <card-layer class="introduce-area">
                <div class="bd-markdown" v-html="$md.render(markdownRaw)"></div>
            </card-layer>
        </glass-layer>

        <!-- <glass-layer class="second">
            <card-layer>
                <calendar/>
            </card-layer>
        </glass-layer> -->

        <glass-layer class="second">
            <label class="subtitle emoji">꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱</label>
            <label class="subtitle">目前页面还在施工中...</label>
            <!-- <h2 class="subtitle">(ˆ꜆ .   ̫  . ).   ̫  . ꜀ˆ)</h2> -->
        </glass-layer>

    </section>
    
</template>

<script setup>
    import { onMounted } from 'vue';
    import GlassLayer from '@/components/BaseComponents/GlassLayer.vue';
    import CardLayer from './BaseComponents/CardLayer.vue';
    import Calendar from './Common/Calendar.vue';
    import introduce from '@/assets/content/introduce.md?raw';

    const markdownRaw = introduce;


</script>

<style scoped>
    .thrid {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .banner-container {
        height: 40rem;
        width: 100%;
        padding: clamp(1rem, 2vw, 2rem);
        
        box-sizing: border-box;
        color: var(--glass-text);

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        /* gap: 1rem; */

    }

    .home-container {
        height: 100%;
        width: 100%;
        
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: clamp(1rem, 2vw, 2rem);
    }

    .top {
        height: 100%;
        width: 100%;

        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem; */
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: clamp(1rem, 2vw, 2rem);
    }

    .my-info {
        height: 100%;
        width: 100%;

        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr;
    }

    .avatar-area {
        height: 100%;
        width: 100%;
        /* max-height: 5rem; */

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .avatar {
        border: 0.25rem solid var(--text-hightlight);
        height: clamp(5rem, 7vw, 7rem);
        width: clamp(5rem, 7vw, 7rem);
        border-radius: 50%;
        object-fit: cover;
    }

    .info-area {
        height: 100%;
        width: 100%;

        color: var(--card-text);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name {
        font-size: clamp(1rem, 1.5vw, 1.5rem);
    }

    .introduce-area {
        height: 100%;
        width: 100%;

    }

    .second {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: clamp(2rem, 10vw, 10rem);
    }

    .subtitle {
        font-size: clamp(1rem, 5vw, 5rem);
    }

    .github-icon { 
        height: 2.5rem;
        width: 2.5rem;
        margin-top: auto;

        background-color: var(--text-hightlight);

        -webkit-mask-image: url('@/assets/icons/github.svg');
        mask-image: url('@/assets/icons/github.svg');

        -webkit-mask-size: contain;
        mask-size: contain;
        mask-repeat: no-repeat;
    }

    /* 平板屏幕 */
    @media (max-width: 768px) { 
        .banner-container {
            height: 28rem;
        }
        .home-container {
            gap: clamp(0.5rem, 1vw, 1rem);;
        }
        .top {
            grid-template-columns: 1fr;
            gap:clamp(0.5rem, 1vw, 1rem);
        }
        .my-info {
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
        }
    }

    /* 移动屏幕 */
    @media (max-width: 640px) { 
        .banner-container {
            height: 16rem;
        }
    }

</style>