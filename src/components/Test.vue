<template>
  <div id="test">
    <ul id="list">
        <li v-for="(list,index) in lists" :key="index">
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
    $.ajax({
        type : "get",
        url:'http://www.gztpay.com:65009/crashStat/Stat/recentTrade',
        beforeSend : function(){
          document.getElementById("list").innerHTML='数据加载中...';
        },
        success : function(response){
          document.getElementById("list").innerHTML="";
          var response=JSON.parse(response);
          this.lists = response.obj 
        }.bind(this),
        error : function(){ 
        } 
    })
  }
}
</script>

<style scoped lang="less">
#list{
  margin:8px;
  background-color: #fff;
  padding:10px;
  border-radius:6px;
  li{
    display: block;
    border-bottom:1px dashed #ccc;
    padding:10px;
  }
}
</style>
