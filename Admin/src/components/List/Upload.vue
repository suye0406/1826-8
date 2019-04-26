<template>
    <div id="Upload">
        Upload
    </div>
</template>

<script>
    import E from 'wangeditor';

    export default {
        name: "Upload",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .el-upload__input{
        display: none!important;
    }
    input[type=file]{
        display: none !important;
    }
</style>
a
