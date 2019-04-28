<template>
    <div id="Footer">
        <div>
            <p class="el-icon-s-shop"></p>
            <p>
                商店
            </p>
        </div>
        <div>
            <p class="el-icon-menu"></p>
            <p>
                分类
            </p>
        </div>
        <div>
            <p class="el-icon-shopping-cart-full"></p>
            <p>
                购物车
            </p>
        </div>
        <div>
            <p class="el-icon-user"></p>
            <p>
                个人
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped lang="scss">
    #Footer{
        width: 100%;
        height: .46rem;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 0px;
        box-shadow: .01rem .01rem .01rem .01rem;
        /*background-color: black;*/
        div{
            p{
                color: black;
            }
            p:nth-child(1){
                margin-top: .05rem;
            }
        }
        div:nth-child(1){
            margin-left: .15rem;
        }
        div:nth-child(4){
            margin-right: .15rem;
        }
    }
</style>
