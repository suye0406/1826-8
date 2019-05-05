import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
const state = {
    n:'0',
    shopList:[],
    totalPrice:'',
    allchefox:false,
    shopPay:[],
    addres:[],
    my:[],
    payState:true,
    payMen:[],
}
const mutations = {
    INCREASE(state,index){
        state.shopList[index].num++;
    },
    REDUCE(state,index){
        state.shopList[index].num--;
    },
    ALLCHE(state,blue){
        state.shopList.forEach((item,index)=>{
            item.chebox = blue;
        })
    },
    PAYMENT1(state,item){
        state.shopPay.push(item);
    },
    QINGKONG(state){
        state.shopPay = [];
    },
    SHOW(state,staus){
        state.payState = true;
    }
}
const actions = {
    shop({commit},params){
        state.shopList.push(params);
        axios.get('http://10.9.71.195:8082/r_shop_cart', {
            params: {
                phone:'苏雨辰',
                shoplist:params,
            },
        }).then(response =>{
        }).catch(function (error) {
            alert(error);
        });
    },
    lis({commit},params){
        axios.get('http://10.9.71.195:8082/r_shoop_list', {
            params: {
                phone:'苏雨辰',
            },
        }).then(response =>{
            var a = response.data.data;
            var b = [];
            var c = [];
            for (var i = 0;i < a.length;i++){
                b.push(a[i].shopList);
            }
            for (var i = 0;i < b.length;i++){
                c.push(JSON.parse(b[i]));
            }
            state.shopList = c;
        }).catch(function (error) {
            alert(error);
        });
    },
    addres({commit},params){
        axios.get('http://10.9.71.195:8082/r_address', {
            params: {
                username:'苏雨辰',
            },
        }).then(response =>{
            state.addres = response.data.data[0];
        }).catch(function (error) {
            alert(error);
        });
    },
    my({commit},params){
        axios.get('http://10.9.71.195:8082/r_my', {
            params: {
                username:'苏雨辰',
            },
        }).then(response =>{
            state.my = response.data.data[0];
        }).catch(function (error) {
            alert(error);
        });
    },
    payment({commit},params){
        console.log(state.addres)
        var a = state.addres.Province;
        var b = state.addres.City;
        var c = state.addres.address;
        var d = a+''+''+""+b+''+''+c;
        axios.get('http://10.9.71.195:8082/r_pay', {
            params: {
                username:state.addres.username,
                addresname:'苏雨辰',
                province:state.addres.Province,
                city:state.addres.City,
                totalintegral:params.totalInter,
                detailedaddres:state.addres.address,
                message:'',
                time:new Date().getTime(),
                spec:JSON.stringify(params),
            },
        }).then(response =>{
            console.log(response.data)
        }).catch(function (error) {
            alert(error);
        });
    },
}

const getters = {
    totalPrice(state){
        var price = 0;
        var cnum = 0;
        state.shopList.forEach((item,index)=>{
            if (item.chebox){
                price += item.spec_inter*item.num*1;
                state.shopPay.push(item);
                cnum ++;
                if (cnum == state.shopList.length){
                    state.allchefox = true;
                } else {
                    state.allchefox = false
                }
            }else {
            }
        });
        return price.toFixed(2);
    },
    payPrice(state){
        let price = 0;
        state.shopPay.forEach((item,index)=>{
            // price += item.spec_inter*item.num*1
        });
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
