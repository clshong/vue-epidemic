<template>
  <div class="chinamap">
    <div class="title">国内疫情地图</div>
    <!-- 地图容器 -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现存确诊">
        <div id="Nomain" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main" style="width: 7.5rem; height: 7rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import api from "@/utils/api";
export default {
  name: "",
  data() {
    return {
      active: 0,
      arr:[]
    };
  },
   mounted() {
  api.getChinaData().then( res =>{
    let Citys = res.data.retdata;
    if(!Citys){
         this.$myChart.chinaMap("nowMain", []);
          return;
      }
    let Arr = []; //累计确诊
    let NoArr = []; // 现存确诊
    for (let i = 0; i < Citys.length - 1; i++) {
      let Obj = {};
      Obj.name = Citys[i].xArea; //地区
      Obj.value = Citys[i].confirm; //累计确诊人数 curConfirm 现在确诊人数
      let Now = {};
      Now.name = Citys[i].xArea;
      Now.value = Citys[i].curConfirm;
      Arr.push(Obj);
      NoArr.push(Now);
    }
    this.arr = Arr
    // vue nextTick DOM创建完成后进行加载
    this.$nextTick(() =>{
    this.$myChart.chinaMap("Nomain",NoArr); //现存的地图
    })
  });
  },
  methods: {
    change(title){
      if(title === 1){
        this.$nextTick(()=>{
          this.$myChart.chinaMap("main", this.arr); //累计的地图
        })
      }
    }
  },
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
#main,#nowMain{
  background: #f5f5f5;
}
</style>
