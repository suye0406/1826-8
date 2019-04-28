<template>
    <div id="shopDetails">
        <Header></Header>
        <Banner></Banner>
        <Conten></Conten>
        <editor></editor>
    </div>
</template>

<script>
    import Header from "./header";
    import Banner from "./banner";
    import Conten from "./conten";
    import Editor from "./editor";

    export default {
        name: "shopDetails",
        components: {Editor, Conten, Banner, Header},
        data(){
            return{
                list:[],
                id: this.$route.params.id,
            }
        },
        created() {
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    #shopDetails{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
</style>
