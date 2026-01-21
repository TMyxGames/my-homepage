<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
  }
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
