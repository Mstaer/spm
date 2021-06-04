<template >
    <tabbra>
      <tabbraitem path="/shouye">
        <!-- <tabbraitems></tabbraitems> -->
        <img   slot="itemimg" src="../../assets/img/shouye1.png" alt="">
        <img slot="itemimgs" src="../../assets/img/shouye2.png" alt="">
        <div slot="itemtext">首页</div>
      </tabbraitem>
      <tabbraitem path="/fenlei">
        <img slot="itemimg" src="../../assets/img/fl1.png" alt="">
         <img slot="itemimgs" src="../../assets/img/fl2.png" alt="">
        <div slot="itemtext">分类</div>
      </tabbraitem>
      <tabbraitem path="/gouwuche">
        <img slot="itemimg" src="../../assets/img/gwc1.png" alt="">
         <img slot="itemimgs" src="../../assets/img/gwc2.png" alt="">
        <div slot="itemtext">购物车</div>
      </tabbraitem>
      <tabbraitem path="/wode">
        <img slot="itemimg" src="../../assets/img/wd1.png" alt="">
         <img slot="itemimgs" src="../../assets/img/wd2.png" alt="">
        <div slot="itemtext">我的</div>
      </tabbraitem>
      
    </tabbra>
</template>

<script>
import tabbra from "../tabbra/tabbra.vue";
import tabbraitem from "../tabbra/tabbraitem.vue";
export default {
    name:"maintabbra",
    components:{
        tabbra,
        tabbraitem
    }
    
}
</script>

<style >
    
</style>