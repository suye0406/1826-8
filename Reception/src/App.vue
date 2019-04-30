<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <Footer></Footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Footer from '@/components/public/footer'
  export default {
    data(){
      return{

      }
    },
    components:{
      Footer

    }
  }
</script>

<style lang="scss">
  /**{*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  /*padding: 30px;*/
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .editor{
    width: 100%;
    height: 100%;
    /*background-color: chartreuse;*/
    margin-bottom: .46rem;
    img{
      width: 100%!important;
    }
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
</style>
