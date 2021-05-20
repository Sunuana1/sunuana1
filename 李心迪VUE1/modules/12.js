import Vue from 'vue';

let app = new Vue({
    el:'#app',
    data:{
        sex:'nv',
        hobby:{
            a:'123',
            b:'234',
            c:'456'
        },
        checks:{
            a:'123',
            b:'234',
            c:'345'
        },
        nochecks:{
            a:'123',
            b:'234',
            c:'345'
        }
    },
})
console.log(app);