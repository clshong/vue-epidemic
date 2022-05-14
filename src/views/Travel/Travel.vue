<template>
  <div>
    <div class="title">疫情期间出行防疫政策</div>
     <!-- 出发城市 -->
    <van-field
      v-model="goCity"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择出发城市"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  <!-- 到达城市 -->
    <van-field
      v-model="endCity"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择所在地区"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择到达城市"
        :options="options"
        @close="show2 = false"
        @finish="endFinish"
      />
    </van-popup>
    <!-- 查询按钮 -->
    <div class="search"><van-button type="primary" size="large">查询</van-button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      goCity:'',//出发城市
      endCity:'',//到达城市
      cascaderValue: '',
      cascaderValue2: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join('/');
    },
    endFinish({ selectedOptions }) {
      this.show2 = false;
      this.endCity = selectedOptions.map((option) => option.text).join('/');
    },
  },
};
</script>
<style scoped lang="scss">
.title{
  padding: 0.2rem;
}
.search{
  margin: 0.2rem;
}
</style>
