<template>
    <div id="personal">
        <div>
            <div>
                <div class="header">
                    <p>
                        <span class="el-icon-arrow-left"@click="$router.go(-1);"></span>
                        <span>个人中心</span>
                    </p>
                </div>
                <div class="pic">
                    <div>
                        <p>头像</p>
                    </div>
                    <div>
                        <div>
                            <img :src="this.$store.state.my.pic" alt=""width="100%"height="100%">
                        </div>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="name">
                    <p>昵称</p>
                    <p>
                        <span>{{this.$store.state.my.username}}</span>
                        <i class="el-icon-arrow-right"></i>
                    </p>
                </div>
                <div class="name"@click="addres">
                    <p>我的地址</p>
                    <p>
                        <!--<span>suyuchen</span>-->
                        <i class="el-icon-arrow-right"></i>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal",
        data(){
            return{
                list:[],
            }
        },
        created() {
            console.log(this.$store.state.my);
        },
        methods:{
            addres(){
            }
        }
    }
</script>

<style scoped lang="scss">
    #personal{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-color: #eee;
        div:nth-child(1){
            width: 100%;
            height: 100%;
            background-color: white;
            div:nth-child(1){
                width: 95%;
                height: 100%;
                margin: 0 auto;
                /*background-color: white;*/
                .header{
                    width: 100%;
                    height: .4rem;
                    border-bottom: .01rem solid #9e9e9e26;
                    p{
                        text-align: left;
                        /*text-indent: .12rem;*/
                        span{
                            line-height: .4rem;
                            color: black;
                        }
                        span:nth-child(2){
                            text-indent: .12rem;
                            margin-left: .12rem;
                        }
                    }
                }
                .pic{
                    width: 100%;
                    height: .7rem;
                    /*background-color: #666666;*/
                    display: flex;
                    justify-content: space-between;
                    border-bottom: .01rem solid #9e9e9e26;
                    p{
                        line-height: .7rem;
                    }
                    div:nth-child(1){
                        p{
                            text-align: left;
                        }
                    }
                    div:nth-child(2){
                        display: flex;
                        div:nth-child(1){
                            width: .5rem;
                            height: .45rem;
                            background-color: #666666;
                            margin: .13rem .05rem 0 0;
                            border-radius: 50%;
                        }
                        i{
                            line-height: .7rem;
                        }
                    }
                }
                .name{
                    width: 100%;
                    height: .5rem;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: .01rem solid #9e9e9e26;
                    p{
                        line-height: .5rem;
                        span{
                            margin-right: .12rem;
                        }
                    }
                }
            }
        }
    }
</style>
