<template>
    <div id="List">
        <div class="header">
            <div class="nav">
                <el-tabs v-model="activeName" @tab-click="handleClick"style="margin-left: 12px;">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <el-input  placeholder="请输入内容" style="width: 200px;float: left;margin-left: 20px;margin-top: 20px;margin-bottom: 20px;"></el-input>
            <el-button type="success"style="float: left;margin-top: 20px;margin-left: 10px;">搜索</el-button>
            <el-button type="primary"style="float: right;margin-top: 20px;margin-right: 30px;"@click="Upload">增加</el-button>
        </div>
        <div class="bs-example" data-example-id="hoverable-table">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th style="width: 10px;">#</th>
                    <th>标题</th>
                    <th>图片</th>
                    <th style="width: auto;">分类</th>
                    <th>积分</th>
                    <th>价格</th>
                    <th>库存</th>
                    <th>销量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in List">
                    <th scope="row"style="width: 10px;">{{index+1}}</th>
                    <th>{{item.goods_title}}</th>
                    <th style="width: 50px;height: 100px">
                        <img :src="item.thumbnail" alt=""width="100%"height="100%">
                    </th>
                    <th style="width: 100px;">{{item.category_id == 1?'积分商品':'会员商品'}}</th>
                    <th>{{item.integral}}</th>
                    <th>{{item.price}}</th>
                    <th>{{item.inventory}}</th>
                    <th>{{item.has_sold}}</th>
                    <th>
                        <button type="button" class="btn btn-primary btn-xs">编辑</button>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "List",
        data(){
            return{
                activeName: '',
                List:[],
            }
        },
        created() {
            this.list();
        },
        methods:{
            list(){
                var merchant_id = '';
                merchant_id = JSON.parse(sessionStorage.getItem('merchant_id'));
                axios.get('/shoplist', {
                    params: {
                        merchant_id:merchant_id,
                    },
                }).then(response =>{
                    if (response.data.status == '0'){
                        console.log(response.data.data);
                        this.List = response.data.data;
                    }
                }).catch(function (error) {
                    alert(error);
                });
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            Upload(){
                this.$router.push({name:'Upload'});
            }
        }
    }
</script>

<style scoped lang="scss">
    #List{
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 60px;
        }
        table tbody th{
            line-height: 100px;
            width: 100px;
            height: 100px;
        }
    }
</style>
