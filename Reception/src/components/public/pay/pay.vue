<template>
    <div id="pay">
        <Header></Header>
        <c-nadd></c-nadd>
        <div style="width: 100%;height: .01rem;background-color: #e5e5e5;margin-top: .05rem;margin-bottom: .05rem;"></div>
        <Content></Content>
        <PayPass></PayPass>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./header";
    import CNadd from "./addAddress/cNadd";
    import Content from "./content";
    import Footer from "./footer";
    import PayPass from "./payPass";
    export default {
        name: "pay",
        components: {PayPass, Footer, Content, CNadd, Header},
        data(){
            return{
                show:true
            }
        },
        methods:{

        },
        created() {
            console.log(this.$store.state.payState);
            // this.show = this.$store.state.payState;
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    #pay{
        background-color: #F1F1F1;
        width: 100%;
        height: 100%;
    }
</style>
