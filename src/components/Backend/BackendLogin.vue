<template>
    <GlobalBackground autoTimeChange/>
    <mid-overlay class="backend-overlay">
        <card-layer class="login-container">
            <input-box1
                moduleWidth="15rem"
                v-model="captcha"
            >
            </input-box1>
            <div class="btn-area">
                <el-button
                    class="login-button"
                    type="primary"
                    size="large"
                    @click="sendCaptcha"
                    :disabled="isCodeSending || countdown > 0"
                    :loading="isCodeSending"
                >
                    {{ countdown > 0 ? `${countdown}s后重新发送` : '获取验证码' }}
                </el-button>
                <el-button
                    class="login-button"
                    type="primary"
                    size="large"
                    @click="handleLogin"
                >
                    登录
                </el-button>
            </div>
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
                captcha: '',
                isCodeSending: false,
                countdown: 0,
            }
        },
        methods: {
            async sendCaptcha() {
                this.isCodeSending = true;

                try {
                    const res = await this.$http.post('/auth/sendCaptcha');
                    this.$message.success('验证码发送成功');

                    this.countdown = 60;
                    const timer = setInterval(() => {
                        this.countdown--;
                        if (this.countdown <= 0) {
                            clearInterval(timer);
                        }
                    }, 1000);
                } catch (error) {
                    this.$message.error('验证码发送失败');
                } finally {
                    this.isCodeSending = false;
                }
            },
            async handleLogin() {
                if (!this.captcha) {
                    this.$message.error('请输入验证码');
                    return;
                }

                try {
                    const res = await this.$http.post('/auth/login', { captcha: this.captcha });
                    this.userStore.login(res.data);
                    this.$router.push('/backend');
                    this.$message.success('登录成功');
                } catch (error) {
                    console.error(error);
                    this.$message.error(error);
                    return;
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

        border-radius: 0.5rem;
    }
</style>