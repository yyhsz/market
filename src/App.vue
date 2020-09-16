<template>
  <div id="app">
    <keep-alive exclude="detail">
      <!--因为详情页每一个页面都不一样，所以详情页不能keepalive-->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style>
@import "~@/assets/css/base.css";
</style>
 