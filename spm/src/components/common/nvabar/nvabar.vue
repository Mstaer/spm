<template >
    <div class="nvabar">
        <div class="lete"><slot name="lete"></slot></div>
        <div class="conm"> <slot name="conm"></slot></div>
       <div class="righ"><slot name="righ"></slot></div>
        
    </div>
</template>

<script>
export default {
    name:"nvabar"
}
</script>

<style >
    .nvabar {
  height: 44px;
  line-height: 44px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: center;
  color: #fff;
}

.conm {
  flex: 1;
  background-color: rgb(35, 147, 223);
}
</style>