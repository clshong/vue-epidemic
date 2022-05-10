// ** 所有请求的接口方法

//请求的axios
import axios from "axios";
// 接口地址
import request from "./request"
//请求方法
const api = {
  //病毒信息获取
  getCovinfo() {
    return axios.get(request.host + request.Covinfo)
  },
  //获取国内疫情
  getChinaData() {
    return axios.get(request.baseURL + request.chinaData)
  }
}

export default api