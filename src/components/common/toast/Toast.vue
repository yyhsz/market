<template>
    <div class="toast" v-show="activated">{{message}}</div>
</template>
<script>
export default {
    name:'Toast',
    data(){
        return{
            message:'',
            activated:false
        }
    },
    methods:{
        show(message,duration = 2000){
            this.activated = true
            this.message = message
            setTimeout(()=>{
                this.activated = false
            },duration)
        }
    }
}
</script>
<style scoped>
.toast{
    position: fixed;top: 50%;left: 50%;z-index: 5;
    transform: translate(-50%,-50%);transition:all ease-in-out(0.4);
    border-radius: 4px;
    padding: 8px 10px;
    color: white;background-color: rgba(0,0,0,.6);
    font-size: 18px;
    white-space: nowrap;
}
</style>