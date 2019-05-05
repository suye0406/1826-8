<template>
    <div id="list">
        <div class="lis" v-for="(item,index) in shopList">
            <div>
                <input type="checkbox" v-model="item.chebox">
            </div>
            <div>
                <div style="margin: .15rem;">
                    <img :src="imgTitl+item.spec_thumbnail" alt=""width="100%"height="100%"style="margin-top: .1rem;">
                </div>
                <div>
                    <div>
                        <p>{{item.goods_name}}</p>
                        <p>颜色：{{item.spec_title}};</p>
                        <p>{{item.spec_inter}}积分 <del>￥{{item.spec_pric}}</del></p>
                        <p style="margin-top: .06rem;">
                            <span @click.stop="reduce(index,item)"></span>
                            <span style="text-align: center;">{{item.num}}</span>
                            <span style="background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23437.png)no-repeat;background-size: cover;"@click.stop="increase(index,item)"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <i class="el-icon-delete-solid"@click.stop="del(index,item)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                shopList:[],
                imgTitl:'http://39.96.76.3/HuiWanZhong/public/uploads/',
            }
        },
        created() {
            this.$store.dispatch('lis');
            setTimeout(()=>{
                this.shopList = this.$store.state.shopList;
                console.log(this.shopList);
            },100)
        },
        mounted() {

        },
        methods:{
            increase(index,item){
                if (item.num > 9){
                    this.$message({
                        message: '警告哦，这是一条警告消息',
                        type: 'warning'
                    });
                    item.num = 10;
                } else {
                    this.$store.commit("INCREASE",index)
                }
            },
            reduce(index,item){
                if (item.num < 2){
                    this.$message({
                        message: '警告哦，不能小于1',
                        type: 'warning'
                    });
                    item.num = 1;
                } else {
                    this.$store.commit("REDUCE",index)
                }
            },
            del(index,item){
                console.log(index)
            }
        },
        computed:{
        }
    }
</script>

<style scoped lang="scss">
    #list{
        width: 100%;
        height: auto;
        .lis{
            width: 100%;
            height: 1.31rem;
            background-color: white;
            /*https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23441.png*/
            display: flex;
            justify-content: space-around;
            margin-bottom: .1rem;
            div{
                height: 100%;
            }
            div:nth-child(1){
                width: .4rem;
                /*background-color: black;*/
                position: relative;
                input{
                    line-height: 1.11rem;
                    position: absolute; top: 40%;
                    transform: translate(-40%);
                }
            }
            div:nth-child(2){
                width: 2.8rem;
                /*background-color: #00a2ca;*/
                display: flex;
                /*justify-content: space-around;*/
                div:nth-child(1){
                    width: .522rem;
                    height: .522rem;
                    /*background-color: #00a2ca;*/
                    /*margin-top: .1rem;*/
                }
                img{
                    width: 100%;
                    height: 100%;
                }
                div:nth-child(2){
                    /*width: 1.5rem;*/
                    flex: 1;
                    height: 100%;
                    /*background-color: #666666;*/
                    div:nth-child(1){
                        width: 100%;
                        p:nth-child(1){
                            margin-top: .1rem;
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                            width: 100%;
                            text-align: left;
                        }

                        p{
                            line-height: .25rem;
                            text-align: left;
                        }
                        p:nth-child(4){
                            width: .21rem;
                            height: .21rem;
                            display: flex;
                            width: 100%;
                            span{
                                display: block;
                            }
                            span:nth-child(1) ,span:nth-child(3){
                                width: .21rem;
                                height: .21rem;
                                /*background-color: black;*/
                                color: white;
                            }
                            span:nth-child(1){
                                background: url("https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23438.png")no-repeat;
                                background-size: cover;
                            }
                            span:nth-child(2){
                                width: .37rem;
                                height: 100%;
                            }
                            sapn:nth-child(3){
                                background: url("https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23437.png")no-repeat;
                                background-size: cover;
                            }
                        }
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            div:nth-child(3){
                width: .4rem;
                /*background-color: chartreuse;*/
                i{
                    line-height: 1.11rem;
                    text-align: center;
                }
            }
        }
    }
</style>
