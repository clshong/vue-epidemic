// ** 所有请求的接口方法

//请求的axios
import axios from "axios";
// 接口地址
// import request from "./request"
//请求方法
const api = {
  //病毒信息获取
  getCovinfo() {
    // return axios.get(request.host + request.Covinfo)
    return axios.get('http://api.tianapi.com/txapi/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3')
  },
}

export default api