<template>
  <div class="xqbiaoti">
    <div class="biaoti">{{ spbiaoti.name }}</div>
    <div class="jiage">￥：{{ spbiaoti.jiage }}~99</div>
    <div class="baoyou">
      <i class="iconfont icon-iov-rider">全国包邮</i>
      <i class="iconfont icon-iov-done">7天无理由退货</i
      ><i class="iconfont icon-iov-done">分期付款</i>
    </div>
    <div class="shanjia">
      <p>
        <img
          src="https://s5.mogucdn.com/b7/pic/150414/rb5x4_iezdqmdgmvtgczrygazdambqmmyde_320x320.jpg_100x100.jpg"
          alt=""
        />
        <i class="iconfont icon-iov-star"></i
        ><i class="iconfont icon-iov-star"></i
        ><i class="iconfont icon-iov-star"></i>
      </p>
      <p class="dianpu">店铺评价</p>
      <div>
        <p>
             <i class="iconfont icon-iov-star"></i
          >
          <i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star">物流</i>
        </p>
        <p>
            
          <i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star">服务</i>
        </p>
        <p>
          <i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star"></i
          ><i class="iconfont icon-iov-star">好评</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xqbiaoti",
  props: {
    spbiaoti: {
      type: Object,
      defaul() {
        return {};
      },
    },
  },
 
};
</script>

<style >
.xqbiaoti{
    padding:5px  ;
}
.biaoti {
  font-size: 20px;
}
.jiage {
  font-size: 40px;
  color: red;
}
.baoyou {
  border-bottom: 1px solid rgb(212, 211, 211);
  display: flex;
  flex-flow: row wrap;
  text-align: center;

}
.baoyou i {
  flex: 1;
}
.shanjia {
  padding-top: 3px;
  display: flex;
  flex-flow: row wrap;
   text-align: center;
   border-bottom: 1px solid rgb(212, 211, 211);
}
.shanjia p:nth-child(1) {
  color: red;
}

.shanjia p {
  flex: 1;
}
.dianpu{
   line-height: 70px;
}
</style>