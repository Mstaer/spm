<template>
  <div class="xianqin">
    <xianqintabbar class="xianqintabbar" ref="xqtab" ></xianqintabbar>
    <scroll  class="content"
      ref="scroll"
      :probetype="3"
      @scroll="scroll"
      :pullupload="true"
      >
      <xianqinlunbo :lunimg="topimg"></xianqinlunbo>
      <xqbiaoti :spbiaoti="spshuju"></xqbiaoti>

      <chanshu :cs="chanshu" ref="chanshu"></chanshu>
    </scroll>
    <backtop
      class="backtop"
      @click.native="backclick"
      v-show="isshow"
    ></backtop>
    <xqnvbbar @addsp="add"></xqnvbbar>
    <tjgouwuche class="tjgouwuche" v-show="showtj"></tjgouwuche>
  </div>
</template>


<script>
import scroll from "../../components/common/scroll/scroll.vue";
import backtop from "../../components/content/backtop/backtop.vue";

import xianqintabbar from "./xianqintime/xianqintabbar.vue";
import xianqinlunbo from "./xianqintime/xianqinlunbo.vue";
import xqbiaoti from "./xianqintime/xqbiaoti.vue";
import tjgouwuche from './xianqintime/tjgouwuche.vue'

import chanshu from "./xianqintime/canshu.vue";
import xqnvbbar from "./xianqintime/xqnvbbar.vue";

import { getshouyedata } from "../../network/shouye";
export default {
  name: "xianqin",

  data() {
    return {
      id: null,
      topimg: [
        "https://s11.mogucdn.com/mlcdn/55cf19/210504_6l00caebjhkh8fddk2jha4c50d1i2_640x960.jpg_750x1000.v1cAC.81.jpg",
        "https://s5.mogucdn.com/mlcdn/55cf19/210504_602b341a5f445fjb917e4j3h939e5_640x960.jpg_750x1000.v1cAC.81.jpg",
        "https://s11.mogucdn.com/mlcdn/55cf19/210504_0g5bkd6jk12cc352e1a8le849jfj7_640x960.jpg_750x1000.v1cAC.81.jpg",
        "https://s11.mogucdn.com/mlcdn/55cf19/210504_6b48k1dl0gkbbkc93fbh6ghjkbek1_640x960.jpg_750x1000.v1cAC.81.jpg",
      ],
      spshuju: {},
      chanshu: [
        "https://s11.mogucdn.com/mlcdn/c45406/180811_64g84k401ah7jg97gjcl5bi1h6if2_750x1043.jpg_750x999.jpg",
        "https://s11.mogucdn.com/mlcdn/c45406/180811_5dd7k9ke3h16g7375jd9c8dia4eg3_750x568.jpg_750x999.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/180811_5ib202c263ahgfcl06hk31k7f30eg_750x672.jpg_750x999.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/180811_7dll657dk9d6j018kce9ggbfb24dh_750x640.jpg_750x999.jpg",
        "https://s5.mogucdn.com/mlcdn/c45406/180811_3h2j9b9gi2e908580llikfe9gcchl_750x740.jpg_750x999.jpg",
        "https://s11.mogucdn.com/mlcdn/c45406/180811_6eh77294a4fl0b8jh4e01247l0697_750x726.jpg_750x999.jpg",
      ],
      chanshutop:0,
      isshow: false,
      ischanshu:false,
      showtj:false
    };
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    getshouyedata().then((res) => {
      this.spshuju = res.data;
    });
  },
  mounted() {
      this.chanshutop = this.$refs.chanshu.$el.offsetTop
    //   console.log(this.chanshutop);
  },
  components: {
    scroll,
    xianqintabbar,
    xianqinlunbo,
    xqbiaoti,
    chanshu,
    xqnvbbar,
    backtop,
    tjgouwuche
  },
  methods: {
    //   yanshi1(index){
            
    //         if (index==1){
    //             console.log(":111");
                
                
    //         }
    //   },

    add() {
    //   console.log("1111");
    //   this.$store.commit("add");
        console.log("加入购物车成功");
        this.showtj = true
        setTimeout(()=>{
          this.showtj = false
        },2000)
        const obj1 = {}
        obj1.tupian= this.topimg[0]
        obj1.biaoti = this.spshuju.name
        obj1.jiage = this.spshuju.jiage
        obj1.id=this.spshuju.id
        
        // console.log(obj1);
        // this.$store.commit('add',obj1)
        this.$store.dispatch('add',obj1)
    },
    backclick() {
    //   console.log("111");
      this.$refs.scroll.scrollTo(0, 0);
    },
    scroll(position) {
      // console.log(position);
      this.isshow = -position.y > 1000;
      this.ischanshu= -position.y > this.chanshutop
      if (-position.y > this.chanshutop) {
          this.$refs.xqtab.yanshi=1
        //   console.log(this.$refs.xqtab.yanshi);
      }
      if (-position.y < this.chanshutop) {
          this.$refs.xqtab.yanshi=0
        //   console.log(this.$refs.xqtab.yanshi);
      }
      
    },
    // yanshi1(index){
    //     console.log(index);
        
    //     this.$refs.scroll.scroll.on("scroll", (position) => {
     
    //     position.y=this.chanshutop
    //     console.log(position.y);
    // })
    // }
  },
};
</script>


<style scoped >
.xianqin {
  height: 100vh;
}
.xianqintabbar {
  border-bottom: 1px solid rgb(175, 172, 172);
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;

  margin-top: 44px;
}
.backtop {
  position: fixed;
  bottom: 60px;
  right: 10px;
}
.tjgouwuche {
  position: fixed;
  top: 50%;
  right: 30%;
  background-color: skyblue;
  font-size: 20px;
  text-align: center;
}
</style>