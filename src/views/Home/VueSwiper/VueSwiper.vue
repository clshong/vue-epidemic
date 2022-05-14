<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in arr" :key="index"
        ><img :src="item.image" alt="" width="100%"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播的图片按钮 -->
    <ul class="list">
      <li
        v-for="(item, index) in arr"
        :key="index"
        :class="{ active: index == num }"
        @click="changeSwiper(index)"
      >
        {{ item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  
  data() {
    let that = this
    return {
      num: 0,
      arr: [],
      //swiper 配置内容
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        on: {
          //回调函数，swiper 从一个slide 过渡到例一个slide开始时执行
          slideChangeTransitionStart: function () {
            // console.log(this.activeIndex);
            if(this.activeIndex == that.arr.length+1){
              that.num = 0
            }else{
              that.num = this.activeIndex-1
            } 
          },
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
    this.$api.getSwiperBanner().then( res =>{
      this.arr = res.data.result
    })
  },
  methods: {
    changeSwiper(index) {
      //高亮选中
      this.num = index;
      // swiper 切换
      // loop无缝循环前后会添加一个元素
      this.swiper.slideTo(index + 1, 1000);
    },
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
