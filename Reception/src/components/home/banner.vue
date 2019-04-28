<template>
    <div id="banner">
        <!-- Swiper -->
        <div class="swiper-container"style="width: 100%;height: 100%;">
            <div class="swiper-wrapper"style="width: 100%;height: 100%;">
                <div class="swiper-slide"style="width: 100%;height: 100%;">
                    <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/33/33074.jpg" alt=""style="width: 100%;height: 100%"width="100%"height="100%">
                </div>
                <div class="swiper-slide"style="width: 100%;height: 100%;">
                    <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/33/33071.png" alt=""style="width: 100%;height: 100%"width="100%"height="100%">
                </div>
                <div class="swiper-slide"style="width: 100%;height: 100%;">
                    <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/33/33041.png" alt=""style="width: 100%;height: 100%"width="100%"height="100%">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import '../../../node_modules/swiper/dist/css/swiper.min.css'

    export default {
        name: "banner",
        data(){
            return{

            }
        },
        created() {

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

<style scoped>
    #banner{
        width: 95%;
        height: 1.79rem;
        /*background-color: #00a2ca;*/
        margin: 0 auto;
        border-radius: .1rem;
        overflow: hidden;
    }
</style>
