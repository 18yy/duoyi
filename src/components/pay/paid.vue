<template>
<div class="paid">
  <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
  <div class="all">
    <div class="head">
      <img class="success-img" src="../../assets/order_success.svg" />
      <div class="head-child">
        <img class="firewords" src="../../assets/firewords_left.png" />
        <p class="head-font">支付成功</p>
        <img class="firewords" src="../../assets/firewords_right.png" />
      </div>
    </div>
    <div class="mid">
      <hr/>
      <p class="mid-font">商品交易方式：寄存柜</p>
      <hr/>
      <p class="mid-font">商品交易日期：9月3日</p>
      <hr/>
      <p class="mid-font">商品交易方式：寄存柜</p>
      <hr/>
      <p class="mid-font">商品交易日期：9月3日</p>
      <hr/>
    </div>
    <div class="bottom">
      <p class="bottom-font">交易注意事项</p>
      <i class="el-icon-edit"></i>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../others/Header'

export default{
  name: 'Paid',
  components: {
      Header
  },
  data () {
    return {
      title: "支付",
      IsBack: true,
      pre_path: "/paying2/paying3",
    }
  }
}
</script>

<style>
#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.vux-header-left {
  margin-top: 25px;
}
.firewords {
  width: 50px;
  height: 50px;
  margin-top: -70px;
  display: inline;
}
.success-img {
  width: 7.2rem;
  height: 2rem;
  margin: 30px auto;
}
hr {
  height: 1px;
  border: none;
  border-top: 1px solid rgb(229,111,66);
}
p {
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}
.all {
  font-size: 14px;
  width: 80%;
  margin: 25px auto;
}
.head {
  height: 170px;
  text-align: center;
}
.mid {
  height: 200px;
}
.bottom {
  margin-top: 40px;
  height: 140px;
  width: 100%;
}
.head-child {
  margin-top: -20px;
}
.head-font {
  color: rgb(229,111,66);
  font-size: 22px;
  display: inline;
}
.mid-font {
  color: rgb(229,111,66);
}
.bottom-font {
  color: rgb(89,89,89);
}
</style>
