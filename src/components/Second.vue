<template>
  <div id="secondcomponent">
    <h1>这是一个测试的页面</h1>

    <br>
    <h2>豆瓣电影排行版</h2>
    <ul id="articleId">
        <li v-for="article in articles">
            {{article.title}}
        </li>
    </ul>

    <footer>
          <a> 作者 {{ author }} </a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "wangpq",
      articles : []
    }
  },
  mounted: function() { 
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {
          },
          emulateJSON: true
      }).then(function(response) { 
          this.articles = response.data.subjects
          // this.articles = response.data["subjects"] 也可以
      }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
      });
  }

}
</script>

<style>
#secondcomponent li {
  display: block;
}
</style>