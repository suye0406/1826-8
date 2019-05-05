<template>
    <div id="payPass">
        <div class="header">
            <i class="el-icon-close"></i>
            <span>请输入支付密码</span>
        </div>
        <div class="conten">
            <p>测试商品</p>
            <p>积分：99</p>
        </div>
        <div class="pass">
            <input type="text"value=""style="opacity: 1;position: absolute;"ref="gain"v-model="password">
            <div>
                <div>
                    <!--<div class="kuang"><span>{{this.text[0].pass}}</span></div>-->
                    <!--<div class="kuang"><span>{{this.text[1].pass}}</span></div>-->
                    <!--<div class="kuang"><span>{{this.text[2].pass}}</span></div>-->
                    <!--<div class="kuang"><span>{{this.text[3].pass}}</span></div>-->
                    <!--<div class="kuang"><span>{{this.text[4].pass}}</span></div>-->
                    <!--<div class="kuang"><span>{{this.text[5].pass}}</span></div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "payPass",
        data(){
            return{
                password:'',
                text:[],
            }
        },
        created() {
        },
        watch:{
            password(New,Old){
                if (New.length == 6){
                    var  a = [];
                    a = this.password;
                    console.log(a);
                    for (var i = 0;i<a.length;i++){
                        this.text.push({pass:a[i]});
                    }
                    console.log(this.text[0].pass);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #payPass{
        width: 80%;
        height: 2rem;
        background-color: #f8f8f8;
        position: fixed; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        .header{
            width: 100%;
            height: .4rem;
            /*background-color: silver;*/
            border-bottom: .01rem solid #c9daca;
            display: flex;
            i{
                line-height: .4rem;
                text-align: left;
                text-indent: .12rem;
                color: black;
            }
            span{
                -ms-text-align-last: left;
                text-align-last: left;
                text-indent: .12rem;
                color: black;
                line-height: .4rem;
            }
        }
        .conten{
            p{
                line-height: .3rem;
            }
            p:nth-child(2){
                font-weight: bold;
                font-size: .18rem;
            }
        }
        .pass{
            /*display: flex;*/
            margin: 0 auto;
            /*width: auto;*/
            div:nth-child(2){
                /*background-color: black;*/
                margin: 0 auto;
                width: 80%;
                height: .4rem;
                div:nth-child(1){
                    display: flex;
                    .kuang{
                        width: .4rem;
                        height: .4rem;
                        border: .01rem solid;
                        text-align: center;
                        line-height: .4rem;
                        span{
                            text-align: center;
                            display: block;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
    }
</style>
