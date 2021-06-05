<template>
    <div>
        {{$store.state.counter}}
        <button @click="add()">+</button>
        <button @click="sub()">-</button><br>
        {{$store.getters.addjiage}}
    </div>
</template>

<script>
export default {
    name:"feileitabbar",
    methods: {
        add(){
            this.$store.commit("add") /**修改全局变量的方法 */
        },
        sub(){
            this.$store.commit("sub") /** 修改全局变量的方法 */
        }
    },
}
</script>

<style >
    
</style>