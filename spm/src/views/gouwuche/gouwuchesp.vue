<template>
  <div class="gouwuchesp1">
    <div v-for="(i, index) in gwcsp" :key="index+1" class="gouwuchesp">
      <div class="gwc1" :class="{show:shouw}" @click="xuanz"><div class="xz"></div></div>
      <div class="gwc2"><img :src="i.tupian" alt="" /></div>
      <div class="gwc3">
        <p>{{ i.biaoti }}</p>
        <div class="gwc4">
          <i>价格：{{ i.jiage }}</i> <i>数量：{{ i.count }}</i>
        </div>
      </div>
    </div>
    <div v-for="(i, index) in gwcsp" :key="index+2" class="gouwuchesp">
      <div class="gwc1"><div class="xz"></div></div>
      <div class="gwc2"><img :src="i.tupian" alt="" /></div>
      <div class="gwc3">
        <p>{{ i.biaoti }}</p>
        <div class="gwc4">
          <i>价格：{{ i.jiage }}</i> <i>数量：{{ i.count }}</i>
        </div>
      </div>
    </div>
    <!-- <div v-for="i in gwcsp" :key="i">{{i}}</div> -->
  </div>
</template>

<script>
export default {
  name: "gouwuchesp",
//   props:{
//       shouw:{
//           type:Boolean,
//           default:false ,
//       }
//   },
  data() {
    return {
      gwcsp: this.$store.state.shanpins,
      shouw:true
      
    };
  },
  methods: {
      xuanz(){
        //   console.log("111");
        //   console.log(this.shouw);
       this.$emit("xuanzhong")
          return this.shouw = !this.shouw
      }
  },
};
</script>

<style  scoped>
.gouwuchesp1 {
  margin-top: 44px;
 
}
.gouwuchesp {
  /* height: 100px; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
   border-bottom: 2px solid #444;
}
.gouwuchesp img {
  width: 120px;
  height: 100px;
}
.xz {
  width: 20px;
  height: 20px;
  border: 2px solid rgb(173, 170, 170);
  border-radius: 50%;
  margin: auto auto;
}
.gwc1 {
  padding-left: 3px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.gwc2 {
  padding: 5px;
}
.gwc4 {
  display: flex;
  justify-content: space-around;
}
.gwc4 i:nth-child(1) {
  color: red;
}
.show div{
    background-color: pink;
}
</style>