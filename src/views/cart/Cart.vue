<template>
  <div>
    <nav-bar class="nav-bar" @itemClick="management" >
      <template #left>
        <div>购物车({{cartLength}})</div>
      </template>
      <template #right v-if="!isManage">
        <div>管理</div>
      </template>
      <template #right v-else>
        <div>完成</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar :is-delete="isManage">
      <template #total v-if="!isManage">
        <div class="total">{{'合计：￥'+totalPrice }}</div>
      </template>
      <template #button v-if="!isManage">
        <button class="button">结算({{selectedNumber}})</button>
      </template>
      <template #button v-else>
        <button class="button">删除</button>
      </template>
    </cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  data() {
    return {
      isManage: false,
    };
  },
  computed: {
    ...mapGetters(["cartLength"]),
    selectedNumber() {
      return this.$store.getters.cartList.filter((e) => {
        return e.checked === true;
      }).length;
    },
    totalPrice() {
      return this.$store.getters.cartList
        .filter((e) => {
          return e.checked === true;
        })
        .reduce((a, b) => {
          return a + b.count * b.price;
        }, 0).toFixed(2)
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    management() {
      this.isManage = !this.isManage;
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: white;
}
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>