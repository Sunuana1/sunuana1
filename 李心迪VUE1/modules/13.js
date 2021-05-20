import Vue from 'vue';

let app = new Vue({
    el:'#app',
    data:{
        num:100,
        num1:99,
        num3:0,
        timer:null
    },
    watch:{
        num(...arg) {
            console.log(arg);
            console.log(this);
        },
        num1(newValue) {
            clearInterval(this.timer);
            newValue *=1;

            this.timer = setInterval(() =>{
                if(this.num2 === newValue){
                    clearInterval(this.timer);
                    return;
                }
                this.num2+= this.num2 > newValue ? -1 : 1;
            },20)
        }
    }
})
console.log(app);