<template>
  <div id="test">
    <ul id="list">
        <li v-for="list in lists">
            <span>{{list.customer}}</span> 
            <span>{{list.seller}}</span> 
            <span>{{list.money}}</span>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      lists : []
    }
  },
  mounted: function() { 
      this.$http({
            method:'GET',
            url:'http://www.gztpay.com:65009/crashStat/Stat/recentTrade',
            before : function(){
              document.getElementById("list").innerHTML="加载中..."
            }
      }).then(function(response) {  
          document.getElementById("list").innerHTML=""
          this.lists = response.data.obj
      }, function(response) {
          // 这里是处理错误的回调
          //console.log(response)
      });

  }

}
</script>

<style>
#list li {
  display: block;
  border:1px dashed #ccc;
  padding:10px;
}
</style>