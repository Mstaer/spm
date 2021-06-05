<template >
  <div class="shouye">
    <nvabar class="nvabar">
      <!-- <div slot="lete">左边</div> -->
      <div slot="conm">购物街</div>
      <!-- <div slot="righ">右边</div> -->
    </nvabar>
    <lunbo></lunbo>
    <recom></recom>
    <xiaoitem class="xiaoitem"></xiaoitem>
    <nvatabbar
      class="nvatabbar"
      :biaoti="['流行', '新款', '精选']"
      @shijianmingzi="shijian"
    ></nvatabbar>
    <!-- {{shuju}} -->

    <shanpin :shuju1="pop[biaoshi].list"></shanpin>
  </div>
</template>

<script>
import lunbo from "./chidCpmps/lunbo";
import recom from "./chidCpmps/recom";

import nvabar from "../../components/common/nvabar/nvabar";
import xiaoitem from "./chidCpmps/xiaoitem";
import nvatabbar from "../../components/common/nvatabbar";

import shanpin from "../../components/common/shanpin";

// import { request } from "../../network/request";
import { getshouyedata } from "../../network/shouye";
//导入封装好的 贾科斯网络请求方法

export default {
  name: "shouye",
  components: {
    nvabar,
    lunbo,
    recom,
    xiaoitem,
    nvatabbar,
    shanpin,
  },
  created() {
    getshouyedata().then((res) => {
      // console.log(res);
      // this.liux.list = res.data;
      this.pop["liux"].list = res.data;
      // this.liux.list.push(...res.data)
      // console.log(this.liux.list);
    }),
      getshouyedata().then((res) => {
        // console.log(res);
        // this.xink.list = res.data;
        this.pop["xink"].list = res.data;
        // this.liux.list.push(...res.data)
        // console.log(this.liux.list);
      }),
      getshouyedata().then((res) => {
        // console.log(res);
        // this.jinx.list = res.data;
        this.pop["jinx"].list = res.data;
        // this.liux.list.push(...res.data)
        // console.log(this.liux.list);
      });
    // getshouyedatas("pop",1).then(res=>{
    //   console.log(res);

    // })

    /* 生命周期函数 用来页面加载前去后端请求数据 */
    // request({
    //     使用贾科斯网络请求
    //   url: "/shouye",
    // })
    //   .then((res) => {
    //     this.shuju = res.data;
    //       console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  data() {
    return {
      pop: {
        liux: { page: 0, list: [] },
        xink: { page: 0, list: [] },
        jinx: { page: 0, liat: [] },
      },
      biaoshi: "liux",
      // shuju:this.liux.list
    };
  },

  methods: {
    shijian(event) {
      // console.log(event);
      switch (event) {
        case 0:
          this.biaoshi = "liux";
          // console.log(this.biaoshi);
          break;
        case 1:
          this.biaoshi = "xink";
          // console.log(this.biaoshi);
          break;
        case 2:
          this.biaoshi = "jinx";
          // console.log(this.biaoshi);
          break;
      }
    },
  },
};
</script>


<style>
.shouye {
  padding-top: 44px;
  
}
.nvabar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.nvatabbar {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>