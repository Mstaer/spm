<template>
    <div class="xiaoxi" @click="fkz">
        <div>  <img src="../../assets/img/w3.png" alt=""> 我的消息</div>
        <div> <img src="../../assets/img/w4.png" alt=""> 积分商城</div>
        <div> <img src="../../assets/img/w6.png" alt="">会员卡</div>
    </div>
</template>

<script>
export default {
    name:"xiaoxi",
    methods: {
        fkz(){
             this.$router.push("/kfz")
        }
    },
}
</script>

<style>
    .xiaoxi{
        border-bottom: 10px solid rgb(245, 238, 238) ;
    }
    .xiaoxi div{
        padding: 5px;
         height: 40px;
         border-bottom: 2px solid rgb(245, 238, 238) ;
         /* line-height: 40px; */
    }
    .xiaoxi img{
        width: 20px;
        height: 20px;
        /* margin-top:10px ; */
    }
</style>