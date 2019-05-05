<template>
    <div class="content">
        <div class="pic" v-for="(item,index) in shopPay">
            <div>
                <img :src="imgTitl+item.spec_thumbnail" alt=""width="100%"height="100%">
            </div>
            <div>
                <p>{{item.goods_name}}</p>
                <p>颜色:{{item.spec_title}}</p>
                <p>{{item.spec_inter}} 积分 <del>￥{{item.spec_pric}}</del><span><i class="el-icon-close"></i>{{item.num}}</span></p>
            </div>
        </div>
        <div class="leaving">
            <p><span>备注：</span><input type="text"placeholder="填写备注"></p>
        </div>
        <div class="con">
            <p>
                <span>商品积分：</span>
                <span>￥{{price}}</span>
            </p>
            <p>
                <span>实际积分：</span>
                <span>￥{{price}}</span>
            </p>
            <div style="width: 100%;height: .1rem;"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "content",
        data(){
            return{
                imgTitl:'http://39.96.76.3/HuiWanZhong/public/uploads/',
                shopPay:[],
                price:'',
            }
        },
        created() {
            this.shopPay = this.$store.state.shopPay;
            let price = 0;
            this.shopPay.forEach((item,index)=>{
                price+=item.spec_inter*item.num*1
            });
            this.price = price;
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .content{
        width: 100%;
        /*height: 3.2rem;*/
        height: auto;
        background-color: white;
        .pic{
            width: 100%;
            height: .8rem;
            display: flex;
            padding-bottom: .1rem;
            border-bottom: .01rem solid #eee;
            div{
                width: 100%;
                height: 100%;
            }
            div:nth-child(1){
                width: .6rem;
                height: .6rem;
                background-color: #00a2ca;
                margin: .15rem;
                div:nth-child(1){
                    width: .4rem;
                    height: .4rem;
                    margin: .25rem 0 0 .25rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            div:nth-child(2){
                flex: 1;
                /*background-color: #666666;*/
                p{
                    text-align: left;
                }
                p:nth-child(1){
                    margin-top: .13rem;
                }
                p:nth-child(3){
                    width: 100%;
                    height: 100%;
                    span:nth-child(2){
                        text-align: right;
                        float: right;
                        margin-right: .24rem;
                    }
                }
            }
        }
        .leaving{
            width: 100%;
            height: .42rem;
            border-bottom: .01rem solid #eee;
            padding-bottom: .05rem;
            margin-bottom: .1rem;
            p{
                line-height: .42rem;
                text-align: left;
                text-indent: .12rem;
                span:nth-child(1){
                    text-indent: .12rem;
                }
                input{
                    border: none;
                    text-indent: .12rem;
                }
            }
        }
        .con{
            p{
                line-height: .3rem;
                text-indent: .12rem;
                text-align: left;
                span:nth-child(2){
                    float: right;
                    margin-right: .24rem;
                }
            }
        }
    }
</style>
