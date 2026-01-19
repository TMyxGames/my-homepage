// composables/useTheme.js
import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    
    // 修改 HTML 属性
    document.documentElement.setAttribute('data-theme', theme)
    // 保存到本地，下次进入页面自动生效
    localStorage.setItem('user-theme', theme)
  }

  onMounted(() => {
    // 优先级：本地存储 > 系统偏好
    const savedTheme = localStorage.getItem('user-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      isDark.value = true
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  })

  return { isDark, toggleTheme }
}