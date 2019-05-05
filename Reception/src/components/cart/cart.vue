<template>
    <div id="cart">
        <Header style="opacity: 0;"></Header>
        <Header style="position: fixed;top: 0;background-color: white;z-index: 2"></Header>
        <List style="margin-bottom: 1rem;"></List>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./header";
    import List from "./list";
    import Footer from "./footer";
    export default {
        name: "cart",
        components: {Footer, List, Header}
    }
</script>

<style scoped lang="scss">
    #cart{
        width: 100%;
        height: 100%;
        background-color: aliceblue;
    }
</style>
