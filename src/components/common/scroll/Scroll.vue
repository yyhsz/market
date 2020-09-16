<template>
<div id="wrapper" ref="wrapper">
    <div id="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: undefined,
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('backTopShow', position.y)
            this.$emit('scroll', position)
        })
        //监听上拉加载更多
        this.scroll.on('pullingUp', () => {
            this.$emit('pullUpLoadMore')
        })
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>
