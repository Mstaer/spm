<template>
    <div class="login">
        <div>login..</div>
         <form action="">
             账号<input type="text" value="账号"><br>
                密码<input type="text" value="密码"><br>
         </form>
    </div>
</template>

<script>
export default {
    name:"login"
}
</script>

<style scoped>
    .login{
        height: 100vh;
        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;
    }
</style>