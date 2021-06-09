<template>
    <div class="canshu">
        穿戴效果
        <img v-for="i in cs" :src="i" alt="" :key="i">
        用户评价
    </div>
   
</template>

<script>
export default {
    name:"chanshu",
    props:{
        cs:{
            tyoe:Array,
            defaul() {
        return []
      }
        }
    }
}
</script>

<style >
    .canshu{
        font-size: 30px;
        font-weight: 700;
    }
    .canshu img{
        width: 100%;
        height: 400px;
    }
</style>