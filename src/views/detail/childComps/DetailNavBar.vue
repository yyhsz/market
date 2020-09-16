<template>
  <nav-bar class="detail-nav-bar">
    <template #left >
      <img src="@/assets/img/common/back.svg" @click="backClick" />
    </template>
    <template #center>
      <div class="titles">
        <div v-for="(item,index) in titles" 
        :key="item" 
        @click="itemclick(index)"
        :class="{active:index === currentIndex}"
        >{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  props:{
    
  },
  components: {
    NavBar
  },
  methods:{
      itemclick(index){
          this.currentIndex = index
          this.$emit('itemClick',index)
      },
      backClick(){
          this.$router.back()
      }
  }
};
</script>
<style scoped>
.detail-nav-bar{
    box-shadow: 0 1px 2px  rgba(0, 0, 0, .2);   
}
.titles{
    display: flex;
}
.titles>div{
    flex: auto;
}
.titles .active{
    color:var(--color-high-text)
}
img{
    width: 22px;
    margin-top: 10px;
    margin-right: 14px;
}
</style>