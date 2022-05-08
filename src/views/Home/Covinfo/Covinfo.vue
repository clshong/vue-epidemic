<template>
  <div class="covinfo">
    <div class="covinfo-title">
    <p>疫情热点</p>
      <span><a href="#">查看更多&gt;</a></span>
    </div>
    <ul>
      <li v-for="item in covLsit" :key="item.id" class="covlist">
        <span>最新</span> 
        {{ item.title }}
        <img src="../../../assets/images/right.png" alt="" />
      </li>
    </ul>
  <div class="covinfo-title">
      <p>疫情动态</p>
      <span><a href="#">查看更多&gt;</a></span>
    </div>
    <ul> 
      <!-- 默认单行显示 点击显示出来 -->
      <li v-for="item in covLsit" :key="item.id" class="covlist" :class="id===item.id ? 'active' : '' " @click="showCovlist(item.id)">
        <span>最新</span> 
        {{ item.summary}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["covLsit"],
  data() {
    return {
      isActive:false,
      id:0
    };
  },
  methods:{
    showCovlist(id){
        if(this.id === id){
          this.id=-1
        }else{
          this.id=id
        }
    }

  }
};
</script>
<style scoped lang="scss">
.covinfo {
  margin-bottom: 0.1rem;
  &-title {
    border-left: 0.1rem solid rgb(23, 43, 226);
    margin-bottom: 0.2rem;
    margin: 0.2rem;
    display: flex;
    justify-content: space-between;
    p{
      padding-left: 0.1rem;
    }
    span {
      a {
        text-decoration: none;
        font-weight: normal;
        color: #4169e2;
        font-size: 0.26rem;
      }
    }
  }
  .covlist {
    line-height: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.active{
    height: 3rem !important;
    white-space: normal !important; 
    overflow: auto !important;
    text-overflow: clip !important;
    }
    span {
      background: #ff5555;
      color: #fff;
      font-size: 0.26rem;
      padding: 0.02rem 0.06rem;
      margin-right: 0.1rem;
      border-radius: 0.06rem;
    }
    img {
      float: right;
      width: 0.24rem;
      padding-right: 0.2rem;
    }
  }
}
</style>
