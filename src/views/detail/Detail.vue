<template>
<div id="detail">
    <detail-nav-bar class="detail-nav-bar" ref="navbar" @itemClick="itemClick" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
        <detail-swiper :swiper-img="swiperImg"></detail-swiper>
        <detail-goods-info :goods-info="goodsInfo" />
        <detail-shop :shop="shop" />
        <detail-info :detail-info="detailInfo" @detailImgLoad="detailImgLoad" />
        <detail-params-info ref="params" :param-info="paramInfo" />
        <detail-comment ref="comment" :comment="commentInfo" />
        <goods-list ref="recommend" class="goods-list" :goodsList="recommendInfo" />
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
</div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailShop from "./childComps/DetailShop";
import Scroll from "@/components/common/scroll/Scroll";
import DetailInfo from "./childComps/DetailInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailComment from "./childComps/DetailComment";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";

import {
    itemImgListenerMixin,
    backTopMixin
} from "@/common/mixin";
import {
    debounce
} from "@/common/debounce";
import {
    mapActions
} from "vuex"

import {
    getDetail,
    GoodsInfo,
    Shop,
    GoodsParam,
    GoodsDetailInfo,
    getRecommend,
} from "@/network/detail";

export default {
    name: "detail",
    data() {
        return {
            iid: 0,
            swiperImg: [],
            goodsInfo: {},
            shop: {},
            paramInfo: {},
            detailInfo: {},
            commentInfo: {},
            recommendInfo: [],
            refresh: null,
            itemOffsetTop: [],
            getItemOffsetTop: null,
        };
    },
    mixins: [itemImgListenerMixin, backTopMixin],
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShop,
        Scroll,
        DetailInfo,
        DetailParamsInfo,
        DetailComment,
        GoodsList,
        DetailBottomBar,
    },
    methods: {
        ...mapActions(['addCart']),
        detailImgLoad() {
            this.refresh();
            this.getItemOffsetTop();
        },
        itemClick(index) {
            // console.log(1, -this.itemOffsetTop[index]);
            this.$refs.scroll.scrollTo(0, -this.itemOffsetTop[index], 200);
            console.log(this.itemOffsetTop);
        },
        contentScroll(position) {
            //控制返回顶部按钮的显示
            this.showBackTop = -position.y > 1000;
            //
            for (let i = 0; i < this.itemOffsetTop.length - 1; i++) {
                if (
                    this.$refs.navbar.currentIndex !== i &&
                    this.itemOffsetTop[i] <= -position.y &&
                    -position.y < this.itemOffsetTop[i + 1]
                ) {
                    this.$refs.navbar.currentIndex = i;
                }
            }
        },
        addToCart() {
            //获取购物车所需要的信息
            const product = {};
            product.image = this.swiperImg[0];
            product.title = this.goodsInfo.title;
            product.desc = this.goodsInfo.desc;
            product.price = this.goodsInfo.newPrice;
            product.iid = this.iid;
            product.price = this.goodsInfo.nowPrice;
            product.count = 1;
            product.checked = false
            //提交到Vuex,弹出toast
            this.addCart(product).then(value => {
                this.$toast.show(value)
            })
        },
    },
    created() {
        this.iid = this.$route.params.iid;
        getDetail(this.iid).then((value) => {
            const res = value.data.result;
            this.swiperImg = res.itemInfo.topImages;
            this.goodsInfo = new GoodsInfo(
                res.itemInfo,
                res.columns,
                res.shopInfo.services
            );
            //店铺信息获取
            this.shop = new Shop(res.shopInfo);
            //商品详情（描述及图片）
            this.detailInfo = new GoodsDetailInfo(res.detailInfo);
            //商品参数信息获取
            this.paramInfo = new GoodsParam(res.itemParams.info, res.itemParams.rule);
            //商品评论信息的获取
            if (res.rate.cRate !== 0) {
                //判断是否有评论
                this.commentInfo = res.rate.list[0];
            }
        });
        //详情页推荐信息的获取
        getRecommend().then((value) => {
            this.recommendInfo = value.data.data.list;
        });
        //
        this.getItemOffsetTop = debounce(() => {
            this.itemOffsetTop.push(0);
            this.itemOffsetTop.push(this.$refs.params.$el.offsetTop - 44);
            this.itemOffsetTop.push(this.$refs.comment.$el.offsetTop - 50);
            this.itemOffsetTop.push(this.$refs.recommend.$el.offsetTop - 50);
            this.itemOffsetTop.push(Number.MAX_VALUE);
            console.log(this.$refs.params.$el.offsetTop);
        }, 500);
    },
    mounted() {
        // // 对this.$refs.scroll.refresh进行防抖操作
        // const refresh = debounce(this.$refs.scroll.refresh);
        // //
        // this.itemImgListener = () => {
        //   refresh();
        // };
        // //监听goodsItem中图片加载完成
        // this.$bus.$on("ItemImgLoad", this.itemImgListener);

        //对刷新函数进行防抖处理
        this.refresh = debounce(this.$refs.scroll.refresh, 100);
    },
    destroyed() {
        this.$bus.$off("ItemImgLoad", this.itemImgListener);
    },
};
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 4;
    background: rgb(255, 255, 255);
}

.detail-nav-bar {
    position: relative;
    z-index: 5;
    background: #fff;
}

.content {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
}

.goods-list {
    margin-top: 10px;
}
</style>
