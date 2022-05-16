// 公共请求接口

const base = {
  host:'http://api.tianapi.com', //天行数据 -- 疫情病毒
  baseURL:'https://rijb.api.storeapi.net',// 挖数据---国内疫情
  Covinfo:'/ncov/index?key=5d1a57c21e1a78aaa161288b5adc442f',//疫情病毒信息
  chinaData:'/api/94/219?format=json&appid=17137&sign=85d3330fb694e055803c74aef1a5495e', //国内疫情
  worldData:'/api/94/220?format=json&appid=17137&sign=85d3330fb694e055803c74aef1a5495e',//世界疫情
  cityData:'/api/94/221?',
  swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',
  travel:'/api/springTravel/citys?key=ea3295121216b176e1a6b8af7fcd3dcf',
  travSearch:'/api/springTravel/query?key=ea3295121216b176e1a6b8af7fcd3dcf', //疫情情况
  Select:'/foo/aj/getcitycode',
}

export default base