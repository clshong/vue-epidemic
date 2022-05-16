<template>
  <div class="covnumber">
    <div class="content">
      <div class="title">截至{{ CovRisk.modifyTime | time}}全国数据统计</div>
      <ul class="wrap">
        <li>
          <span>较昨日{{CovRisk.currentConfirmedIncr | num}}</span>
          <div class="bold">{{CovRisk.currentConfirmedCount}}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日{{CovRisk.suspectedIncr |num}}</span>
          <div class="bold">{{CovRisk.suspectedCount | sym}}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日{{CovRisk.seriousIncr |num}}</span>
          <div class="bold">{{CovRisk.seriousCount | sym}}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日{{CovRisk.confirmedIncr | num}}</span>
          <div class="bold">{{CovRisk.confirmedCount}}</div>  
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>较昨日{{CovRisk.deadIncr|num}}</span>
          <div class="bold">{{CovRisk.deadCount | sym}}</div>
          <strong>累计死亡数</strong>
        </li>
        <li>
          <span>较昨日{{CovRisk.curedIncr|num}}</span>
          <div class="bold">{{CovRisk.curedCount | sym}}</div>
          <strong>累计治愈数</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import time from '../../../assets/js/time'
export default {
  name: "",
  props:['CovRisk'],
  //定义过滤器
  filters:{  
    // 较昨日比较
    num:function(val){
     val = val > 0 ? '+' + val: val
     return val
    },
    // 数据千位数加逗号
    sym:function(val){
   return val= val && val.toString().replace(/(\d)(?=(\d{3})+$)/g,',');
    },
    time:function(val){
     return time.time(val)
    }
  }
};
</script>
<style scoped lang="scss">
.covnumber {
  background: #f5f5f5;
  padding-top: 0.2rem;
  .content {
    background: #fff;
    padding:0.2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title{
      color: #666;
      margin-bottom: 0.2rem;
    }
    .wrap{
      display: flex;
      flex-wrap: wrap;
      padding-top: 0.1rem;
      box-shadow: 0 0 3px 4px rgba(194, 190, 190, 0.2);
      border-radius: 0.1rem;
      li{
        width: 33.333333%;
        text-align: center;
        margin-bottom: 0.2rem;
        color: #666;
        strong{
          color: #333;
        }
      }
      li:nth-child(1) .bold{
        color:#ff0000;
      }
      li:nth-child(2) .bold{
        color:#5fe621;
      }
      li:nth-child(3) .bold{
        color:#d5eb13;
      }
      li:nth-child(4) .bold{
        color:#f34c4c;
      }
      li:nth-child(5) .bold{
        color:#2798ac;
      }
      li:nth-child(6) .bold{
        color:#8510f1;
      }
      .bold{
        font-weight: bold;
      }
    }
  }
}
</style>
