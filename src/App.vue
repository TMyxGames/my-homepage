<template>
  <router-view></router-view>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, provide } from 'vue'

  // 移动端判断变量
  const isMobile = ref(window.innerWidth < 768);

  // 监听窗口大小变化
  const updateSize = () => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    // 监听窗口大小变化
    window.addEventListener('resize', updateSize);
  });

  onUnmounted(() => {
    // 移除监听
    window.removeEventListener('resize', updateSize);
  });

  // 将窗口大小状态提供给所有子组件
  provide('isMobile', isMobile);
</script>

<style>
  @font-face { 
    font-family: '晴雪体';
    src: url('./assets/fonts/晴雪体.otf') format('opentype');
    font-display: swap;
  }

  body, #app, button, input, select, textarea {
    font-family: '晴雪体';
  }

</style>
