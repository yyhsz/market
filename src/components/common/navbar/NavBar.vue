<template>
<div class="nav-bar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right" @click="itemClick">
        <slot name="right"></slot>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        itemClick() {
            this.$emit("itemClick");
        },
    },
};
</script>

<style scoped>
.nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;

}

.left {
    width: 40px;
    flex: auto;
}

.center {
    flex: auto;
}

.right {
    width: 40px;
    flex: auto;
}
</style>
