<template>
    <card-layer class="sidebar-container">
        <div class="backend-option-area">
            <router-link
                v-for="option in options"
                :key="option.id"
                :to="option.path"
            >
                <div class="option">
                    <span class="item">{{ option.name }}</span>
                </div>
            </router-link>
        </div>
        <div class="operation-area">
            <el-button 
                class="logout-btn" 
                type="primary"
                text
                @click="handleLogout"
            >
                退出登录
            </el-button>
            <ThemeSwitcher/>
        </div>
    </card-layer>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/user';
    import ThemeSwitcher from '../ThemeSwitcher.vue';
    import CardLayer from '../BaseComponents/CardLayer.vue';

    export default {
        name: "BackendSidebar",
        components: {
            ThemeSwitcher,
            CardLayer,
        },
        setup() {
            const router = useRouter();
            const userStore = useUserStore();
            return { router, userStore };
        },
        data() {
            return {
                options: [
                    {id:1, name: "文章管理", path: '/ManageArticle'},
                ]
            }
        },
        methods: {
            handleLogout() {
                this.userStore.logout();
                this.$router.push('/BackendLogin');
                this.$message.success('已退出登录');
            }
        }
    }
</script>

<style>
    .sidebar-container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .backend-option-area {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        overflow-y: auto;
    }

    .option {
        width: 100%;
        height: 100%;

        /* background-color: aqua; */

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item {
        width: 100%;
        height: 100%;

        font-size: 2rem;

        text-align: center;
        text-decoration: none;


    }

    .operation-area { 
        width: 100%;
        height: auto;
        margin-top: auto;

        display: flex;
        justify-content: center;
        gap: 2.5rem;
    }

    .logout-btn { 
        width: 50%;
        height: 100%;

        font-size: 1.5rem;

        text-align: center;
        text-decoration: none;
    }
</style>