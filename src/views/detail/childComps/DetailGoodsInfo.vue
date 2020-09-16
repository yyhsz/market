<template>
  <div id="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <p class="title">{{goodsInfo.title}}</p>
    <div class="price">
      <div class="nowP">{{'￥'+goodsInfo.nowPrice}}</div>
      <div class="oldP">{{goodsInfo.oldPrice}}</div>
      <div class="discount">{{goodsInfo.discount}}</div>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" />
        <span>{{goodsInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.title {
  margin: 18px 16px 18px 16px;
  font-size: 19px;
  color: black;
}
.price {
  display: flex;
  position: relative;
  margin-left: 12px;
}
.nowP {
  color: var(--color-high-text);
  font-size: 26px;
  margin-right: 8px;
}
.oldP {
  font-size: 14px;
  position: relative;top:10px;
  color: rgb(158, 158, 158);
}
.oldP::after {
  content: "";
  border: 1px solid rgb(158, 158, 158);
  width: 38px;
  position: absolute;
  top: 7px;
  right: 0;
}
.discount {
  border: 1px solid;
  border-radius: 10px;
  background: var(--color-high-text);
  color: white;
  width: 60px;
  height: 26px;
  line-height: 26px;
  font-size: 14px;
  text-align: center;
  margin-left: 4px;
}
.info-other {
  margin: 16px 10px 0 10px;
  padding-bottom: 6px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(158, 158, 158);
  border-bottom: 1px solid rgb(231, 231, 231);
}
.info-service{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 10px 20px 10px;
  border-bottom: 6px solid rgb(231, 231, 231);
  color: rgb(158, 158, 158);


    
}
.info-service-item{
    position: relative;
}
.info-service-item img{
    width: 14px;
    position: absolute;top:1px
}
.info-service-item span{
    margin-left: 15px;
}

</style>