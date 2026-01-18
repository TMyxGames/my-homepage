<template>
    <GlobalBackground autoTimeChange/>

    <div class="welcome-overlay">
        <div class="welcome-container">
            <span class="text">欢迎访问</span>
            <router-link class="link" to="/PageHome">点击进入</router-link>
        </div>

        <a class="beian"
            href="http://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
        >
            桂ICP备2026000730号-1
        </a>
    </div>
</template>

<script>
    import GlobalBackground from '../GlobalBackground.vue'

    export default {
        name: 'PageWelcome',
        components: { 
            GlobalBackground
        },
    }
</script>

<style>
    .welcome-overlay {
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 25%);
        backdrop-filter: blur(10px);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .welcome-container {
        height: 30rem;
        width: 30rem;

        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 75%);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 50px rgba(0, 0, 0, 25%);
        border-radius: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .text {
        font-size: 36px;
        color: rgb(0, 0, 0);
    }

    .link {
        font-size: 28px;
        color: #fc85ae;
    }

    .beian {
        font-size: 16px;
        /* text-decoration: none; */
        color: rgb(255, 255, 255);

        /* margin-top: auto; */
    }
</style>