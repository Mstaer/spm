<template>
  <div class="shanpin">
    <ul>
        <!-- <li>{{shuju1}}</li> -->
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
       <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
       <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
     <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
      <li @click="xianqin(shuju1.id)">
          <img v-lazy="shuju1.link" alt="">
          <!-- <img :src="shuju1.link" alt="" /> -->
          <span> {{"￥"+ shuju1.jiage }}</span>
          {{ shuju1.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shanpin",
  props: {
    shuju1: {
        type:NaN,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  
  methods: {
    xianqin(id){
      // console.log(id);
      // console.log("跳转");
      this.$router.push('/xianqin/'+id)
    }
  },
};
</script>

<style >
.shanpin {
  /* height: 100%; */
  /* padding-bottom: 50px; */
}
.shanpin ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.shanpin ul li {
  width: 45%;
  padding-bottom: 10px;
  font-size: 13px;
}
.shanpin span{
    color:red;
}
.shanpin ul li img {
  width: 100%;
  border-radius: 5px;
  /* height: 100px; */
}
</style>