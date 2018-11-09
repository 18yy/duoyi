<template>
  <div class="Paying3">
    <x-header id="header" :left-options="options" @on-click-back="backTo()">
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
        <p class="font font-four">￥{{total}}</p>
      </div>
    </div>
    <hr/>
    <div class="block block-two">
      <div class="block-two-left">
        <p class="font-two font-five" v-for="item in itemsName">{{item.name}}</p>
      </div>
      <div class="block-two-right">
        <p class="font-two font-five" v-for="item in itemsValue">￥{{valueString(item.value)}}</p>
      </div>
    </div>
    <hr/>
    <div class="block block-two">
      <div class="block-two-left">
        <p class="font-two font-five">外送费</p>
      </div>
      <div class="block-two-right">
        <p class="font-two font-five">￥{{valueString(fee)}}</p>
      </div>
    </div>
    <hr/>
    <div class="blcok block-three">
      <div class="block-child-one">
        <p class="font font-one">您的商城账户余额{{leave}}</p>
      </div>
    </div>
    <div class="block-four" @click="pay">
      <div class="block-child-two">
      <p class="font-one font-six">pay now</p>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: "Paying3",
  components: {
      XHeader
  },
  data () {
    return {
      title: "支付",
      options: {
	        showBack: true,
	        backText: '',
	        preventGoBack: true
	    },
      username: 'username',
      fee: 44,
      leave: 2000,
      itemsName: [
        {name: 'nike'},
        {name: 'adidas'}
      ],
      itemsValue: [
        {value: 2555},
        {value: 1234}
      ]
    }
  },
  methods: {
  	backTo() {
        this.$router.push({
            path: "/paying2"
        });
    },
    valueString (value) {
      var val=value.toString();
      return val.indexOf(".")==-1 ? val+".00" : val+"0";
    },
    pay () {
      alert("pay now");
    }
  },
  computed: {
    total () {
      var tol=0;
      for(var i=0; i<this.itemsValue.length; i++){
        tol += this.itemsValue[i].value;
      }
      return this.valueString(tol);
    }
  }
}  
</script>

<style>
#header {
  background-color: #F9F9F9;
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
  margin: 25px auto;
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
  top: 600px;
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
