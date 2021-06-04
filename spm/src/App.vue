<template>
  <div id="app">
    <router-view></router-view>
    <maintabbra></maintabbra>
  </div>
</template>

<script>

// import tabbraitems from "./components/tabbra/tabbraitems.vue";
import maintabbra from "./components/maintabbra/maintabbra.vue"

export default {
  name: "App",
  components: {
    maintabbra
    // tabbraitems,
  },
  data() {
    return {
     
    }
  },
};
</script>
  
<style>
@import "./assets/css/base.css";
</style>
