<template>
    <div class="theme-switcher">
        <el-switch
          v-model="isDark"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
          @change="toggleTheme"
          style="--el-switch-on-color: #7e80ff; --el-switch-off-color: #fc85ae"
        />
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { Sunny, Moon } from '@element-plus/icons-vue'

    // 响应式变量，记录是否为深色模式
    const isDark = ref(false)

    // 切换主题的主逻辑
    const toggleTheme = (val) => {
        const htmlEl = document.documentElement
        if (val) {
            htmlEl.classList.add('dark')
            localStorage.setItem('user-theme', 'dark')
        } else {
            htmlEl.classList.remove('dark')
            localStorage.setItem('user-theme', 'light')
        }
    }

    // 初始化检查
    onMounted(() => {
        const savedTheme = localStorage.getItem('user-theme')
        // 检查本地存储或系统偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            isDark.value = true
            document.documentElement.classList.add('dark')
        }
    })
</script>

<style scoped>
    .theme-switcher {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>