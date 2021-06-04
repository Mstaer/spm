<template>
  <div id="tab-bra">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "tabbra",
};
</script>


<style >
#tab-bra {
  display: flex;
  background-color: rgb(253, 244, 244);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
}


</style>