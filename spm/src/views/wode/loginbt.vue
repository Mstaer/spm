<template>
    <div class="login">
        <div class="loginbt" @click="login"> 
            <div class="loginbt1"><img src="../../assets/img/w1.png" alt=""> </div>
            <div class="loginbt2"> <p>登录/注册</p> <p> <img src="../../assets/img/w2.png" alt=""> 暂无绑定手机号</p> </div> 
            <div class="loginbt3"> <i> > </i></div>
            </div>
        <div class="comlei">
            <div > <p><span>89566.00</span>元</p> <p>我的余额</p> </div>
            <div><p><span>99</span>个</p> <p>我的优惠卷</p></div>
            <div><p><span>10000.00</span>分</p> <p>我的积分</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"loginbt",
    methods: {
        login(){
            // this.$router.push("/gouwuche")
            this.$router.push("/login")
        }
    },
}
</script>

<style  scoped>
.login{
    border-bottom: 10px solid rgb(245, 238, 238) ;
}
    .loginbt{
        width: 100vw;
        height: 100px;
        background-color:rgb(35, 147, 223);
    }
    .loginbt{
        display: flex;
        flex-flow: row wrap;
        color:#fff;
    }
    .loginbt1 {
        width: 80px;
        height: 80px;
        background-color:  rgb(245, 238, 238);
        border-radius:50% ;
        margin: 5px 10px;
        text-align: center;
    }
    .loginbt1 img{
        width: 80%;
        height: 80%;
    }
    .loginbt2 img{
        width: 15px;
        height: 15px;
        flex: 1;
        
    }
    .loginbt3 {
        margin-left:auto ;
        width: 40px;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
    }
    .comlei{
        display: flex;
    }
   
    .comlei div {
        text-align: center;
        flex: 1;
        height: 100px;
        border-right:1px solid rgb(245, 238, 238) ;
        font-size: 15px;
    }
    .comlei div p span{
        color: orange;
        font-size: 25px;
        font-weight:500;
    }
    
</style>