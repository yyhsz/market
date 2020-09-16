import Vue from 'vue'
import Toast from './Toast'
 

const obj = {}

obj.install = (Vue)=>{
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    //创建组件实例
    const toast = new toastConstructor()
    //将组件实例挂载到div上
    toast.$mount(document.createElement('div'))
    //把dom添加到页面里
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj