<template>
    <div id="footer">
        <div>
            <div>
                <input type="checkbox"@click="all"v-model="$store.state.allchefox">
            </div>
            <p style="float: left;line-height: .542rem;">全选</p>
        </div>
        <div style="display: flex;justify-content: space-between;">
            <p style="line-height: .542rem;margin-left: .2rem;margin-right: .1rem;">合计 {{$store.getters.totalPrice}} 积分</p>
            <div style="width: 1rem;height: 100%;background: black;float: right;position: relative;">
                <p style="line-height: .542rem;color: white;text-align: center;position: absolute; position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);"@click="pay">结算</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return{

            }
        },
        created() {

        },
        methods:{
            all(){
                this.$store.commit("ALLCHE",event.currentTarget.checked)
            },
            pay(){
                // this.$store.commit("PAYMENT");
                this.$store.commit("PAYMENT");
                this.$router.push({name:'Pay'});
            }
        }
    }
</script>

<style scoped lang="scss">
    #footer{
        width: 100%;
        height: .542rem;
        box-shadow: .01rem .01rem .0rem .0rem;
        /*background: #666666;*/
        background-color: white;
        position: fixed;
        bottom: .46rem;
        display: flex;
        justify-content: space-between;
        div{
            height: 100%;;
        }
        div:nth-child(1){
            width: 30%;
            /*background: #666666;*/
            /*position: relative;*/
            div{
                width: .4rem;
                height: 100%;
                position: relative;
                float: left;
                /*justify-content: space-between;*/
                input{
                    line-height: 1.11rem;
                    position: absolute;
                    top: 40%;
                    -webkit-transform: translate(-40%);
                    transform: translate(-40%);
                }
            }
        }
        div:nth-child(2){
            width: 70%;
            /*background: chartreuse;*/
            display: flex;
        }
    }
</style>
