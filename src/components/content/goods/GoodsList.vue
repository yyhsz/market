<template>
<div class="goods-list">
    <goods-item v-bind="$attrs" v-for="item in goodsList" :key="item.index" :goodsItem="item"></goods-item>
</div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
    props: {
        goodsList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        GoodsItem
    },

}
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
