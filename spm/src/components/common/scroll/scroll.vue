<template>
  <div class="wrapper" ref="wrapper">
    <div><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  scroll: null,
  props: {
    probetype: {
      type: Number,
      default: 0,
      
    },
    pullupload:{
      type:Boolean,
      default:false
    }
  },

  mounted() {
    
      this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probetype,
      click: true,
      pullUpLoad:this.pullupload ,
      // wheel: true,
      scrollbar: true,
      observeDOM: true,
      observeImage: true
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit('scroll',position)
    });
    this.scroll.scrollTo(0, 0);
    this.scroll.on('pullingUp',()=>{
      // console.log("加载");
      this.$emit('pullingUp')
    })
  
    
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishpullup(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style >
</style>