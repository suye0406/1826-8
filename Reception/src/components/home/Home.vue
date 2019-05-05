<template>
    <div id="Home">
        <Header></Header>
        <Banner></Banner>
        <Today></Today>
        <New></New>
    </div>
</template>

<script>
    import Header from "./header";
    import Banner from "./banner";
    import Today from "./today";
    import New from "./new";
    import axios from 'axios';

    export default {
        name: "Home",
        components: {New, Today, Banner, Header},
        created() {
        }
    }
</script>

<style scoped>

</style>
