<template>
<div id="category">
    <nav-bar class="nav-bar">
        <template #center>
            <span>商品分类</span>
        </template>
    </nav-bar>
    <div class="layout">
        <Scroll class="aside" ref="scroll1">
            <div class="aside-item" v-for="(item,index) in categories" :key="index" @click="itemClick(index)" :class="{active:index === currentIndex}">
                <span>{{item.title}}</span>
            </div>
        </Scroll>
        <Scroll class="wrapper" ref="scroll2">
            <div class="content">
                <div class="content-item" v-for="(item,index) in subCategory" :key="index">
                    <img :src="item.image" @load="imgLoad" alt />
                </div>
            </div>
            <tab-control :titles="['流行','新品','精选']" @itemClick="changeDetail"></tab-control>
            <goods-list @itemImgLoad="itemImgLoad" :goodsList="categoryDetail[detailType]" :cateGoodsItem="true"></goods-list>
        </Scroll>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {
    getCategory,
    getSubcategory,
    getCategoryDetail,
} from "@/network/category";
import {
    debounce
} from "@/common/debounce";
export default {
    data() {
        return {
            currentIndex: 0,
            tabControlIndex: 0,
            refresh: null,
            categories: [],
            categoryDetail: {
                new: [],
                pop: [],
                sell: [],
            },
            subCategory: [],
            titles: ['pop', 'new', 'sell']
        };
    },
    components: {
        NavBar,
        Scroll,
        TabControl,
        GoodsList,
    },
    computed: {
        detailType() {
            return this.titles[this.tabControlIndex]
        }
    },
    created() {
        getCategory()
            .then((value) => {
                this.categories = value.data.data.category.list;
                return getSubcategory(this.categories[0].maitKey);
            })
            .then((value) => {
                this.subCategory = value.data.data.list;
                this._getCategoryDetail(this.categories[0].miniWallkey);
            });
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll2.refresh);
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            const mailKey = this.categories[this.currentIndex].maitKey;
            getSubcategory(mailKey).then((value) => {
                this.subCategory = value.data.data.list;
                this._getCategoryDetail(this.categories[this.currentIndex].miniWallkey);

            });
        },
        changeDetail(index) {
            this.tabControlIndex = index
        },
        imgLoad() {
            this.refresh();
        },
        _getCategoryDetail(miniWallkey) {
            this.titles.forEach((ele, index) => {
                getCategoryDetail(miniWallkey, ele).then((value) => {
                    this.categoryDetail[ele] = value.data;
                });
            });
        },
        itemImgLoad() {
            this.refresh();
        }
    },
};
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
}

.layout {
    display: flex;
}

.aside {
    width: 70px;
    background: #f6f6f6;
    position: relative;
    top: 44px;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    flex: 0 0 70px;
}

.aside .aside-item {
    font-size: 12px;
    height: 45px;
    line-height: 45px;
    text-align: center;
}

.aside .aside-item.active {
    color: #ee5470;
    font-weight: 600;
    background: white;
    border-left: 3px solid #ee5470;
}

.wrapper {
    position: relative;
    top: 44px;
    right: 0;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
}

.content {
    display: flex;
    flex-wrap: wrap;
}

.content-item {
    padding: 6px;
}

.content-item img {
    width: 70px;
}
</style>
