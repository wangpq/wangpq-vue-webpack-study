<template>
  <div id="app">
    <router-view></router-view>  <!-- 这里是展示来自路由页面数据的 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* 简单进行默认样式重置 */
* {
  margin: 0;
  padding: 0
}
</style>
