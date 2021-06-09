<template >
  <div class="feilei">
      <nvabar> <div slot="conm" > 商品分类</div></nvabar>
      <scroll class="con">
        <feileitabbar  :spleimu="leimu" ></feileitabbar>
      </scroll>
   
  </div>
</template>

<script>
import feileitabbar from "./fenleitabbar"
import nvabar from '../../components/common/nvabar/nvabar.vue'

import scroll from '../../components/common/scroll/scroll.vue'

export default {
  name: "fenlei",

   components: {
    feileitabbar,
    nvabar,
    scroll
  },
  data() {
    return {
      leimu:['上衣','裤子','裙子','内衣','女鞋','男装','包包','运动','配饰','美妆','个护','男装','包包','运动']
    }
  },
};
</script>

<style scoped>
.feilei{
  height: 100vh;
  /* margin-top: 44px; */
}
.con{
   /* margin-top: 44px; */
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>