import Vue from 'vue';

//全局过滤器：添加自定义的插值过滤器
Vue.filter('toUpper',(str) => {
    str = String(str);
    return str.toUpperCase();
})

let app = new Vue({
    el:'#app',
    data:{
        title:'12345',
        msg:'123'
    },
})

console.log(app);