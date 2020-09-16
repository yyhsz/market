<template>
<div class="goods-item" @click="itemClick" :class="{[`cate-goods-item`]:$attrs.cateGoodsItem}">
    <img v-lazy="showImg" @load="imgLoad" />
    <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{"￥"+goodsItem.price}}</span>
        <span class="collection">{{goodsItem.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    computed: {
        showImg() {
            return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        imgLoad() {
            // 第一种处理方式
            // if(this.$route.path === '/home'){
            //   this.$bus.$emit('homeItemimgLoad')
            // }else if(this.$route.path === '/detail'){
            //   this.$bus.$emit('detailItemimgLoad')
            // }
            this.$bus.$emit('itemImgLoad')
        },
        itemClick() {
            this.$router.push('/detail/' + this.goodsItem.iid)
        },
        mounted() {
            console.log(this.$attrs);
        },

    }
};
</script>

<style scoped>
.goods-item {
    width: 46vw;
    font-size: 14px;
}

.goods-item.cate-goods-item {
    width: 34vw;
    font-size: 12px;
}

.goods-item img {
    width: 100%;
    padding-bottom: 3px;
}

.goods-info {
    text-align: center;
    padding-bottom: 3px;

}

.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 3px;

}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 22px;
}

.goods-info .collection {
    position: relative;
}

.goods-info .collection::before {
    content: '';
    position: absolute;
    left: -14px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
