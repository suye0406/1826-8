<template>
    <div id="today">
        <div style="width: 100%;height: .1rem;"></div>
        <div>
            <p>今日推荐</p>
        </div>
        <div class="box">
            <div class="kuai">
                <div>
                    <img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/264/264100.jpg?t=1553064119" alt=""width="100%"height="100%"style="width: 100%;height: 100%;">
                </div>
                <p>会员榨汁</p>
                <p><span style="margin-right: .15rem;">100 积分</span><span><del>￥100</del></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "today",
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="scss">
    #today{
        div:nth-child(2){
            width: 95%;
            height: .4rem;
            margin: 0 auto;
            p:nth-child(1){
                line-height: .4rem;
                text-align: left;
                font-weight: bold;
            }
        }
        .box{
            width: 95%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .kuai{
                /*282/379*/
                /*width: ;*/
                width: 1.61rem;
                height: 1.995rem;
                /*border: .01rem solid;*/
                border-radius: .1rem;
                overflow: hidden;
                div:nth-child(1){
                    width: 1.61rem;
                    height: 1.61rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    /*background-color: #00a2ca;*/
                }
                p:nth-child(2){
                    margin-top: .05rem;
                }
                p{
                    text-align: left;
                    font-size: .12rem;
                }
            }
        }
    }
</style>
