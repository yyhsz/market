<template>
  <div v-if="Object.keys(comment).length !== 0" >
    <div class="header">
      <div>用户评价</div>
      <div>
        <span>更多</span>
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="main">
      <div class="user-info">
        <img :src="comment.user.avatar" />
        <span>{{comment.user.uname}}</span>
      </div>
      <div class="comment-info">
          <div class="content">{{comment.content}}</div>
          <div class="other">
              <span>{{comment.created | format}}</span>
              <span>{{comment.style}}</span>
          </div>
          <div class="comment-img">
              <div  v-for="(imgs,index) in comment.images" :key="index">
                  <img :src="imgs" >
              </div>
              
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '@/common/utils.js';

export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
      format(value){
          return formatDate(new Date(value*1000),'yyyy-MM-dd')
      }
  }
};
</script>
<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.main {
    padding-bottom: 30px;
    border-bottom: 6px solid #f2f5f8;
}
.user-info{
    display: flex;
    align-items: center;
}
.user-info img{
    border-radius: 50%;
    width:42px;
    margin: 10px 16px;
}

.comment-info {
    margin: 0 16px;
    
}
.comment-info .content{
    margin-bottom: 6px;
    font-size: 14px;
    color: #777;
}
.comment-info .other{
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
}
.comment-info .other span{
    margin-right: 10px;
    
}
.comment-img {
    display: flex;
}
.comment-img div{
    width: 60px;
    height: 60px;
}
.comment-img img{
    width: 100%;
    height: 100%;
    margin-right: 10px;
}
</style>