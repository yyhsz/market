<template>
<div class="card-item">
    <img :src="src" alt />
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
        },
    },
};
</script>

<style scoped>
.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    background: white;
    padding: 10px 10px;
}

.card-item img {
    width: 30px;
    padding-bottom: 4px;
}
</style>
