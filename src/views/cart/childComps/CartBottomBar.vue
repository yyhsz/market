<template>
  <div class="bottom-bar">
    <div class="select" @click="checkClick">
      <div class="check-button" :class="{checked:checked}">
        <img src="@/assets/img/cart/tick.svg" alt />
      </div>
      <div>全选</div>
    </div>
    <slot name="total"></slot>
    <div @click="itemClick">
      <slot name="button"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartBottomBar",
  data() {
    return {
      checkSelect: false,
    };
  },
  props: {
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkClick() {
      //点击全选按钮
      if (this.checked) {
        this.$store.getters.cartList.forEach((element) => {
          this.$store.commit("cancelSelect", element);
        });
      } else {
        this.$store.getters.cartList.forEach((element) => {
          this.$store.commit("select", element);
        });
      }
    },
    itemClick() {
      //删除商品，实际上是把cartList换成新的cartList
      console.log(this.isDelete);
      if (this.isDelete) {
        const newList = this.$store.state.cartList.filter((ele) => {
          return ele.checked === false;
        })
        this.$store.commit("createNewList", newList);
      }else if(this.$store.state.cartList.some((ele)=>{
          return ele.checked === true
        })){
          this.$toast.show('跳转至购物车界面')
        }
        else {
          this.$toast.show('请至少选择一个商品')
        }
      
    },
  },
  computed: {
    checked() {
      if (this.$store.state.cartList.length === 0) return false;
      return this.$store.state.cartList.every((ele, index) => {
        return ele.checked === true;
      });
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 36px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  border: 1px solid rgb(241, 240, 240);
  border-right: none;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  background: rgb(255, 255, 255);
}
.select {
  margin-left: 6px;
  margin-right: 4px;
  display: flex;
  align-items: center;
}
.check-button {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  line-height: 25px;
  text-align: center;
  border: 1px solid #ddd;
  margin-right: 4px;
}
.check-button.checked {
  background: #f75914;
}
.total {
  margin-left: 30px;
}
.button {
  margin-left: 40px;
  margin-right: 6px;
  outline: none;
  border: 1px solid #ff8198;
  border-radius: 4px;
  width: 80px;
  height: 28px;
  background: #ff8198;
  color: white;
}
</style>