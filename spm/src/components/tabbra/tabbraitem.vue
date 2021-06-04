<template >
  <div class="tab-bra-item" @click="jiantin">
    <div v-if="show"><slot name="itemimg"></slot></div>
    <div v-else><slot name="itemimgs"></slot></div>
    <div :class="{ ys: show }"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbraitem",

  props:{
    path:{
      type:String
    }
  },
  data() {
    return {
      // show: true,
     
    };
  },
  computed:{
     show(){
       return this.$route.path.indexOf(this.path) !== -1
      // return false
      // console.log(this.$route.path);
      // console.log(this.path)
        // return false
     }
  },
   methods: {
      jiantin(){
        // console.log("aaa")
        this.$router.push(this.path)
        // this.$router.push(this.path)
        // console.log(this.path)
        // console.log(this.$router.replace)
        // console.log(this.path)
      }
   },
};
</script>

<style >
.tab-bra-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 15px;
}
.tab-bra-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.ys {
  color: rgb(35, 147, 223);
}
</style>