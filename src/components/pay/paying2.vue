<template>
<div class="Paying">
  <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
  <div class="all">
    <div class="head">
      <img class="head-img" src="../../assets/bar2.png">
      <div>
        <p class="font-one head-font-left">下单</p>
        <p class="font-one head-font-mid">确认个人信息</p>
        <p class="font-one head-font-right">付款</p>
      </div>
    </div>
    <div class="block block-one">
      <div class="block-child-one">
        <p class="font-one">购买商品</p>
        <img src="../../assets/Compose.png" class="img-pen"/>
      </div>
      <div>
        <img src="../../assets/index.png" class="block-one-img">
        <div class="block-one-p1">
          <p class="font-two" style="font-weight: bold; display: block">{{goods}}</p>
          <br/>
          <p class="font-two">{{remark}}</p>
        </div>
        <div class="block-one-p2">
          <p class="font-two" style="font-weight: bold">{{money}}</p>
        </div>
      </div>
    </div>
    <div class="block block-two">
      <div class="block-child-one">
        <p class="font-one">收货方式</p>
        <img src="../../assets/Compose.png" class="img-pen" @click="write('way')"/>
      </div>
      <div class="block-child-three">
        <p class="font-two">联系人 ：{{linkman}}</p>
        <p></p>      
      </div>
    </div>
    <div class="block block-three">
      <div class="block-child-one">
        <p class="font-one">收货人电话</p>
        <img src="../../assets/Compose.png" class="img-pen"/>
      </div>
      <div class="block-child-three">
        <p class="font-two">{{phone}}</p>
      </div>
    </div>
    <div class="block block-four">
      <div class="block-child-one">
        <p class="font-one">选择收货日期</p>
      </div>
      <div class="block-child-four">
        <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
          <span class="radio" :class="{'on':item.isChecked}"></span>
          <input v-model="payType" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">
          <p class="font-two" :class="{'on-font':item.isChecked}">{{item.label}}</p>
        </div>
      </div>
    </div>
    <div class="block block-five" @click="next">
      <p class="font-bottom">NEXT</p>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../others/Header'

export default{
  name: 'Paying2',
  components: {
      Header
  },
  data () {
    return {
      title: "支付",
      IsBack: true,
      pre_path: "/login",
      next_path: "/paying2/paying3",
      payType: '支付',
      goods: "商品名",
      remark: "备注信息",
      money: "￥1234.00",
      linkman: "李先生",
      phone: "110",
        radios:[
          {
            label: 'Standart(7days)',
            value:'Standart(7days)',
            isChecked: true,
          },
          {
            label: 'Express(2days)',
            value:'Express(2days)',
            isChecked: false,
          },
          {
            label: 'Premium(1day)',
            value:'Premium(1day)',
            isChecked: false,
          }
        ]
    }
  },
  methods: {
    check(index) {
      this.radios.forEach((item) => {
        item.isChecked = false;
      });
      this.payType = this.radios[index].value;
      this.radios[index].isChecked = true;
      console.log(this.payType);     
    },
    loadData(){
        _this.payType = data.FPayType
        if(data.FPayType === "支付"){
          _this.$set(_this.radios[0],'isChecked',true)  
          _this.$set(_this.radios[1],'isChecked',false)  
        }else{
          _this.$set(_this.radios[0],'isChecked',false)  
          _this.$set(_this.radios[1],'isChecked',true)  
        }
    },
    write(method){
      alert(method);
    },
    next() {
            this.$router.push({
                path: this.next_path
            });
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
.block {
  background-color: #FEEEDE;
  width: 327px;
  margin: auto;
}
.head {
  height: 40px;
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
.block-one {
  height: 115px;
}
.block-two {
  margin-top: 8px;
  height: 113px
}
.block-three {
  margin-top: 8px;
  height: 91px;
}
.block-four {
  margin-top: 8px;
  height: 200px;
}
.block-five {
  position: fixed;
  top: 16.2rem;
  width: 100%;
  height: 1.6rem;
  background-color: rgb(229,111,66); 
  text-align: center;
  /* border: 1px solid blue; */
}
.block-child-one {
  height: 16px;
  width: 286px;
  margin: auto;
  padding-top: 20px;
}
.block-child-three {
  margin: 15px 0 0 20px;
}
.block-child-four {
  margin-top: 10px;
  margin-left: 15px;
  width: 50%;
}
.block-one-img {
  height: 40px;
  width: 40px;
  margin: 10px 0 0 20px;
  float: left;
}
.block-one-p1 {
  float: left;
  margin: 10px 0 0 15px;
}
.block-one-p2 {
  float: right;
  margin: 20px 20px 0 0;
}
.img-pen {
  height: 16px;
  width: 16px;
  float: right;
}
.font-one {
  display: inline;
  font-size: 10px;
  color: rgb(229,111,66);
}
.font-two {
  display: inline;
  font-size: 14px;
  color: rgb(229,111,66);
}
.font-bottom {
  color: white;
  font-size: 10px;
  margin-top: .6rem;
}
label {
  font-size: 14px;
  color: rgb(229,111,66);
}
.radio-box{
  display: inline-block;
  position: relative;
  height: 30px;
  line-height: 30px;
  margin-right: 8px;
}
.input-radio {
  display: inline-block;
  position: absolute;
  opacity: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  left: 0px;
  outline: none;
  -webkit-appearance: none;
}
.radio {
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  cursor: pointer;
  background-image: url(../../assets/radio-unclick.png);
  background-repeat: no-repeat;
  background-size: 70% 70%;
}
.on {
  background-image: url(../../assets/radio-click.png);
  background-size: 70% 70%;
}
.on-font {
  font-weight: bold;
}
</style>
