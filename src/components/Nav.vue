<template>
  <div id="nav">
  <nav>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/second">测试resourse</router-link></li>
      <li><router-link to="/third">测试jQuery</router-link></li>
    </ul>
  </nav>
  </div>
</template>

<script>

export default {
  name: 'nav'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  margin:12px 0;
  background-color: #42b983;
}

nav li {
  display: inline-block;
  margin: 0 10px;
}

nav li a {
  color: #fff;
  display: inline-block;
  padding:8px ;
}
.router-link-exact-active.router-link-active{
  font-weight:bold;
  background-color:#19B16C;
}
</style>
