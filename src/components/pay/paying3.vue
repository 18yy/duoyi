<template>
  <div class="Paying3">
    <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
    <div class="head">
      <img class="head-img" src="../../assets/bar3.png">
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
      <div class="white"></div>
      <ul class="block-two-ul-left">
        <li v-for="(item, index) of itemsName" class="font-list">
          {{item.name}}
        </li>
      </ul>
      <ul class="block-two-ul-right">
        <li v-for="(item, index) of itemsValue" class="font-list">
          {{item.value}}
        </li>
      </ul>
    </div>
    <hr/>
    <div class="block block-two">
      <div class="white"></div>
      <p class=" block-two-ul-left font-list">外送费：</p>
      <p class="block-two-ul-right font-list">{{fee}}</p>
    </div>
    <hr/>
    <div class="blcok block-three">
      <div class="white"></div>
      <p class="font font-one">您的商城账户余额：{{balance}}</p>
    </div>
    <div class="block block-four" @click="payNow">
      <p class="font-one font-bottom">PAY NOW</p>
    </div>
    <Buttons></Buttons>
  </div>
</template>

<script>
import Header from '../others/Header'
import Buttons from '../others/button1'


export default {
  name: "Paying3",
  components: {
      Header,
      Buttons
  },
  data () {
    return {
      title: "支付",
      IsBack: true,
      pre_path: "/paying2",
      username: 'username',
      fee: '1234.00',
      balance: '1111.00',
      itemsName: [
        {name: 'nike'},
        {name: 'adidas'},
        {name: 'pick'}
      ],
      itemsValue: [
        {value: '2333.00'},
        {value: '666.00'},
        {value: '233.00'}
      ]
    }
  },
  computed: {
    total (){
      var t=0;
      for(var i=0; i<this.itemsValue.length; i++){
        t += parseFloat(this.itemsValue[i].value);
      }
      return t.toString().indexOf('.')==-1 ? t.toString()+".00" : t.toString()+"0";
    }
  },
  methods: {
    payNow (){
      alert("gogogo");
    }
  }
}  
</script>

<style scoped>
#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.vux-header-left {
  margin-top: 25px;
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
.block-three {
  height: 190px;
  text-align: center;
  /* border: 1px solid green; */
}
.block-four {
  position: fixed;
  top: 16.2rem;
  width: 100%;
  height: 1.6rem;
  background-color: rgb(229,111,66); 
  text-align: center;
  /* border: 1px solid blue; */
}
.block-child-one {
  margin: 40px;
  text-align: center;
}
.block-two-ul-left {
  float: left;
}
.block-two-ul-right {
  float: right;
  text-align: right;
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
.font-bottom {
  color: white;
  margin-top: .6rem;
}
.font-list {
  font-size: 12px;
  color: rgb(229,111,66);
  margin: 5px 0;
}
.white {
  height: 30px;
}  
</style>
