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
        
        

    </div>
</template>


<script>
    import GlobalHeaderOption from './GlobalHeaderOption.vue'
    export default {
        name: 'GlobalHeader',
        components: {
            GlobalHeaderOption
        },
        props: {

        },
        data() {
            return {
                options: [
                    {id:1, name: "主页", path: '/PageHome'},
                    {id:2, name: "信息", path: '/PageInfo'}, 
                    // {id:3, name: "联系我", path: '/PageContact'}, 
                    // {id:4, name: "测试页面", path: '/PageTest'}, 
                    // {id:5, name: "歌词", path: '/PageLyrics'}, 
                ]
            }
        },
 
    }
</script>

<style scoped>
    .header-container {
        position: fixed;
        z-index: 100;

        top: 0;
        width: 100%;
        height: 4rem;
        max-width: 100rem;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-self: center;
        gap: 2rem;

        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);
        border-radius: 0 0 1rem 1rem;

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
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;

    }

    .option-area {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

</style>