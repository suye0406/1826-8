<template>
    <div class="serach_list vue">
        <div style="width: 95%;height: 100%;margin: 0 auto;">
            <div style="width: 100%;height: .05rem;"></div>
            <div class="header">
                <input type="text"placeholder="搜索内容">
                <i class="el-icon-search"></i>
            </div>
            <div class="list">
                <div v-for="item in 6">
                    <div>
                        <img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/264/264409.jpg?t=1556431822" alt=""width="100%"height="100%">
                    </div>
                    <p>精致印花工艺，让你的手表更有艺术感，3色可选</p>
                    <p style="line-height: .4rem;text-align: left;"><span>199积分</span> <span>￥200</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "serach_list"
    }
</script>

<style scoped lang="scss">
    .serach_list.vue{
        div:nth-child(1){
            .header{
                width: 100%;
                height: .35rem;
                border: .012rem solid black;
                display: flex;
                justify-content: space-between;
                input{
                    width: 80%;
                    height: 100%;
                    border: none;
                    text-indent: .24rem;
                }
                i{
                    line-height: .35rem;
                    margin-right: .12rem;
                    font-weight: bold;
                }
            }
            .list{
                width: 100%;
                height: 100%;
                margin-top: .15rem;
                display: flex;
                justify-content: space-around;
                flex-flow: wrap;
                margin-bottom: .4rem;
                div{
                    width: 1.6rem;
                    height: 2.5rem;
                    /*border: .01rem solid;*/
                    margin-bottom: .1rem;
                    div:nth-child(1){
                        width: 100%;
                        height: 1.6rem;
                        /*background-color: #00a2ca;*/
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p:nth-child(2){
                        line-height: .2rem;
                        text-align: left;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                        width: 1.6rem;
                    }
                    /*p:nth-child(2){*/
                        /*width: 100%;*/
                        /*line-height: .4rem;*/
                    /*}*/
                }
            }
        }
    }
</style>
