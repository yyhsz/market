<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>

<style scoped>
#tab-bar {
    display: flex;
    justify-content: space-around;
    height: 49px;
    box-shadow: 0 -1px 2px rgba(99, 99, 99, 0.2);
    background-color: white;
    box-shadow: 0 -1px 10px rgba(54, 54, 54, 0.2);
}
</style>
