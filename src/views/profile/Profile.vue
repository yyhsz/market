<template>
<div class="profile">
    <Banner />
    <Card>
        <template #content>
            <span>我的订单</span>
        </template>
        <template #desc>
            <span>查看全部订单</span>
        </template>
        <template #cardItem>
            <card-item :src="require('@/assets/img/profile/fukuan.png')">
                <span>待付款</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/fahuo.png')">
                <span>待发货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhuo.png')">
                <span>待收货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/pingjia.png')">
                <span>评价</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhou.png')">
                <span>退款/售后</span>
            </card-item>
        </template>
        <template #delivery-info>
            <span>暂无快递信息</span>
        </template>
    </Card>
    <Card>
        <template #content>
            <span>必备工具</span>
        </template>
        <template #desc>
            <span>查看全部工具</span>
        </template>
        <template #cardItem>
            <card-item :src="require('@/assets/img/profile/fukuan.png')">
                <span>待付款</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/fahuo.png')">
                <span>待发货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhuo.png')">
                <span>待收货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/pingjia.png')">
                <span>评价</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhou.png')">
                <span>退款/售后</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/fukuan.png')">
                <span>待付款</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/fahuo.png')">
                <span>待发货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhuo.png')">
                <span>待收货</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/pingjia.png')">
                <span>评价</span>
            </card-item>
            <card-item :src="require('@/assets/img/profile/shouhou.png')">
                <span>退款/售后</span>
            </card-item>
        </template>
    </Card>
</div>
</template>

<script>
import Banner from "./childComps/Banner";
import Card from "./childComps/Card";
import CardItem from "./childComps/CardItem";

export default {
    components: {
        Banner,
        Card,
        CardItem,
    },
};
</script>

<style scoped>
.profile {
    background: #f2f2f2;
    height: 100vh;
}
</style>
