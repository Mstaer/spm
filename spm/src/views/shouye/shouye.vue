<template >
  <div>
    <nvabar >
      <!-- <div slot="lete">左边</div> -->
      <div slot="conm">购物街</div>
      <!-- <div slot="righ">右边</div> -->
    </nvabar>
    <lunbo></lunbo>
    <recom></recom>
    <xiaoitem></xiaoitem>
    <nvatabbar></nvatabbar>
    <shanpin></shanpin>
    
  </div>
</template>

<script>
import lunbo from "./chidCpmps/lunbo"
import recom from './chidCpmps/recom'

import nvabar from "../../components/common/nvabar/nvabar"
import xiaoitem from './chidCpmps/xiaoitem'
import nvatabbar from '../../components/common/nvatabbar'

import shanpin from '../../components/common/shanpin'


export default {
  name: "shouye",
  components: {
    nvabar,
    lunbo,
    recom,
    xiaoitem,
    nvatabbar,
    shanpin
   
   
  },
   data(){
       return{
           shuju:"存放后台请求回来的数据"
       }
   }
//   created(){ /* 生命周期函数 用来页面加载前去后端请求数据 */
     
//   }
};
</script>


<style>

</style>