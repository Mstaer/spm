<template >
  <div class="wrapper" ref="scroll">
    <nvabar> <div slot="conm"> 我的主页</div></nvabar>
       <!-- <scroll></scroll> -->
  <logintb></logintb>
  <xiaoxi></xiaoxi>
  <gwclei></gwclei>
  </div>
</template>

<script>
// import BetterScroll from "better-scroll";
// import BScroll from '@better-scroll/core'
// import PullUp from '@better-scroll/pull-up'
// import scroll from '../../components/common/scroll/scroll.vue'
import nvabar from '../../components/common/nvabar/nvabar.vue'
import logintb from './loginbt.vue'
import xiaoxi from './xiaoxi.vue'
import gwclei from './gwclei.vue'

export default {
     
  name: "wode",

  components:{
      // scroll
      nvabar,
      logintb,
      xiaoxi,
       gwclei
  },
 
 
  data() {
      return {
         scroll:null,
                //  isPullUpLoad: false,

          
      }
  },
  created() {
      
   
  },
  mounted() {
    //    BScroll.use(PullUp),
    //    this.scroll= new BScroll(this.$refs.scroll, {
    //       probeType:3,
    //     //   click:true,
    //       pullUpLoad:true,
    //     //    isPullUpLoad: true,
    // });
    // this.scroll.on('scroll',(position)=>{
    //     console.log(position);
    // })
    // this.scroll.on('pullingUp', ()=>{
    //     // this.isPullUpLoad= true,
    //     console.log("1111");
       
    // })
   
  },
  methods: {
      
  },
};
</script>

<style scoped>
/* .wrapper{
    height: 200px;
    background-color: rgb(182, 172, 172);
    overflow: hidden;
} */

</style>