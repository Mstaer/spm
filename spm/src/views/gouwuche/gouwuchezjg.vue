<template>
  <div class="gouwuchezjg">
    <div>总价格:{{ jiage }}</div>
    <div>去结算（{{ shul }}）</div>
  </div>
</template>

<script>
export default {
  name: "gouwuchezjg",

  computed: {
    shul() {
      // console.log(this.$store.state.shanpins);
      return this.$store.state.shanpins.length;
    },
    jiage() {
      // console.log(this.$store.getters.addjiage());
      // console.log(this.$store.dispatch);
      // return this.$store.dispatch('addjiage')
      // console.log(this.$store.state.shanpins.count);
      // console.log(this.$store.state.shanpins);
      if (this.$store.state.shanpins.length == 0 || this.$store.state.shanpins[0].chaeck==false) {
        return 0;
      } else {
        return (
          this.$store.state.shanpins[0].count *
          this.$store.state.shanpins[0].jiage
        );
      }
    },
  },
};
</script>


<style >
.gouwuchezjg {
  height: 40px;
  width: 100vw;
  background-color: powderblue;
  display: flex;
  align-content: center;
  justify-content: space-between;
  text-align: center;
}
.gouwuchezjg div {
  line-height: 40px;
}
.gouwuchezjg div:nth-child(2) {
  background-color: sandybrown;
}
</style>