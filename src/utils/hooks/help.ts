/**
 * 请求网页首页的方法
 */
fetch('/').then(resp => resp.text()).then(resp => console.log(resp));

