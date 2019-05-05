<template>
    <div id="header">
        <div></div>
        <div class="serch">
            <i class="el-icon-search"></i>
            <i>搜索</i>
        </div>
        <div></div>
        <div class="menu_one">
            <div>
                <p v-for="(item,index) in list" style="":class="{ active: isActive === index }"@click="title(index)">{{item.category_name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "header",
        data(){
            return{
                list:[],
                isActive: -1,
            }
        },
        created() {
            this.fication();
        },
        methods:{
            fication(){
                axios.get('api/fication', {
                    params: {
                    },
                }).then(response =>{
                    this.list = response.data.data;
                }).catch(function (error) {
                    alert(error);
                });
            },
            title(index){
                this.isActive = index;
            }
    }
    }
</script>

<style scoped lang="scss">
    #header{
        width: 100%;
        height: .8rem;
        /*background-color: darkblue;*/
        margin-bottom: .25rem;
        div:nth-child(1){
            width: 100%;
            height: .1rem;
        }
        .serch{
            width: 95%;
            height: .4rem;
            background-color: rgb(243, 243, 243);
            margin: 0 auto;
            i{
                line-height: .4rem;
            }
            i:nth-child(1){
                color: black;
            }
            i:nth-child(2){
                text-indent: .12rem;
                margin-left: .05rem;
            }
        }
        div:nth-child(3){
            width: 100%;
            height: .1rem;
        }
        .menu_one{
            width: 95%;
            height: .44rem;
            margin: 0 auto;
            overflow: auto;
            /*background-color: black;*/
            overflow-y: hidden;
            div:nth-child(1){
                /*display: flex;*/
                /*justify-content: space-around;*/
                width: 4.5rem;
                p{
                    float: left;
                    line-height: .44rem;
                    width: auto;
                    margin-right: .1rem;
                }
            }
        }
        .active{
            color:rgb(107,163,221);
        }
    }
</style>
