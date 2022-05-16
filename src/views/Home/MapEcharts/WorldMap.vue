<template>
  <div class="chinamap">
    <div class="title">世界疫情地图</div>
    <!-- 地图容器 -->
    <div id="main" style="width: 6.5rem; height: 7rem"></div>
  </div>
</template>
<script>
export default {
 mounted(){
   this.$api.getWorldData().then(res =>{
    let World = res.data.retdata
    if(!World){
         this.$myChart.worldMap("main", []);
          return;
      }
      let Arr = [];
      for (let i = 0; i < World.length - 1; i++) {
      let Obj = {};
      Obj.name = World[i].xArea; //地区
      Obj.value = World[i].confirm; //累计确诊人数 curConfirm 现在确诊人数
      Arr.push(Obj);
    }
    this.$myChart.worldMap('main',Arr)
  })
}
};
</script>
<style scoped lang="scss">
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
    border-top: 1px solid #eee;
}
.title::before {
    content: "";
    border-left: 0.1rem solid rgb(9, 60, 202);
    font-size: 0.26rem;
    margin-right: 0.1rem;
  }
#main{
  background: #f5f5f5;
}
</style>
