<template>
    <div id="Footer">
        <div @click="switchRouter('/')">
            <p class="el-icon-s-shop":style="coler"></p>
            <p :style="coler">
                商店
            </p>
        </div>
        <div @click="switchTo('/')">
            <p class="el-icon-menu":style="coler2"></p>
            <p :style="coler2">
                分类
            </p>
        </div>
        <div @click="switchRouter('/cart')">
            <p class="el-icon-shopping-cart-full":style="coler3"></p>
            <p :style="coler3">
                购物车
            </p>
        </div>
        <div @click="switchRouter('/my')">
            <p class="el-icon-user" :style="coler4"></p>
            <p :style="coler4">
                个人
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return{
                coler:{
                    color:'black',
                },
                coler2:{
                    color:'',
                },
                coler3:{
                    color:'',
                },
                coler4:{
                    color:'',
                }
            }
        },
        methods:{
            switchRouter(path){
                // black
                this.$router.push(path);
                switch(path)
                {
                    case '/':
                        this.coler.color = 'black'
                        this.coler2.color = ''
                        this.coler3.color = ''
                        this.coler4.color = ''
                        break;
                    case '/cart':
                        this.coler.color = ''
                        this.coler2.color = ''
                        this.coler3.color = 'black'
                        this.coler4.color = ''
                        break;
                    case '/my':
                        this.coler.color = ''
                        this.coler2.color = ''
                        this.coler3.color = ''
                        this.coler4.color = 'black'
                        break;
                    default:
                }
            }
        }
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
                color: silver;
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
