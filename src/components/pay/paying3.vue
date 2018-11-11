<template>
  <div class="Paying3">
    <x-header id="header" :left-options="options">
    	<x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
        <span class="header_title">{{title}}</span>
    </x-header>
    <div class="head">
      <img class="head-img" src="../../assets/pay/bar3.png">
      <div>
        <p class="font font-one head-font-left">下单</p>
        <p class="font font-one head-font-mid">确认个人信息</p>
        <p class="font font-one head-font-right">付款</p>
      </div>
    </div>
    <div class="block block-one">
      <div style="margin-top: 50px">
        <p class="font font-three">您将向“{{username}}”支付：</p>
      </div>
      <div class="block-child-one">
        <p class="font font-four">￥{{goodprice}}</p>
      </div>
    </div>
    <hr/>
    <div class="block block-two">
      <div class="block-two-left">
        <p class="font-two font-five" >{{goodname}}</p>
      </div>
      <div class="block-two-right">
        <p class="font-two font-five" >￥{{goodprice}}</p>
      </div>
    </div>
    <hr/>
    <div class="block block-two">
      <div class="block-two-left">
        <p class="font-two font-five">外送费</p>
      </div>
      <div class="block-two-right">
        <p class="font-two font-five">￥{{fee}}</p>
      </div>
    </div>
    <hr/>
    <div class="blcok block-three">
      <div class="block-child-one">
        <p class="font font-one">您的商城账户余额{{leave}}</p>
      </div>
    </div>
    <div class="block-four" @click="openPay">
      <div class="block-child-two">
      <p class="font-one font-six">PAY NOW</p>
      </div>
    </div>
     <confirm v-model="payVisible"
      title="确定支付吗？"
      @on-confirm="payOrder">
    </confirm>
  </div>
</template>

<script>
import { XHeader,Confirm } from 'vux'
import api from '../../services/main.js'

export default {
  name: "Paying3",
  components: {
      XHeader,
      Confirm
  },
  data () {
    return {
      title: "支付",
      options: {
	        showBack: true,
	        backText: '',
	        preventGoBack: true
	    },
      username: '',
      fee: 0,
      leave: 1000,
      goodname:'',
      goodprice:'',
      payVisible: false
     
    }
  },
  methods: {
  	backTo() {
        this.$router.push({
            path: "/paying2"
        });
    },
    openPay () {
    	this.payVisible = true;
    },
    payOrder() {
    	//购买
		var orderId= this.$store.state.orderid
		var goodid =this.$store.state.showGoodsDetail.id

		let config = {
			 	"goodid":goodid,
			    "orderid":orderId,
			    "price":this.goodprice
		}
		api.payOrder((err, res) => {
			if (res.data.status == 1) {
				this.$message.success("支付成功");
					 this.$router.push({
			            name: "Paid"
			        });
			} else {
				this.$message.error(res.data.message);
			}
		}, config)
    }
  },
  computed: {
  
  },
  mounted(){
  	var goodsmsg=this.$store.state.showGoodsDetail
  	console.log(goodsmsg)
  	this.goodname=goodsmsg.name
  	this.goodprice=goodsmsg.price
  	this.username=goodsmsg.username
  }
}  
</script>

<style scoped>
.Paying3 /deep/ .weui-mask {
	opacity: 0.2;
}
.Paying3 /deep/ .weui-dialog strong {
	color: #E56F42;
}
.Paying3 /deep/ .weui-dialog__ft a {
	color: #E56F42;
}
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
hr {
  height: 1px;
  width: 327px;
  margin: auto;
  border: none;
  border-top: 1px solid #FEEEDE;
}
.head {
  height: 65px;
  width: 327px; 
  margin: 0 auto;  
  padding: 80px 0 25px 0;
}
.head-img {
  width: 300px;
  height: 20px;
  margin-left: .34rem;
}
.head-font-left {
  float: left;
  margin: 5px 0 0 15px;
}
.head-font-mid {
  float: left;
  margin: 5px 0 0 2.65rem;
}
.head-font-right {
  float: right;
  margin: 5px 15px 0 0;
}
.block {
  width: 327px;
  margin: auto;
}
.block-one {
  height: 140px;
  /* border: 1px solid red; */
}
.block-two {
  height: 80px;
  /* border: 1px solid blue; */
}
.block-two-left {
  float: left;
  margin: 20px 0 0 0;
}
.block-two-right {
  float: right;
  margin: 20px 0 0 0;
}
.block-three {
  height: 190px;
  /* border: 1px solid green; */
}
.block-four {
  height: 44px;
  width: 100%;
  background-color: rgb(229,111,66);
  position: fixed;
  bottom: 0;
  /* border: 1px solid blue; */
}
.block-child-one {
  margin: 40px;
  text-align: center;
}
.block-child-two {
  padding-top: 14px;
  text-align: center;
}
.font {
  display: inline;
  color: rgb(229,111,66);
}
.font-one {
  font-size: 10px;    
}
.font-two {
  font-size: 14px;
}
.font-three {
  font-size: 12px;
}
.font-four {
  font-size: 40px;
}
.font-five {
  color: rgb(229,111,66);
  padding-bottom: 10px;
} 
.font-six {
  color: white;
}
</style>
