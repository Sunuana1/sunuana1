//引入vue
import Vue from 'vue';
//构建应用
let app = new Vue({
    el:'#app',
    data:{
        title:'12345',
        books:['1234234234'],
        person:{
            name:'123',
            sex:'nv'
        },
        qwe:''
    },
})
app.$set(app.books,1,'123123');
app.$set(app.person,'age',33);
console.log(app);