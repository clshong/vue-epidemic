<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img src="../../../assets/images/logo.png" alt=""
      /></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播的图片按钮 -->
    <ul class="list">
      <li
        v-for="(item, index) in arr"
        :key="index"
        :class="{ active: index == 0 }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      //swiper 配置内容
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
    };
  },
  computed: {
    //获取swiper的实例
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped lang="scss">
.list {
  display: flex;
  li {
    display: flex;
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    line-height: 0.32rem;
    margin: 0.1rem;
    background: #eee;
    color: #666;
    text-align: center;
    align-items: center;
  }
  .active {
    background: #5074ad;
    color: #fff;
  }
}
</style>
