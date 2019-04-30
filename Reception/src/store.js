import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
const state = {
    n:'0',
    shopList:[],
    totalPrice:'',
}
const mutations = {

}
const actions = {
    shop({commit},params){
        console.log(params);
        state.shopList.push(params);

    },
    increase({commit},params){
        console.log(params);
        state.shopList[params].num ++;
        console.log(state.shopList[params]);
    }
}

const getters = {
    totalPrice(state){
        var price = 0;
        state.shopList.forEach((item,index)=>{
            // if (item.checked){
                price += item.price*1;
                console.log(item);
            // }
        });
        return price.toFixed(2);
    }
}
const store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters,
    }
)

export default store;
