<template>
    <div class="conten">
        <div>
            <p>会榨汁的小蓝杯</p>
            <p>^_^</p>
        </div>
        <div>
            <p>199 积分 <sub>￥ 200</sub></p>
            <p></p>
        </div>
        <div>
            <p>
                <span><i class="el-icon-water-cup"></i>免运费</span>
                <span><i class="el-icon-cold-drink"></i>正品授权</span>
            </p>
            <p>
                <span> <i class="el-icon-ice-tea"></i>现货商品3个工作日内发货</span>
            </p>
        </div>
        <div></div>
        <div>
            <p class="el-icon-check"></p>
            <p>选择分类</p>
            <p class="el-icon-arrow-right"></p>
        </div>
        <div>
            <div>
                <!--<p>客服</p>-->
                <i class="el-icon-service"></i>
            </div>
            <div>
                <p>
                    立即购买
                </p>
            </div>
            <div>
                <p>
                    加入购物车
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "conten"
    }
</script>

<style scoped lang="scss">
    .conten{
        width: 100%;
        height: 2.8rem;
        div:nth-child(1){
            width: 100%;
            height: .4rem;
            display: flex;
            justify-content: space-between;
            p{
                line-height: .4rem;
            }
            p:nth-child(1){
                text-align: left;
                text-indent: .24rem;
            }
            p:nth-child(2){
                margin-right: .24rem;
            }
        }
        div:nth-child(2){
            width: 100%;
            height: .5rem;
            display: flex;
            border: .01rem solid #eee;
            p{
                line-height: .5rem;
            }
            p:nth-child(1){
                color: #0c79cc;
                text-indent: .24rem;
                font-size: .24rem;
                font-weight: bold;
            }
            p:nth-child(2){
                sub{
                    font-size: .12rem;
                }
            }
        }
        div:nth-child(3){
            width: 100%;
            height: auto;
            margin-bottom: .1rem;
            /*background-color: #00a2ca;*/
            p{
                text-align: left;
                text-indent: .09rem;
                span{
                    margin-left: .12rem;
                }
            }
        }
        div:nth-child(4){
            width: 100%;
            height: .02rem;
            background-color: #eeee;
            margin-bottom: .1rem;
        }
        div:nth-child(5){
            width: 100%;
            height: .6rem;
            /*margin: 0 auto;*/
            /*background-color: #00a2ca;*/
            display: flex;
            justify-content: space-between;
            p:nth-child(1){
                margin-left: .31rem;
            }
            p:nth-child(3){
                margin-right: .24rem;
            }
        }
        div:nth-child(6){
            width: 100%;
            height: .5rem;
            background-color: white;
            position: fixed;
            bottom: 0;
            display: flex;
            /*background-color: #00a2ca;*/
            div{
                height:100%;
                /*font-weight: bold;*/

                i{
                    text-align: center;
                    line-height: .5rem;
                    display: block;
                    margin: 0 auto;
                    font-weight: bold;
                }
                p{
                    text-align: center;
                    line-height: .5rem;
                    font-weight: normal;
                }
            }
            div:nth-child(1){
                width: 1.5rem;
                /*background-color: #00a2ca;*/
                border-right: .02rem solid;
            }
            div:nth-child(2){
                p{
                    font-weight: normal;
                    color: black;
                }
            }
            div:nth-child(3){
                background-color: black;
                p{
                    color: white;
                }
            }
        }
    }
</style>
