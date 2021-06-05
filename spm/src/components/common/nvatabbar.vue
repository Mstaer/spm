<template>
    <div class="nvatabbar">
        <div v-for="(i,index) in biaoti" :key="i" :class="{yanshi:index===id}" @click="show(index)"><span >{{i}}</span></div>
    </div>
</template>

<script>
export default {
    name:"nvatabbar",
    props:{
        biaoti:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            id:0
        }
    },
    methods: {
        show(index){
             this.id = index
              this.$emit("shijianmingzi",index)
            
        }
    },
}
</script>

<style >
    .nvatabbar{
        display: flex;
        border-top:5px solid rgb(241, 234, 234)  ;
    }
    .nvatabbar div{
        flex: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
    }
    .nvatabbar div span{
        padding: 5px;
    }
    .yanshi  span{
        color:pink;
        border-bottom:2px solid pink ;
        

    }
</style>