<template>
  <div class="home">
    <!-- 顶部图片 -->
    <img src="../../assets/images/1.jpg" alt="" class="top-pic">
    <!-- 病毒信息 -->
    <covinfo :covLsit="covLsit"></covinfo>
  </div>
</template>

<script>
import Covinfo from './Covinfo/Covinfo'
import api from '../../utils/api'
export default {
  name: 'Home',
  data() {
    return {
      covLsit:[],
    };
  },
  components:{
    Covinfo,
  },
  async created (){
   let res = await api.getCovinfo().then()
   console.log( res.data.newslist[0].news)
   let data = res.data.newslist[0].news
   this.covLsit =  data
  }
}
</script>

<style lang="scss" scoped>
.home{
.top-pic{
  width: 100%;
}
}
</style>
