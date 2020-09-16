export default {
    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload) {
        state.cartList.push(payload)
    },
    reduceCounter(state, payload){       
        payload.count--
    },
    changeSelected(state,payload){
        payload.checked = !payload.checked
    },
    select(state,payload){
        payload.checked = true
    },
    cancelSelect(state,payload){
        payload.checked = false
    },
    createNewList(state,payload){
        state.cartList = payload
    }
}