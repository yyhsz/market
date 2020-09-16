<template>
<div id="tab-control">
    <div v-for="(item ,index) in titles" :key="item" @click="itemClick(index)">
        <span :class="{active:currentIndex === index}">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('itemClick', index)
        }
    }
};
</script>

<style scoped>
#tab-control {
    top: 44px;
    background-color: #fff;
    height: 40px;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    margin-bottom: 4px;
    z-index: 0;

}

#tab-control .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
}

#tab-control span {
    padding: 5px;
}
</style>
