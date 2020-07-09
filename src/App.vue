<template>
  <div id="app">
    <router-view/>
   <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from '@content/MainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
/* 在style中引用使用@import */
@import url('@assets/css/base.css');
</style>
