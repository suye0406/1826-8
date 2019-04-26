<template>
    <div id="Upload">
        <div class="nav">
            <el-tabs v-model="activeName" @tab-click="handleClick"style="margin-left: 12px;">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <div class="bod">
            <div>
                <div>
                    <p>商品名称</p>
                    <el-input  placeholder="请输入商品名称"style="float: left;width: 300px;"></el-input>
                </div>
            </div>
            <br>
            <div>
                <div>
                    <p>分类：</p>
                    <el-dropdown style="float: left;">
                          <span class="el-dropdown-link"style="line-height: 40px;">
                            商品分类<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <br>
            <div>
                <div>
                    <p>销量</p>
                    <el-input  placeholder="请输入销量"style="float: left;width: 300px;"></el-input>
                </div>
            </div>
            <br>
            <div class="spec1">
                <div>
                    <p>商品属性</p>
                    <el-input  placeholder="请输入商品属性"style="float: left;width: 200px;"></el-input>
                </div>
                <div>
                    <p>商品库存</p>
                    <el-input  placeholder="请输入商品库存"style="float: left;width: 200px;"></el-input>
                </div>
                <div>
                    <p>商品积分</p>
                    <el-input  placeholder="请输入商品积分"style="float: left;width: 200px;"></el-input>
                </div>
                <div>
                    <p>商品价格</p>
                    <el-input  placeholder="请输入商品价格"style="float: left;width: 200px;"></el-input>
                </div>
            </div>
            <div class="thumbnail">
                <p>缩略图</p>
                <div>
                    <i class="el-icon-plus"></i>
                </div>
            </div>
            <br>
            <div class="thumbnail">
                <p>商品图</p>
                <div>
                    <i class="el-icon-plus"></i>
                </div>
            </div>
            <br>
            <div class="wang">
                <div id="editor">
                    <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor';

    export default {
        name: "Upload",
        data(){
            return{
                activeName:'',
                imageUrl: ''
            }
        },
        created() {

        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            wang(){
                var E = window.wangEditor;
                var editor = new E('#editor')
                // 或者 var editor = new E( document.getElementById('editor') )
                editor.create()
            }
        }
    }
</script>

<style scoped lang="scss">
    #Upload{
        .bod{
            width: 90%;
            margin: 0 auto;
            div:nth-child(1){
                width: 100%;
                height: 40px;
                /*background-color: darkgrey;*/
                p:nth-child(1){
                    float: left;
                    line-height: 40px;
                    width: 100px;
                    text-align: left;
                }
                input:nth-child(1){
                    float: left;
                    width: 200px;
                }
            }
            .spec1{
                width: 80%;
                height: 100px;
                div{
                    float: left;
                    width: 350px;
                    p{
                        line-height: 40px;
                        width: 100px;
                        text-align: left;
                        float: left;
                    }
                }
            }
            .thumbnail{
                width: 80%;
                height: 100px;
                border: none;
                p:nth-child(1){
                    line-height: 40px;
                    width: 100px;
                    text-align: left;
                    float: left;
                }
                div:nth-child(2){
                    width: 100px;
                    height: 100px;
                    float: left;
                    border: 1px solid #dddddd;
                    border-radius: 5px;
                    i{
                        line-height: 100px;
                        text-align: center;
                    }
                }
            }
            .wang{
                width: 90%;
                height: 400px;
                /*background-color: #dddddd;*/
                margin-bottom: 20px;
                margin-top: 20px;
                #editor{
                    width: 100%;
                    height: 100%;
                    p{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
a
