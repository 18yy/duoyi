<template>
<div class="paid">
  <x-Header id="header">
    <x-icon slot="overwrite-left" type="ios-close-empty" size="100" style="fill:#cc6633;position:relative;top:-25px;left:-10px;" @click="backTo"></x-icon>
    <span class="header_title">{{title}}</span>
  </x-Header>
  <div class="all">
    <div class="head">
      <img class="success-img" src="../../assets/pay/order_success.svg" />
      <div class="head-child">
        <img class="firewords" src="../../assets/firewords_left.png" />
        <p class="head-font">支付成功</p>
        <img class="firewords" src="../../assets/firewords_right.png" />
      </div>
    </div>
    <div class="mid">
      <hr/>
      <p class="mid-font">商品交易方式：{{tradeway}}</p>
      <hr/>
      <p class="mid-font">商品交易日期：{{month1}}月{{date1}}日</p>
      <hr/>
      <p class="mid-font">商品支付金额：￥{{money}}</p>
      <hr/>
      <p class="mid-font">估计到货时间：{{month2}}月{{date2}}日</p>
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
import {XHeader} from 'vux'

export default{
  name: 'Paid',
  components: {
      XHeader
  },
  data () {
    return {
      title: "支付成功",
      options: {
        showBack: true,
        backText: '',
        preventGoBack: true
    	},
      pre_path: "/paying2/paying3",
      tradeway: "寄存柜",
      money: "￥1234.00",
      month1: 11,
      date1: 11,
      month2: 11,
      date2: 13
    }
  },
  methods: {
  	backTo() {
            this.$router.push({
                name: "Bought"
            });
        }

  },
   mounted(){
  	var goodsmsg=this.$store.state.showGoodsDetail
  	this.money=goodsmsg.price
  }

}
</script>

<style scoped>
#header {
  background-color: #F9F9F9;
  z-index: 99;
  position: fixed;
  width: 100%;
  top: 0;
}
.header_title {
    height: 90px;
    width: 180px;
    text-align: center;
    color: #E56F42;
    font-weight: bold;
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
  margin: 0 auto;  
  padding: 60px 0 25px 0;
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
