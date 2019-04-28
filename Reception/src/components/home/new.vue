<template>
    <div id="new">
        <div style="width: 100%;height: .1rem;"></div>
        <div>
            <p>新品速递</p>
        </div>
        <div class="box">
            <!--<input type="button" @click="sum({a:$refs.a.value,b:$refs.b.value})"  value="=">-->
            <div class="kuai" v-for="(item,index) in list"@click="shop(index,item)">
                <div>
                    <img :src="imgTitl+item.thumbnail" alt=""width="100%"height="100%"style="width: 100%;height: 100%;">
                </div>
                <p style=" text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;width: 1.61rem;">{{item.goods_title}}</p>
                <p><span style="margin-right: .15rem;">{{item.integral}} 积分</span><span><del>￥{{item.price}}</del></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "new",
        data(){
            return{
                imgTitl:'http://39.96.76.3/HuiWanZhong/public/uploads/',
                list:[],
            }
        },
        created() {
            this.new();
        },
        methods:{
            new(){
                axios.get('/r_new', {
                    params: {
                    },
                }).then(response =>{
                    this.list = response.data.data;
                }).catch(function (error) {
                    alert(error);
                });
            },
            shop(index,item){
                this.$router.push({name: 'ShopDetails', params: {id:item.id}});
            }
        }
    }
</script>

<style scoped lang="scss">
    #new{
        margin-bottom: .5rem;
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
            flex-flow: wrap;
            .kuai{
                /*282/379*/
                /*width: ;*/
                width: 1.61rem;
                height: 2.495rem;
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
