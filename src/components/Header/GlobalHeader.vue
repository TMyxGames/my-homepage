<template>
    <div class="header-container">
        <div class="logo-area">
            <img class="logo" src="@/assets/兔兔.jpg" alt="logo">
        </div>

        <div class="option-area">
            <router-link 
                v-for="option in options"
                :key="option.id"
                :to="option.path"
                custom
                v-slot="{ isActive, navigate }"
            >
                <GlobalHeaderOption 
                    class="header-option"
                    :name="option.name"
                    :active="isActive"
                    @click="navigate"
                >
                </GlobalHeaderOption>

            </router-link>
        </div>
        
        <div class="control-area">
            <ThemeSwitcher></ThemeSwitcher>
        </div>

    </div>
</template>


<script>
    import GlobalHeaderOption from './GlobalHeaderOption.vue'
    import ThemeSwitcher from '../ThemeSwitcher.vue';

    export default {
        name: 'GlobalHeader',
        components: {
            GlobalHeaderOption,
            ThemeSwitcher
        },
        props: {

        },
        data() {
            return {
                options: [
                    {id:1, name: "主页", path: '/PageHome'},
                    {id:2, name: "文章", path: '/PageContent'}, 
                    // {id:3, name: "联系我", path: '/PageContact'}, 
                    // {id:4, name: "测试页面", path: '/PageTest'}, 
                    // {id:5, name: "歌词", path: '/PageLyrics'}, 
                ],
                theme: false,
            }
        },
 
    }
</script>

<style scoped>
    .header-container {
        position: fixed;
        z-index: 100;

        top: 0.5rem;
        width: 100%;
        height: 4rem;
        max-width: 100rem;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-self: center;
        gap: 2rem;
        /* padding: 0.25rem; */

        box-sizing: border-box;
        background-color: var(--glass-bg);
        backdrop-filter: blur(10px);
        border-radius: 1rem;

        transition: all 0.25s ease;
    }

    .logo-area {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

    }

    .option-area {
        height: 100%;

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .control-area {
        height: 100%;

        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;

        margin-left: auto;
    }

    /* 小于页面宽度 */
    @media (max-width: 100rem) { 
        .header-container {
            top: 0;
            border-radius: 0 0 1rem 1rem;

        }
    }

    /* 平板屏幕 */
    @media (max-width: 768px) { 
        .header-container {
            top: 0;
            border-radius: 0 0 1rem 1rem;
        }
    }

    /* 移动屏幕 */
    @media (max-width: 640px) {
        .header-container {
            top: 0;
            border-radius: 0 0 1rem 1rem;
            /* height: 3.5rem; */
        }
    }

</style>