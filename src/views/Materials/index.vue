<template>
  <div class="materials">
    <!-- 顶部logo -->
    <img src="../../assets/images/wuzi.png" alt="" />
    <!-- 物资内容 -->
    <div class="warper">
      <!-- vant库 -->
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title='item.title' :key="item.title" >
           <img :src="item.img" alt="">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import img1 from "../../assets/images/jiujing.png";
import img2 from "../../assets/images/kouzhao.png";
export default {
  name: "",
  data() {
    return {
      active: 0,
      arr: [
        {
          img: img1,
          title: "酒精",
        },
        {
          img: img2,
          title: "口罩",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.materials{
  background: #3343ff;
  img{
    width: 100%;
  }
}
.warper{
  padding:0.2rem;
  background: #3343ff;
}
</style>
