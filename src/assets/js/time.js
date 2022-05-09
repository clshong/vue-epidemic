// 时间模块
const time = {
  time() {
    let date = new Date();
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' '< 10 ? '0'+date.getDate(): date.getDate()  ;
    let h = date.getHours() + ':';
    let m = date.getMinutes();
    let str = Y+M+D+' '+h+m
    return str
  },
}

export default time