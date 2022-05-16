<template>
  <div class="select-city">
    <h2 class="title">城市选择</h2>
    <van-index-bar :index-list="indexList">
      <template v-for="(item, name) in cityList">
        <van-index-anchor :index="name" :key="name" />
        <van-cell
          :title="ele.name"
          v-for="ele in item"
          :key="ele.id"
          @click="toHome"
        />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      cityList: [],
      indexList: [],
      city:''
    };
  },
  async created() {
    let res = await this.$api.getSelectCity().then();
    this.cityList = res.data.result.citylist;
    this.indexList = Object.keys(this.cityList);
  },
  methods:{
    toHome(event){
      //本地存储
      // localStorage.setItem('city',event.target.innerText)
      // eventBus
      this.$bus.$emit('city',event.target.innerText)
      this.city = event.target.innerText
      // 返回首页
       // this.$router.push('/')
       //返回
       this.$router.go(-1)
    }
  },
  destroyed(){
    this.$bus.$emit('city',this.city)
  }
};
</script>
<style scoped lang="scss">
.select-city {
  background: #f5f5f5;
  .title {
    padding: 0.2rem;
  }
}
</style>
