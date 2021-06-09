<template >
  <div>
      <nvabar> <div slot="conm"> 分类</div></nvabar>
   <feileitabbar></feileitabbar>
  </div>
</template>

<script>
import feileitabbar from "./fenleitabbar"
import nvabar from '../../components/common/nvabar/nvabar.vue'

export default {
  name: "fenlei",

   components: {
    feileitabbar,
    nvabar
  },
};
</script>

<style>
</style>