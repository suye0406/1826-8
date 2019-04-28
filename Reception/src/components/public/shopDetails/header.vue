<template>
    <div class="header">
        <div>
            <p class="el-icon-position"></p>
            <p>蓝狐</p>
            <p>登陆</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
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
</style>
