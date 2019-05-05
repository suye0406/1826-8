<template>
    <div class="header">
        <i class="el-icon-arrow-left"></i>
        <p>确认订单</p>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
    .header{
        width: 100%;height: .4rem;
        background: #30323E;
        i{
            float: left;
            text-indent: .12rem;
            line-height: .4rem;
            color: white;
        }
        p{
            line-height: .4rem;
            text-align: center;
            color: white;
        }
    }
</style>
