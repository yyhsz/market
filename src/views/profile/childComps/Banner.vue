<template>
<div class="user-info">
    <div class="avatar">
        <img src="@/assets/img/profile/avatar.png" alt />
    </div>
    <span class="name">登录/注册</span>
    <div class="setting">
        <img src="@/assets/img/profile/setting.png" alt />
    </div>
    <div class="user-other-info">
        <div>
            <span>收藏夹</span>
            <span>关注店铺</span>
            <span>足迹</span>
            <span>红包卡券</span>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-info {
    background: #f89cad;
    height: 160px;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .2);
}

.user-info .avatar {
    position: absolute;
    left: 20px;
    top: 28px;
}

.user-info .avatar img {
    height: 55px;
}

.user-info .name {
    position: absolute;
    left: 86px;
    top: 36px;
}

.user-info .setting {
    position: absolute;
    top: 28px;
    right: 20px;
}

.user-info .setting img {
    height: 20px;
}

.user-other-info {
    position: absolute;
    bottom: 30px;
    font-size: 12px;
}

.user-other-info span {
    margin: 0 20px;
}
</style>
