import Vue from 'vue';
import './06.scss';

let app = new Vue({
    el:'#app',
    data:{
        title:'<b>123456</b>'
    }
})

setTimeout(() => {
    app.title = '1234';
},2000)