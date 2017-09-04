<template>
  <div id="app"> 
    <ul>
      <li><router-link to="/">hello</router-link></li>
      <li><router-link to="/second">second</router-link></li>
      <li><router-link to="/test">test</router-link></li>
    </ul>
    <img src="./assets/images/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style:none;
  font-weight:bold;
  display: inline-block;
  padding:0 1em;
}
li a{
  color:green;
}
</style>
