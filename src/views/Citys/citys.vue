<template>
  <div >
    <h2>{{cityname}}城市地图</h2>
    <div id="main" style="width: 7.5rem; height: 9rem"></div>
  </div>
</template>
<script>
export default {
  name: '',
  props:['cityname'],
  mounted(){
    this.$api.getCity(this.cityname).then( res =>{
      let arr = res.data.retdata.subList
      let cityData =[]
      arr.forEach(ele=> {
        let Obj = {}
        Obj.name = ele.city;
        Obj.value= ele.confirm;//累计确诊
        cityData.push(Obj)
      });
    this.$myChart.cityMap('main',this.cityname,cityData)
    })
  },


  
}
</script>
<style scoped lang="scss"></style>
