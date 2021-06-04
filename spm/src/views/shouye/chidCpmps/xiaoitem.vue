<template>

  <div class="xiaotime">
   
    <div>
      <a href="#">
        <img src="../../../assets/img/b1.png" alt="" />
        <span>经典橘色包包</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b2.png" alt="" />
        <span>时尚高跟鞋</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b3.png" alt="" />
        <span>白色耐脏运动鞋</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b4.png" alt="" />
        <span>潮流床单套装</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b3.png" alt="" />
        <span>白色耐脏运动鞋</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b1.png" alt="" />
        <span>经典橘色包包</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b4.png" alt="" />
        <span>潮流床单套装</span>
      </a>
    </div>
    <div>
      <a href="#">
        <img src="../../../assets/img/b2.png" alt="" />
        <span>时尚高跟鞋</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiaoitem",
};
</script>

<style >
.xiaotime{
    display: flex;
    flex-flow: row wrap;
    margin: 30px 10px;
    justify-content: space-around;
}
.xiaotime div{
    
    width: 23%;
    /* height: 50px; */
    font-size: 12px;
    text-align: center;
    margin-bottom:10px ;
}
.xiaotime div img{
    width: 100%;
    height: 50px;
     border-radius: 50%;
    
}
 .bt{
     width: 100vw;
     height: 30px;
     
     text-align: center;
     margin-bottom:20px ;
 }
</style>