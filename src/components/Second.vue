<template>
  <div id="secondcomponent">
    <h2>豆瓣电影排行版</h2>
    <ul id="articleId">
        <li v-for="(article,index) in articles" :key="article.id">
         {{index+1}}、 {{article.title}}
        </li>
    </ul>
    <footer>
          <a> 作者 {{ author }} </a>
    </footer>
  </div>
</template>

<script>
import jsonp from 'jsonp'

export default {
  data() {
    return {
      author: "wangpq",
      articles : []
    }
  },
  mounted: function() { 
    // 使用 vue-resource 
    /*
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) { 
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以
    }, function(err) {
        console.log(err)
    });
    */

    // Ajax 推荐使用 axios 或者 superagent(superagent-jsonp)  

    // axios不支持jsonp，因为axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净
    // 所以要使用jsonp,可以独立安装 npm i jsonp --save-dev 
    // 然后在页面中引用import jsonp from 'jsonp'

    jsonp('https://api.douban.com/v2/movie/top250?count=10', null, (err, data) => {
      if(err) {
        console.error(err.message);
      }else{ 
        if(data && data.subjects.length > 0) {
          this.articles =data.subjects
        }
      }
    })

  }
}
</script>

<style scoped lang="less">
#secondcomponent{
  margin:8px;
  background-color: #fff;
  padding:10px;
  border-radius:6px;
  h2{
    font-weight: bold;
    font-size:18px;
    margin-bottom:8px;
    color:#008cff;
  }
}

#articleId li {
  border-bottom:1px dashed #ccc;
  padding:8px 0;
}
</style>