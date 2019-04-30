<template>
    <div class="banner">
        <!-- Swiper -->
        <div class="swiper-container"style="width: 100%;height: 100%;">
            <div class="swiper-wrapper"style="width: 100%;height: 100%;">
                <div class="swiper-slide"style="width: 100%;height: 100%;">
                    <img src="" alt=""style="width: 100%;height: 100%;"width="100%"height="100%">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import '../../../../node_modules/swiper/dist/css/swiper.min.css';
    import axios from 'axios';

    export default {
        name: "banner",
        data(){
            return{
                imgTitl:'http://39.96.76.3/HuiWanZhong/public/uploads/',
                banner:[],
            }
        },
        created() {
            this.banner = JSON.parse(sessionStorage.getItem('shopList'));
            console.log(this.banner);
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
            });
        }
    }
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: 3.5rem;
        /*background-color: chartreuse;*/
    }
</style>
