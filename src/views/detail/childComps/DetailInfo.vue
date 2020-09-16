<template>
    <div id="detail-info" v-if="Object.keys(detailInfo).length !== 0">
        <p>{{detailInfo.desc}}</p>
        <div class="detail-img" v-for="img in detailInfo.img"  :key="img">
            <img :src="img" @load="detailImgLoad" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        detailImgLoad(){
            this.$emit('detailImgLoad')
        }
    }
}
</script>
<style scoped>
    #detail-info p{
        font-size: 14px;
        color: black;
        margin:12px 
    }
    #detail-info img{
        width:100vw;
    }
</style>