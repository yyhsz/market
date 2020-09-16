import { debounce } from "@/common/debounce";
import BackTop from "@/components/content/backTop/BackTop";

const itemImgListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        // 对this.$refs.scroll.refresh进行防抖操作
        const refresh = debounce(this.$refs.scroll.refresh,100);
        //这里多一层封装是因为this.$bus.$off()会用到itemImgListener
        this.itemImgListener = () => {
            refresh();
        };
        //监听goodsItem中图片加载完成
        this.$bus.$on("ItemImgLoad", this.itemImgListener);
    }
}

const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return{
            showBackTop: false,
        }
    },
    methods:{
        backTop() {
            this.$refs.scroll.scrollTo(0, 0);
          },
    }
}

export {itemImgListenerMixin,backTopMixin} 