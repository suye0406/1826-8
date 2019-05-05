<template>
    <div class="footer">
        <p>
            <span>总价：￥{{price}}</span>
        </p>
        <p @click="pay">
            <span>去结算</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return{
                shopPay:[],
                price:'',
                show:false,
            }
        },
        created() {
            this.shopPay = this.$store.state.shopPay;
            let price = 0;
            this.shopPay.forEach((item,index)=>{
                price+=item.spec_inter*item.num*1
            });
            this.price = price;
            this.show = this.$store.state.payState;
        },
        methods:{
            pay(){
                var a = this.$store.state.shopPay;
                a.totalInter = this.price;
                console.log(a);
                this.$store.commit('SHOW',!this.show);
                this.$store.dispatch('payment',a)

            }
        }
    }
</script>

<style scoped lang="scss">
    .footer{
        width: 100%;
        height: .5rem;
        background-color: white;
        position: fixed;
        bottom: .46rem;
        display: flex;
        justify-content: space-between;
        p:nth-child(1){
            text-indent: .12rem;
            text-align: left;
            line-height: .5rem;
            sup{
                font-size: .16rem;
            }
        }
        p:nth-child(2){
            width: .94rem;
            height: .35rem;
            margin-top: .075rem;
            margin-right: .24rem;
            background-color: black;
            span{
                color: white;
                line-height: .35rem;
                text-align: center;
            }
        }
    }
</style>
