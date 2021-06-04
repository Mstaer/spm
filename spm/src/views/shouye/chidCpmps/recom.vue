<template>
  <div class="recom">
    <div>
      <a :href="msg[0].url">
        <img src="../../../assets/img/m1.png" alt="" />
        {{ msg[0].biaoti }}
      </a>
    </div>
    <div>
      <a :href="msg[1].url">
        <img src="../../../assets/img/m2.png" alt="" />
        {{ msg[1].biaoti }}
      </a>
    </div>
    <div>
      <a :href="msg[2].url">
        <img src="../../../assets/img/m3.png" alt="" />
        {{ msg[2].biaoti }}
      </a>
    </div>
    <div>
      <a :href="msg[3].url">
        <img src="../../../assets/img/m4.png" alt="" />
        {{ msg[3].biaoti }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recom",
  data() {
    return {
      msg: [
        {
          id: 1,
          link: "../../../assets/img/m1.png",
          url: "#",
          biaoti: "十点抢卷",
        },
        {
          id: 2,
          link: "../../../assets/img/m2.png",
          url: "#",
          biaoti: "内购福利",
        },
        {
          id: 3,
          link: "../../../assets/img/m3.png",
          url: "#",
          biaoti: "好物特卖",
        },
        {
          id: 4,
          link: "../../../assets/img/m4.png",
          url: "#",
          biaoti: "夏季上新",
        },
      ],
    };
  },
};
</script>

<style >
.recom {
  display: flex;
  padding-bottom:30px ;
  padding-top:8px ;
  border-bottom:8px solid rgb(241, 234, 234) ;
}
.recom div {
  flex: 1;
  text-align: center;
  padding: 3px 3px;
  
}

.recom img{
    width: 100%;
    height: 50px;
    border-radius: 50%;
    margin-bottom:2px ;
    border: 1px solid rgb(82, 168, 218);
}
</style>