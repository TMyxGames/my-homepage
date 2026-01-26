<template>
    <GlobalBackground autoTimeChange/>
    <mid-overlay class="backend-overlay">
        <card-layer class="login-container">
            <input-box1
                moduleWidth="15rem"
                v-model="password"
            >
            </input-box1>
            <el-button
                class="login-button"
                type="primary"
                size="large"
                @click="handleLogin"
            >
                登录
            </el-button>
        </card-layer>
    </mid-overlay>
</template>

<script>
    import { useUserStore } from '@/stores/user';
    import GlobalBackground from '../BaseComponents/GlobalBackground.vue';
    import MidOverlay from '../BaseComponents/MidOverlay.vue';
    import GlassLayer from '../BaseComponents/GlassLayer.vue';
    import CardLayer from '../BaseComponents/CardLayer.vue';
    import InputBox1 from '../BaseComponents/InputBox1.vue';

    export default {
        name: "BackendLogin",
        components: {
            GlobalBackground,
            MidOverlay,
            GlassLayer,
            CardLayer,
            InputBox1,
        },
        setup() {
            const userStore = useUserStore();
            return { userStore };
        },
        data() {
            return {
                password: '',
                realPassword: 'qaz1224535544',
            }
        },
        methods: {
            handleLogin() {
                if (this.password === '') {
                    this.$message.error('请输入密码');
                }

                if (this.password !== this.realPassword) {
                    this.$message.error('密码错误');
                    return;
                } else {
                    this.userStore.login();
                    this.$router.push('/backend');
                    this.$message.success('登录成功');
                }
            }
        }
    }
</script>

<style>
    .backend-overlay {
        align-items: center;
    }

    .login-container {
        height: clamp(20rem, 30vw, 30rem);
        width: clamp(20rem, 30vw, 30rem);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
    }

    .login-button {
        font-size: clamp(1rem, 1.25vw, 1.25rem);

        /* border: 2px solid var(--text-hightlight); */
        border-radius: 0.5rem;
    }
</style>