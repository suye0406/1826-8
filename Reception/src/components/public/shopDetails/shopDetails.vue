<template>
    <div id="shopDetails">
        <!--<Header></Header>-->
        <div class="header" style="position: fixed;top: 0;width: 100%;z-index: 2;">
            <div>
                <p class="el-icon-position"></p>
                <p>蓝狐</p>
                <p>登陆</p>
            </div>
        </div>
        <div class="header"style="opacity: 0;">
            <div>
                <p class="el-icon-position"></p>
                <p>蓝狐</p>
                <p>登陆</p>
            </div>
        </div>
        <!--<Banner></Banner>-->
        <div class="banner">
            <!-- Swiper -->
            <div class="swiper-container"style="width: 100%;height: 100%;">
                <div class="swiper-wrapper"style="width: 100%;height: 100%;">
                    <div class="swiper-slide"style="width: 100%;height: 100%;"v-for="(item,index) in banner">
                        <img :src="imgTitl+item.img" alt=""style="width: 100%;height: 100%;"width="100%"height="100%">
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!--<Conten></Conten>-->
        <div class="conten">
            <div>
                <p>{{list.goods_title}}</p>
                <p>^_^</p>
            </div>
            <div>
                <p>{{list.integral}} 积分 <sub>￥ {{list.price}}</sub></p>
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
            <div @click="fen"style="margin-top: .3rem;">
                <p class="el-icon-check"></p>
                <p>选择分类</p>
                <p class="el-icon-arrow-right"></p>
            </div>
            <div>
                <div>
                    <!--<p>客服</p>-->
                    <i class="el-icon-service"></i>
                </div>
                <div @click="fen">
                    <p>
                        立即购买
                    </p>
                </div>
                <div @click="fen">
                    <p>
                        加入购物车
                    </p>
                </div>
            </div>
        </div>
        <!--<editor></editor>-->
        <div class="editor" v-html="content"></div>
        <div class="model"v-show="mode == true">
            <div style="width: 100%;height: 1.5rem;display: flex;border-bottom: .01rem solid #eee">
                <div style="width: 1rem;height: 1rem;margin: .25rem;">
                    <img :src="imgTitl+list.thumbnail" alt=""style="width: 100%;height: 100%;"width="100%"height="100%">
                </div>
                <div style="width: 2rem;margin-top: .25rem;">
                    <p style="         text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;text-align: left;">{{list.goods_title}}</p>
                    <p style="text-align: left;line-height: .3rem;text-indent: .12rem;">属性：{{spe}}</p>
                    <p style="text-align: left;line-height: .3rem;text-indent: .12rem;"><span>积分：199</span>，<del>价格：199</del></p>
                </div>
            </div>
            <div style="width: 100%;height: 1.3rem;">
                <p style="text-align: left;margin-left: .25rem;margin-top: .1rem;margin-bottom: .1rem;">属性：</p>
                <div style="width: 100%; display: flex;border-bottom: .01rem solid #eee;">
                    <div style="margin-left: .25rem;width: .5rem;margin-bottom: .2rem;overflow: hidden;"v-for="(item,index) in spec_name1"@click="spec(index,item)":class="{ active: isActive === index }">
                        <div style="width: .5rem;height: .5rem;">
                            <img :src="imgTitl+item.spec_thumbnail" alt="" style="width: 100%;height: 100%;"width="100%"height="100%">
                        </div>
                        <p style="font-size: .12rem;text-align: center;">{{item.spec_title}}</p>
                    </div>
                </div>
            </div>
            <div style="width: 100%;height: 1.3rem;">
                <p style="margin: .1rem  .1rem .1rem .25rem;text-align: left;">数量：</p>
                <el-input-number size="mini" v-model="num4" style="float: left;margin: 0 0 0 .25rem;"></el-input-number>
            </div>
            <div style="display: flex;justify-content: space-around;width: 100%;height: .5rem;position: fixed;bottom: 0;box-shadow: .01rem .01rem .01rem .01rem;">
                <div style="">
                    <!--<p>客服</p>-->
                    <i class="el-icon-service" style="text-align: center;line-height: .5rem;display: block;margin: 0 auto;"></i>
                </div>
                <div @click="pay">
                    <p style="line-height: .5rem;">
                        立即购买
                    </p>
                </div>
                <div @click="shoping">
                    <p style="line-height: .5rem;">
                        加入购物车
                    </p>
                </div>
            </div>
        </div>
        <div style="width: 100%;height: 100%;background-color: black;opacity: .5;position: fixed;top: 0;z-index: 3;"v-show="mode == true"@click="mode = false"></div>
    </div>
</template>

<script>
    import Header from "./header";
    import Banner from "./banner";
    import Conten from "./conten";
    import Editor from "./editor";
    import axios from 'axios';
    import Swiper from 'swiper';
    import '../../../../node_modules/swiper/dist/css/swiper.min.css'

    export default {
        name: "shopDetails",
        components: {Editor, Conten, Banner, Header},
        data(){
            return{
                imgTitl:'http://39.96.76.3/HuiWanZhong/public/uploads/',
                list:{},
                banner:[],
                goods_id: this.$route.params.goods_id,
                mode:false,
                num4:'1',
                spec_name1:[],
                shopLi:{},
                content:'',
                spe:'',
                isActive: -1,
                is:'',
            }
        },
        created() {
            this.shop();
        },
        mounted(){
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                },
            });
        },
        methods:{
            // http://localhost:8080/api/r_new
            // http://localhost:8080/shopdetails/api/r_details?goods_id=36
            shop(){
                // lis
                axios.get('http://localhost:8082/r_details', {
                    params: {
                        goods_id:this.goods_id,
                    },
                }).then(response =>{
                    this.list = response.data.data[0];
                    this.banner = JSON.parse(this.list.pic);
                    this.spec_name1 = JSON.parse(this.list.spec_name1);
                    this.content = this.list.content
                    // }).catch(function (error) {
                    console.log(error);
                });
            },
            fen(){
                this.mode = true;
            },
            spec(index,item){
                this.shopLi = item;
                this.isActive = index;
                this.is = index;
            },
            pay(){
                // alert('暂未开通此功能！');
                var a = {};
                a = this.spec_name1[this.is];
                // a.chebox = false
                a.num = this.num4;
                this.$store.commit("PAYMENT1",a);
                // this.spec_name1[this.is]
                this.$router.push({name:'Pay'});
            },
            shoping(){
                if (this.shopLi == ''){
                    this.$message({
                        message: '警告哦，请选择商品属性',
                        type: 'warning'
                    });
                } else {
                    this.shopLi.num = this.num4;
                    this.shopLi.goods_name = this.list.goods_title;
                    this.shopLi.chebox = false;
                    this.$store.dispatch('shop',this.shopLi);
                    this.$message({
                        message: '恭喜你，加入购物车成功',
                        type: 'success'
                    });
                }
            }
        },
        watch:{
            num4(New,Old){
                if (New < 1){
                    this.$message({
                        message: '警告哦，数量不能少于1',
                        type: 'warning'
                    });
                    this.num4 = '1';
                }else if (New > 10) {
                    this.$message({
                        message: '警告哦，限购10件商品',
                        type: 'warning'
                    });
                    this.num4 = '10';
                }
            }
        }
    }
</script>



<style scoped lang="scss">
    #shopDetails{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 10;
        /*overflow: hidden;*/
        .header{
            width: 100%;
            height: .45rem;
            background-color: black;
            div:nth-child(1){
                width: 93%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                p{
                    line-height: .45rem;
                    color: white;
                }
            }

        }
        .banner{
            width: 100%;
            height: 3.5rem;
            /*background-color: chartreuse;*/
        }
        .conten{
            width: 100%;
            height: 2.8rem;
            div:nth-child(1){
                width: 100%;
                height: .4rem;
                display: flex;
                justify-content: space-between;
                p{
                    line-height: .2rem;
                    margin-top: .05rem;
                    margin-left: .1rem;
                }
                p:nth-child(1){
                    text-align: left;
                    text-indent: .24rem;
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
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
        .editor{
            width: 100%;
            height: auto;
            /*background-color: chartreuse;*/
            margin-bottom: .46rem;
            img{
                width: 100%!important;
            }
        }
        .model{
            width: 100%;
            height: 4.4rem;
            background-color: white;
            position: fixed;
            bottom: 0;
            z-index: 4;
        }
    }
    .active{
        border: .01rem solid #00a2ca;
    }
</style>
