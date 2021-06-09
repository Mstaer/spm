<template>
    <div class="gwclei" >
        <div   path="/gouwuche" @click="gwc"> <img src="../../assets/img/w8.png" alt="">我的购物车</div>
        <div> <img src="../../assets/img/w9.png" alt="">下载APP</div>
        <div> <img src="../../assets/img/w10.png" alt="">设置</div>
    </div>
</template>

<script>
export default {
    name:"gwclei",
    methods: {
        gwc(){
            // console.log("11");
             this.$router.push("/gouwuche")
        }
    },
}
</script>

<style scoped>
 .gwclei div{
      border-bottom: 2px solid rgb(245, 238, 238) ;
 }
   .gwclei div{
        padding: 5px;
         height: 40px;
         border-bottom: 2px solid rgb(245, 238, 238) ;
         /* line-height: 40px; */
    }
    .gwclei img{
        width: 20px;
        height: 20px;
        /* margin-top:10px ; */
    }
</style>