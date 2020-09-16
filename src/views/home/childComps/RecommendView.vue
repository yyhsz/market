<template>
    <div id="recommend">
        <div v-for="item in recommends" :key="item.link">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    #recommend{
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding:0 8px 26px 8px;
        border-bottom: 10px solid #eee;
    }
    #recommend img{
        width: 70px;
        padding: 10px 0 8px;
    }
</style>