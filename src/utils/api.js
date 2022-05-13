// ** 所有请求的接口方法

//请求的axios
import axios from "axios";
// 接口地址
import request from "./request"
// 引入md5
import md5 from "md5-js";
//请求方法
const api = {
  //病毒信息获取
  getCovinfo() {
    return axios.get(request.host + request.Covinfo)
  },
  //获取国内疫情
  getChinaData() {
    return axios.get(request.baseURL + request.chinaData) 
  },
  // 世界疫情
  getWorldData() {
    return axios.get(request.baseURL+ request.worldData)
  },
  //城市数据接口
  getCity(city_name){
    
    // 步骤：1、 npm i md5-js -S  2、引入对应模块 3、使用加密处理
    let rules = md5('appid17137city_name'+city_name+'formatjsonf0246a7eec38598a294553c42c7ec937')
    let canshu = 'format=json&appid=17137&city_name='+city_name+'&sign='+rules
    return axios.get(request.baseURL+request.cityData+canshu)
  }
}

export default api