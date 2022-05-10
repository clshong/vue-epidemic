<template>
  <div class="home">
    <!-- 1.顶部图片 -->
    <img src="../../assets/images/1.jpg" alt="" class="top-pic" />
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
        <img src="../../assets/images/4.png" alt="" />
        <div>出现政策</div>
      </div>
    </div>
    <!-- 4.数据统计 -->
    <cov-number :CovRisk="CovRisk"></cov-number>
    <!-- 5.中国疫情地图 -->
     <china-map></china-map>
  </div>
</template>

<script>
import Covinfo from "./Covinfo/Covinfo";
import CovNumber from "./Covinfo/CovNumber";
import ChinaMap from "./MapEcharts/ChinaMap.vue";
import api from "../../utils/api";
export default {
  name: "Home",
  data() {
    return {
      covLsit: [], //疫情动态
      CovRisk: {}, //全国数据统计
    };
  },
  components: {
    Covinfo,
    CovNumber,
    ChinaMap
  },
  async created() {
    let res = await api.getCovinfo().then();
    let data = res.data.newslist[0];
    // 1.疫情动态和热点
    this.covLsit = data.news;
    // 2. 全国疫情的数据
    // currentConfirmedCount 现存确诊
    // confirmedCount  累计确诊
    // suspectedCount  累计境外输入人数
    // curedCount    累计治愈人数
    // deadCount   累计死亡人数
    // seriousCount  现存无症状人数
    // suspectedIncr  新增境外输入人数
    // currentConfirmedIncr   相比昨日现存确诊人数
    // confirmedIncr  相比昨日累计确诊人数
    // curedIncr   相比昨日新增治愈人数
    // deadIncr  相比昨日新增死亡人数
    // seriousIncr 相比昨日现存无症状人数
    // modifyTime 时间
    this.CovRisk = {
      currentConfirmedCount: data.desc.currentConfirmedCount,
      confirmedCount: data.desc.confirmedCount,
      suspectedCount: data.desc.suspectedCount,
      curedCount: data.desc.curedCount,
      deadCount: data.desc.deadCount,
      seriousCount: data.desc.seriousCount,
      suspectedIncr: data.desc.suspectedIncr,
      currentConfirmedIncr: data.desc.currentConfirmedIncr,
      confirmedIncr: data.desc.confirmedIncr,
      curedIncr: data.desc.curedIncr,
      deadIncr: data.desc.deadIncr,
      seriousIncr: data.desc.seriousIncr,
      modifyTime: data.desc.modifyTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .top-pic {
    width: 100%;
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
