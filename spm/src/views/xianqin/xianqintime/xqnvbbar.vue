<template>
    <div class="xqnvbbar" @click="addsp">
        <div class="xqgouwuche">加入购物车</div>
        <div class="xqgoumai">购买</div>
    </div>
</template>

<script>
export default {
    name:"xqnvbbar",
   methods: {
       addsp(){
        //    console.log("111");
           this.$emit("addsp")
       }
   },
}
</script>

<style >
    .xqnvbbar{
        border-top:1px solid rgb(204, 198, 198) ;
        width: 100vw;
        height: 50px;
        background-color: #fff;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        flex-flow: row wrap;
    }
    .xqnvbbar div {
        flex: 1;
         text-align: center;
        line-height: 50px;
    }
    .xqgouwuche{
       background-color: salmon;
    }
    .xqgoumai{
        background-color: rgb(20, 107, 236);
    }
</style>