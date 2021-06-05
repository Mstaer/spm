<template>
    <div class="xianqin">
        <nvabar class="navbar">
            <div class="conm1" slot="conm">详情页</div>
            </nvabar>
        商品详情
    </div>
</template>


<script>
import nvabar from "../../components/common/nvabar/nvabar";

export default {
    name:"xianqin",
    data() {
        return {
            id:null
        }
    },
    created() {
        this.id=this.$route.params.id
        console.log(this.id);
    },
    components:{
        nvabar
       
    }
}
</script>


<style >
.xianqin{
    padding-top: 44px;
}
.nvabar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
    .conm1{
        background-color: #fff;
        color: #666;
    }
</style>