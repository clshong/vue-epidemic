// 公共请求接口

const base = {
  host:'http://api.tianapi.com', //天行数据 -- 疫情病毒
  baseURL:'https://rijb.api.storeapi.net',// 挖数据---国内疫情
  Covinfo:'/ncov/index?key=5d1a57c21e1a78aaa161288b5adc442f',//疫情病毒信息
  chinaData:'/api/94/219?format=json&appid=17137&sign=85d3330fb694e055803c74aef1a5495e', //国内疫情
}

export default base