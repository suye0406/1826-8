<template>
    <div id="header">
        <p>购物车</p>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
    #header{
        width: 100%;
        height: .44rem;
        /*background-color: black;*/
        margin-bottom: .1rem;
        background-color: white;
        p:nth-child(1){
            text-align: center;
            line-height: .44rem;
            color: black;
        }
    }
</style>
