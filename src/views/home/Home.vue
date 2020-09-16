<template>
<div id="home">
    <nav-bar class="nav-bar">
        <template #center>
            <span>购物街</span>
        </template>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @itemClick="tabClick" v-show="tabFixed" ref="tabControl1" />
    <scroll class="content" ref="scroll" :probeType="3" @backTopShow="contentScroll" @pullUpLoadMore="LoadMore" :pullUpLoad="true">
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control :titles="['流行','新款','精选']" @itemClick="tabClick" ref="tabControl2" :class="{fixed:tabFixed}" />
        <goods-list :goodsList="goods[currentGoodsType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {
    getHomeMultidata,
    getHomeGoods
} from "@/network/home";
import {
    itemImgListenerMixin,
    backTopMixin
} from '@/common/mixin';

export default {
    name: "Home",
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: {
                    page: 1,
                    list: []
                },
                new: {
                    page: 1,
                    list: []
                },
                sell: {
                    page: 1,
                    list: []
                }
            },
            currentGoodsType: "pop",
            tabOffset: 0,
            tabFixed: false,
            scrollY: 0,
        };
    },
    mixins: [itemImgListenerMixin, backTopMixin],
    components: {
        NavBar,
        Scroll,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList
    },
    created() {
        // 首页轮播图及推荐数据
        this.getHomeMultidata();
        // 首页商品数据
        this.getHomeGoods("pop");
        this.getHomeGoods("new");
        this.getHomeGoods("sell");
    },
    mounted() {
        //以下内容已放到mixin
        // //对this.$refs.scroll.refresh进行防抖操作
        // const refresh = debounce(this.$refs.scroll.refresh)
        // //
        // this.itemImgListener =  ()=>{refresh()}
        // //监听goodsItem中图片加载完成
        // this.$bus.$on('ItemImgLoad',this.itemImgListener)      
    },
    activated() {
        this.$refs.scroll.refresh()
        //refresh函数一定要在最前面，否则会出现自动返回顶部的bug，原因不明
        this.$refs.scroll.scrollTo(0, this.scrollY, 0)
        // this.$refs.scroll.refresh()
        this.$bus.$on("ItemImgLoad", this.itemImgListener);
        //仍然有个bug，首页下拉到一定地方就会卡住，可能是better-scroll自己的问题。暂时没法解决
    },
    deactivated() {
        this.scrollY = this.$refs.scroll.scroll.y;
        //取消对GoodsItem.vue图片的监听
        this.$bus.$off('ItemImgLoad', this.itemImgListener)
    },
    methods: {
        getHomeMultidata() {
            getHomeMultidata().then(value => {
                this.banners = value.data.data.banner.list;
                this.recommends = value.data.data.recommend.list;
            });
        },
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentGoodsType = "pop";
                    break;
                case 1:
                    this.currentGoodsType = "new";
                    break;
                case 2:
                    this.currentGoodsType = "sell";
            }
            this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
        },
        getHomeGoods(type) {
            getHomeGoods(type, this.goods[type].page).then(value => {
                this.goods[type].list.push(...value.data.data.list);
                this.goods[type].page += 1;
                this.$refs.scroll.finishPullUp()
            })
            return Promise.resolve(1)
        },
        contentScroll(y) {
            //判断是否要显示返回顶部按钮
            this.showBackTop = -y > 1000;
            this.tabFixed = -y > this.tabOffset - 44
        },
        LoadMore() {
            this.getHomeGoods(this.currentGoodsType)
        },
        swiperImgLoad() {
            this.tabOffset = this.$refs.tabControl2.$el.offsetTop
        }
    }
};
</script>

<style scoped>
#home .nav-bar {
    background-color: var(--color-tint);
    color: white;
    /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3; */
}

#home .content {
    /* position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px; */
    height: calc(100vh - 93px);
    overflow: hidden;
}

#home .tab-control {}

#home .fixed {
    position: fixed;
    top: 44px;
    z-index: 3;
}
</style>
