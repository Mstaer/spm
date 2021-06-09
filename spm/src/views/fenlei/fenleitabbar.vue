<template>
  <div class="fenleitabbar">
    <ul class="leimu">
      <li
        v-for="(i, index) in spleimu"
        :key="index"
        class="leimubiaoti"
        @click="djleimu(index)"
        :class="{lmyanshi:show==index}"
      >
        {{ i }}
      </li>
    </ul>
    <!-- {{$store.state.counter}}
        <button @click="add()">+</button>
        <button @click="sub()">-</button><br>
        {{$store.getters.addjiage}} -->
  </div>
</template>

<script>
export default {
  name: "feileitabbar",
  props: {
    spleimu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
      return {
          show:0
      }
  },
  methods: {
    djleimu(index) {
      this.show = index
    },

    // add(){
    //     this.$store.commit("add") /**修改全局变量的方法 */
    // },
    // sub(){
    //     this.$store.commit("sub") /** 修改全局变量的方法 */
    // }
  },
};
</script>

<style scoped >
.fenleitabbar{
    /* height: 100vh; */
}
.leimu {
  width: 25vw;
  background-color: rgb(250, 250, 250);
  margin: 0 0;
}
.leimubiaoti {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-left: 2px;
}
.lmyanshi{
    border-left: 2px solid rgb(33, 120, 219);
    background-color: #fff;
    color:rgb(33, 120, 219);
}
</style>