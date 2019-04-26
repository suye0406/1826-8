<template>
    <div id="List">
        <div class="header">
            <el-input  placeholder="请输入内容"style="width: 200px;margin-top: 20px;margin-left: 20px;float: left;"></el-input>
            <el-button style="float: left;margin-left: 10px;margin-top: 20px;">搜索</el-button>
            <el-button style="float: right;margin-right:20px;margin-top: 20px;">增加</el-button>
        </div>
        <div class="conten"style="margin-left: 20px;">
            <table class="table table-hover">
                <tr>
                    <td>商品标题</td>
                    <td>图片</td>
                    <td>分类</td>
                    <td>积分</td>
                    <td>价格</td>
                    <td>库存</td>
                    <td>销量</td>
                    <td>操作</td>
                </tr>
                <tr>
                    <td>商品标题</td>
                    <td>图片</td>
                    <td>分类</td>
                    <td>积分</td>
                    <td>价格</td>
                    <td>库存</td>
                    <td>销量</td>
                    <td>操作</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped lang="scss">
    #List{
        width: 100%;
        height: 100%;
        /*background-color: darkcyan;*/
        .header{
            width: 100%;
            height: 80px;
            /*background-color: black;*/
        }
        .conten{
            width: 100%;
            height: 100%;
            table{
                tr{
                    border: 1px solid;
                    td{
                        border-bottom: 1px solid;
                        width: 130px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>
