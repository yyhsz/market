<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table,index) in paramInfo.sizes" :key="index" class="size">
        <tr v-for="(tr,indey) in table" :key="indey">
            <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
    </table>
    <table class="infos"> 
        <tr v-for="(tr,index) in paramInfo.infos" :key="index">
            <td class="key">{{tr.key}}</td>
            <td class="value">{{tr.value}}</td>

        </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
    .param-info{
        padding: 20px 15px ;
        font-size: 14px;
        border-top: 5px solid #f2f5f8;
        margin-top:10px ;
    }
    .size{
        width: 100%;
        border-collapse: collapse;
    }
    .size tr{
        height: 42px;
        border-bottom:1px solid rgba(100,100,100,.1);
    }
    .infos{
        width: 100%;
        border-collapse: collapse;
    }
    .infos tr{
        height: 42px;
        border-top:1px solid rgba(100,100,100,.1);
    }
    .infos td{
        width:45px;
    }
    .value{
        color: #eb4868;
    }
</style>