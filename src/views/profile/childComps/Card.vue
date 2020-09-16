<template>
<div class="card">
    <div class="header">
        <div>
            <slot name="content"></slot>
        </div>
        <div>
            <slot name="desc"></slot>
            <img src="@/assets/img/common/back.svg" alt />
        </div>
    </div>
    <div class="wrapper">
        <slot name="cardItem"></slot>
    </div>
    <div class="delivery-info">
        <slot name="delivery-info"></slot>
    </div>
</div>
</template>

<script>
export default {
    components: {},
};
</script>

<style scoped>
.card {
    border-radius: 6px;
    width: 290px;
    margin: 10px auto;
    background: white;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    height: 164px;
}

.header {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
}

.header>div:first-child {
    margin-right: 90px;
    margin-left: -16px;
}

.header>div:first-child>span {
    font-size: 14px;
    font-weight: 600;
}

.header>div:nth-child(2) {
    position: relative;
}

.header>div:nth-child(2)>span {
    font-size: 10px;
    color: rgb(112, 112, 112);
}

.header>div:nth-child(2)>img {
    width: 12px;
    transform: rotateY(180deg);
    position: absolute;
    top: 3px;
}

.wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex: 0 0;
}

.delivery-info {
    background: #f2f2f2;
    height: 50px;
    width: 240px;
    margin: 0 auto;
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    font-size: 10px;
}
</style>
