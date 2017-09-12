<template>
  <header>
    <h2>{{text}}</h2>
  </header>
</template>

<script>


export default {
  data () {
    return {
      text: '我是页眉header'
    }
  }
}
</script>

<style scoped>
  h2{font-weight:bold;padding:8px 0;text-align: left;background-color: #ccc;}
  img{height:80px;}
</style>
