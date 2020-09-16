<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div v-else>
      <slot name="item-img"></slot>
    </div>
    <div :style="fontColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.name === this.path.slice(1);
    },
    fontColor(){

      
        return this.isActive ? {color:this.activeColor} : {}
    }
  }
};
</script>
<style scoped>
#tab-bar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
}
#tab-bar-item div {
  font-size: 14px;
}
</style>