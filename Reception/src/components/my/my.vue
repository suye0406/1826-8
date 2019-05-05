<template>
    <div id="my">
        <div class="header">
            <div></div>
            <div>
                <p>{{this.$store.state.my.username}}</p>
            </div>
        </div>
        <div class="conten"@click="personal">
            <div>
                <!--<img src="https://imgs-qn.iliangcang.com/images/default/default180.png" alt="">-->
                <img :src="this.$store.state.my.pic" alt="">
            </div>
        </div>
        <div class="list">
            <div>
                <p><i class="el-icon-tickets"></i><span>我的订单</span></p>
                <p><i class="el-icon-arrow-right"></i></p>
            </div>
            <div>
                <p><i class="el-icon-s-check"></i><span>申请商户</span></p>
                <p><i class="el-icon-arrow-right"></i></p>
            </div>
            <div>
                <p><i class="el-icon-goblet"></i><span>余额</span></p>
                <p><span style="margin-right: .12rem;">{{this.$store.state.my.integral}} 积分</span><i class="el-icon-arrow-right"></i></p>
            </div>
            <div>
                <p><i class="el-icon-headset"></i><span>联系客服</span></p>
                <p><i class="el-icon-arrow-right"></i></p>
            </div>
        </div>
        <!--<div style="width: 100%;height: .75rem;"></div>-->
        <div class="btn1">
            立即登陆
        </div>
    </div>
</template>

<script>
    export default {
        name: "my",
        data(){
            return{

            }
        },
        created() {
            this.$store.dispatch('my');
            console.log(this.$store.state.my);
        },
        methods:{
            personal(){
                this.$router.push({name:'personal'});
            }
        }
    }
</script>

<style scoped lang="scss">
    #my{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #eeeeee;
        .header {
            background-color: white;
            div:nth-child(1){
                width: 100%;
                height: .25rem;
            }
            div:nth-child(2){
                width: 100%;
                height: .44rem;
                p{
                    line-height: .44rem;
                    text-align: center;
                }
            }
        }
        .conten{
            width: 100%;
            height: 1.35rem;
            position: relative;
            background-color: white;
            /*background-color: #666666;*/
            border-bottom: .15rem solid #eeeeee;
            div:nth-child(1){
                width: .665rem;
                height: .665rem;
                /*display: flex;*/
                /*justify-content: center;*/
                /*flex-direction: column;*/
                /*justify-content: center;*/
                border-radius: 50%;
                position: absolute; left: 50%; top: 50%;
                transform: translate(-50%, -50%);
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .list{
            width: 100%;
            height: auto;
            div{
                width: 100%;
                height: .44rem;
                background-color: white;
                display: flex;
                justify-content: space-between;
                margin-bottom: .1rem;
                p{
                    line-height: .44rem;
                }
                P:nth-child(1){
                    margin-left: .24rem;
                }
                p:nth-child(2){
                    margin-right: .24rem;
                }
            }
        }
        .btn1{
            width: 1.5rem;
            height: .5rem;
            background-color: black;
            text-align: center;
            line-height: .5rem;
            color: white;
            margin: 0 auto;
            position: fixed; left: 50%; bottom: .5rem;
            transform: translate(-50%, -50%);
        }
    }
</style>
