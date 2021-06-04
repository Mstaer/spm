<template>
    <div class="nvatabbar">
        <div>流行</div>
        <div>新款</div>
        <div>精选</div>
    </div>
</template>

<script>
export default {
    name:"nvatabbar"
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
</style>