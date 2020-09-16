export default {
    addCart({ commit, state }, payload) {
        return new Promise((resolve,reject)=>{
            let product = state.cartList.find(item => item.iid === payload.iid)
            if (product) { commit('addCounter', product) }
            else { commit('addToCart', payload) }
            resolve('添加到购物车成功')
        })
    }
}