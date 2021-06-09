<template>
    <div>
       
        <swiper  :options="swiperOptions">
    <swiper-slide v-for="i in lunimg" :key="i">
        <img :src="i">
    </swiper-slide>
    
     
    
    
    
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
    name:"xianqinlunbo",
    props:{
        lunimg:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination:".swiper-pagination",
                loop:true, /**循环 */
                autoplay:3000 /**自动轮播 */
            }
            
        }
    }
}
</script>

<style >
     .swiper-slide img{
     width: 100%;
     height: 350px;
 }
</style>