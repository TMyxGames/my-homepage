<template>
  <!-- <GlobalBackground :imgSrc="require('@/assets/backgrounds/黄昏.png')" /> -->
  <GlobalBackground autoTimeChange/>
  <div class="container">

    <GlobalHeader class="header">

      <router-link 
        v-for="option in options"
        :key="option.id"
        :to="option.path"
        class="link">

        <GlobalHeaderOption class="option" :name="option.name"></GlobalHeaderOption>

      </router-link>

    </GlobalHeader>


    <router-view></router-view>

    <h2>🚧页面正在施工中🚧</h2>
    <h2>❀ 最后更新日期：2026 / 1 / 18 ❀</h2>
    <a class="beian" href="http://beian.miit.gov.cn/" target="_blank">桂ICP备2026000730号-1</a>
  </div>

</template>

<script>
import GlobalBackground from './components/GlobalBackground.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalHeaderOption from './components/GlobalHeaderOption.vue'

  export default {
    name: 'App',
    data: function() {
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
    components: {
      GlobalBackground,
      GlobalHeader,
      GlobalHeaderOption,
    },
    methods: {

    },
  }
</script>

<style>
  @font-face { 
    font-family: '晴雪体';
    src: url('./assets/fonts/晴雪体.otf') format('opentype');
    /* font-display: swap; */
  }

.container {
    font-family: '晴雪体';
    text-align: center;
    color: rgb(255, 255, 255);

    padding-bottom: 5rem;
  }

  .header {
    margin: 10px;
    overflow: hidden;
  }

  .option {
    width: 150px;
    height: 75px;
    margin-left: 10px;

    /* min-width: 75px; */
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  .beian {
    color: rgb(255, 255, 255);
    font-size: 18px;
    /* text-decoration: none; */
  }

</style>
