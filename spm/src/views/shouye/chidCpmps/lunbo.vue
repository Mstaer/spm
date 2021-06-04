<template >
    <div>
        <swiper  :options="swiperOptions">
    <swiper-slide>
        <img src="../../../assets/img/swiper-imges/m2.jpg">
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/img/swiper-imges/m3.jpg">
    </swiper-slide>
     <swiper-slide>
        <img src="../../../assets/img/swiper-imges/m4.jpg">
    </swiper-slide>
     <swiper-slide>
        <img src="../../../assets/img/swiper-imges/m5.jpg">
    </swiper-slide>
    
    
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
</template>


<script>
// import Swiper from  "swiper"
// var mySwiper = new Swiper('.swiper-container', { 
//      pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//       },

// });

export default {
    name:"nvabar",
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                loop:true, /**循环 */
                autoplay:3000 /**自动轮播 */
            }
        }
    }
};


</script>

<style>
 .swiper-slide img{
     width: 100%;
     height: 200px;
 }

</style>