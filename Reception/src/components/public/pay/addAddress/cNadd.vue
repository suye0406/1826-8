<template>
    <div class="cNadd">
        <!--<i class="el-icon-plus"></i>-->
        <!--<p>新增收货地址</p>-->
        <p>
            <span>{{this.$store.state.addres.username}}---</span>
            <span>{{this.$store.state.addres.address}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "cNadd",
        data(){
            return{
                addres:[],
            }
        },
        created() {
          this.$store.dispatch('addres')
            console.log(this.$store.state.addres);
        }
    }
</script>

<style scoped lang="scss">
    .cNadd{
        width: 100%;
        height: .42rem;
        background: white;
        i{
            float: left;
            text-indent: .12rem;
            line-height: .42rem;
        }
        p{
            text-align: left;
            line-height: .42rem;
            text-indent: .12rem;
            span{
                line-height: .42rem;
            }
        }
    }
</style>
