<template >
    <div class="gouwuche">
         <nvabar>
             <div slot="conm">购物车({{shul}})</div>
         </nvabar>
         <scroll :probetype="3" class="content" :pullupload="true"    >
             <gouwuchesp @xuanzhong="xuanz" ref="gouwuchesp"></gouwuchesp>
         </scroll>
        <gouwuchezjg class="gouwuchezjg"></gouwuchezjg>
         <!-- {{$store.state.shanpins}} -->
    </div>
</template>

<script>
import nvabar from '../../components/common/nvabar/nvabar.vue'
import scroll from '../../components/common/scroll/scroll.vue'

import gouwuchesp from './gouwuchesp.vue'
import gouwuchezjg from './gouwuchezjg.vue'
export default {
    name:"gouwuche",
    components:{
        nvabar,
        scroll,
        gouwuchesp,
        gouwuchezjg
    },
    computed:{
        shul(){
            return this.$store.state.shanpins.length
        }
    },
    methods: {
        xuanz(){
            // console.log("111");
            this.$store.state.shanpins[0].chaeck = this.$refs.gouwuchesp.shouw
        }
       
    },
}
</script>

<style scoped>
    .gouwuche{
        height: 100vh;
    }
    .content {
  height: calc(100% - 93px);
  overflow: hidden;
 
  /* margin-top: 44px; */
}
.gouwuchezjg{
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
}
</style>