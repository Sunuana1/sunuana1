import Vue from 'vue';
//全局过滤器：添加自定义的插值过滤器
Vue.filter('toUpper',(str) =>{
    str = String(str);
    return str.toUpperCase();
})
let app = new Vue({
    el:'#app',
    data:{
        title:'12345'
    },
    filters:{
        toArray(str,split) {
            str = String(str);
            return str.split(split);
        }
    },
    //计算属性数据
    computed:{
        msg() {
            console.log(1234);
            return this.title.toUpperCase().split('o');
        }
    }
})
console.log(app);