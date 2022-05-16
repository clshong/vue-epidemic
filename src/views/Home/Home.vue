<template>
  <div class="home">
    <!-- 1.顶部图片 -->
    <div class="logo">
    <img src="../../assets/images/1.jpg" alt="" class="top-pic" />
    <router-link class="select" to="/selectcity">{{city}}=</router-link>
    </div>
    <!-- 2.病毒信息 -->
    <covinfo :covLsit="covLsit"></covinfo>
    <!-- 3.疫情小导航 -->
    <div class="list">
      <div class="list-item">
        <router-link to="/area">
        <img src="../../assets/images/1.png" alt="" />
        <div>风险地区</div>
        </router-link>
      </div>
      <div class="list-item">
        <router-link to="/nucleic">
          <img src="../../assets/images/2.png" alt="" />
          <div>核酸检测</div>
        </router-link>
      </div>
      <div class="list-item">
        <router-link to="/materials">
          <img src="../../assets/images/3.png" alt="" />
        <div>防疫物资</div>
        </router-link>
        
      </div>
      <div class="list-item">
        <router-link to="/travel">
        <img src="../../assets/images/4.png" alt="" />
        <div>出现政策</div>
        </router-link>
      </div>
    </div>
    <!-- 4.数据统计 -->
    <cov-number :CovRisk="CovRisk"></cov-number>
    <!-- 5.中国疫情地图 -->
     <china-map></china-map>
     <!-- 6.世界疫情地图 -->
     <world-map></world-map>
     <!-- 7.轮播图 -->
     <VueSwiper></VueSwiper>
  </div>
</template>

<script>
import Covinfo from "./Covinfo/Covinfo";
import CovNumber from "./Covinfo/CovNumber";
import ChinaMap from "./MapEcharts/ChinaMap.vue";
import WorldMap from "./MapEcharts/WorldMap.vue";
import VueSwiper from "./VueSwiper/VueSwiper";
export default {
  name: "Home",
  data() {
    return {
      covLsit: [], //疫情动态
      CovRisk: {}, //全国数据统计
      city:'',
    };
  },
  components: {
    Covinfo,
    CovNumber,
    ChinaMap,
    WorldMap,
    VueSwiper
},
  async created() {
    // 读取本地存储
   let city = localStorage.getItem('city')
    if(city){
      this.city = city + '疫情'
    }
    let res = await this.$api.getCovinfo().then();
    let data = res.data.newslist[0];
    // 1.疫情动态和热点
    this.covLsit = data.news;
    // 2. 全国疫情的数据
    this.CovRisk = {
      currentConfirmedCount: data.desc.currentConfirmedCount,// currentConfirmedCount 现存确诊
      confirmedCount: data.desc.confirmedCount,  // confirmedCount  累计确诊
      suspectedCount: data.desc.suspectedCount,// suspectedCount  累计境外输入人数
      curedCount: data.desc.curedCount,// curedCount    累计治愈人数
      deadCount: data.desc.deadCount,// deadCount   累计死亡人数
      seriousCount: data.desc.seriousCount, // seriousCount  现存无症状人数
      suspectedIncr: data.desc.suspectedIncr, // suspectedIncr  新增境外输入人数
      currentConfirmedIncr: data.desc.currentConfirmedIncr,// currentConfirmedIncr   相比昨日现存确诊人数
      confirmedIncr: data.desc.confirmedIncr,// confirmedIncr  相比昨日累计确诊人数
      curedIncr: data.desc.curedIncr, // curedIncr   相比昨日新增治愈人数
      deadIncr: data.desc.deadIncr,// deadIncr  相比昨日新增死亡人数
      seriousIncr: data.desc.seriousIncr, // seriousIncr 相比昨日现存无症状人数
      modifyTime: data.desc.modifyTime, // modifyTime 时间
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .logo{position: relative;
  .top-pic {
    width: 100%;
  }
  .select {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
  }
  .list {
    margin-top: 0.2rem;
    display: flex;
    text-align: center;
    color: #666;

    &-item {
      flex: 1;

      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }
}
</style>
