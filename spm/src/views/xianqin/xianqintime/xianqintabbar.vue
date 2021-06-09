<template>
  <div>
    <nvabar class="nvabar">
        <div class="lete1" slot="lete" @click="fanhui"><i class="iconfont icon-iov-back"></i></div>
      <div class="conm1" slot="conm">
        <div v-for="(i,index) in biaoti" :key="i"  @click="yanshi1(index)"  :class="{'yangshi':yanshi===index}">{{ i }}</div>
      </div>
    </nvabar>
  </div>
</template>

<script>
import nvabar from "../../../components/common/nvabar/nvabar";

export default {
  name: "xianqintabbar",
  data() {
    return {
      biaoti: ["商品", "参数", "评论", "推荐"],
      yanshi:0
    };
  },
  components: {
    nvabar,
  },
  methods: {
      yanshi1(index){
          this.yanshi=index
          // this.$emit("yanshi",index)
      },
      fanhui(){
          this.$router.back()
      }

  },
};
</script>

<style >
.nvabar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
  
}
.conm1 {
    display: flex;

  background-color: #fff;
  color: #666;
  padding-right:20% ;
}
.conm1 div{
    flex: 1;
    font-size: 15px;
    
}
.lete1{
    color:  #666;
    width: 20vw;
    background-color: #fff;
}
.yangshi{
    color:pink;
}

</style>