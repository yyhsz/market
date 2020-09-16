<template>
  <div class="check-list-item" >
    <div class="check-button" :class="{check:itemInfo.checked}" @click="itemClick(itemInfo)">
      <img src="@/assets/img/cart/tick.svg" alt />
    </div>
    <div class="itemInfo">
      <div class="itemImg">
        <img :src="itemInfo.image" />
      </div>
      <div class="text">
        <p class="title">{{itemInfo.title}}</p>
        <p class="desc">{{itemInfo.desc}}</p>
        <div class="bottom">
          <div class="price">{{'￥'+itemInfo.price}}</div>
          <div class="count" @click.stop>
            <button class="reduce" @click="reduce">-</button>
            <div class="number">{{itemInfo.count}}</div>
            <button class="add" @click="add">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
      itemClick(item){
          this.$store.commit('changeSelected',item)
      },
    add() {
      this.$store.commit("addCounter", this.itemInfo);

    },
    reduce(){
        return this.itemInfo.count === 1 || this.$store.commit("reduceCounter", this.itemInfo);
    },

  },
};
</script>
<style scoped>
.check-list-item {
  display: flex;
  height: 140px;
  border: 1px solid rgb(240, 239, 239);
  border-right: none;
  border-left: none;
  align-items: center;
}
.check-button {
  border-radius: 50%;
  width: 19px;
  height: 19px;
  margin: 0 6px;
  border: 1px solid #ddd;
}
.check-button.check {
  background: #f75914;
}
.itemInfo {
  display: flex;
}
.itemImg {
  height: 120px;
  margin-right: 8px;
}
.itemImg img {
  max-height: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
}
.itemInfo {
  display: flex;
}
.text {
  font-size: 18px;
  width: 190px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 520;
  margin-bottom: 20px;
  margin-top: 10px;
}
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-bottom: 30px;
}
.bottom {
  display: flex;
  position: relative;
}
.price {
  margin-right: 60px;
  color: #f75914;
}
.count {
  display: flex;
  position: absolute;top: 0;bottom:0;right: 5%;
}
button {
  width: 18px;
  height: 18px;
  background: #fff;
  border: 1px solid #ddd;
  line-height: 18px;
  outline: none;
}
.reduce {
  line-height: 13px;
}
.number {
  margin: 0 4px 0 4px;
}
</style>