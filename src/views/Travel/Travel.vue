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
    <div class="search">
      <van-button type="primary" size="large" @click="travelSearch"
        >查询</van-button
      >
    </div>
    <!-- 政策查询结果 -->
    <div class="content" v-if="content">
      <div>出发城市：
        <p>进{{from_info.city_name}}政策：{{from_info.low_in_desc}}</p>
        <p>出{{from_info.city_name}}政策：{{from_info.out_desc}}</p>
      </div>
      <div>到达城市：
        <p>进{{to_info.city_name}}政策：{{to_info.low_in_desc}}</p>
        <p>出{{to_info.city_name}}政策：{{to_info.out_desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      goCity: "", //出发城市
      endCity: "", //到达城市
      from: "", //出发城市id
      to: "", //到达城市id
      from_info:'',
      to_info:'',
      content:false,
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
      ],
    };
  },
  created() {
    this.$api.getTravel().then((res) => {
      let result = res.data.result;
      // 数据处理
      let arr = [];
      result.forEach((item) => {
        let Obj = {};
        Obj.text = item.province; // 省份
        Obj.value = item.province_id; //省份的标识id
        Obj.children = []; //二级区域
        item.citys.forEach((ele) => {
          let childObj = {};
          childObj.text = ele.city;
          childObj.value = ele.city_id;
          Obj.children.push(childObj);
        });
        arr.push(Obj);
      });
      this.options = arr;
    });
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions,}) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join("/");
    },
    endFinish({ value, selectedOptions,}) {
      this.to = value;
      this.show2 = false;
      this.endCity = selectedOptions.map((option) => option.text).join("/");
    },
    travelSearch() {
      this.$api.getTravelSearch({
        from:this.from,
        to:this.to
      }).then( res =>{
        this.from_info = res.data.result.from_info;
        this.to_info = res.data.result.to_info;
      })
      this.content=true
    },
  },
};
</script>
<style scoped lang="scss">
.title {
  padding: 0.2rem;
  text-align: center;
  font-size: 0.5rem;
}
.search {
  margin: 0.2rem;
}
.content{
  padding: 0.2rem;
}
</style>
