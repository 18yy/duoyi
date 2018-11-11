<template>
<div class="Paying">
  <div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				<p>{{title}}</p >
			</div>
 
  <div class="all">
    <div class="head">
      <img class="head-img" src="../../assets/pay/bar2.png">
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
        <div class="block-one-imgdiv"></div>
        <div class="block-one-p1">
          <p class="font-two" style="font-weight: bold; display: block">{{goodname}}</p>
          <br/>
          <p class="font-two">备注信息</p>
        </div>
        <div class="block-one-p2">
          <p class="font-two" style="font-weight: bold">￥{{goodprice}}</p>
        </div>
      </div>
    </div>
    <div class="block block-two">
      <div class="block-child-one">
        <p class="font-one">收货方式</p>
        <img src="../../assets/Compose.png" class="img-pen" @click="write('way')"/>
      </div>
      <div class="block-child-three">
        <p class="font-two">联系人 ：{{name}}</p>
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
    <div class="block-five" @click="toPaying3">
      <div class="block-child-five">
      <p class="font-one font-three">NEXT</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { XHeader } from 'vux'
import api from '../../services/main.js'

export default{
  name: 'Paying2',
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
        goodname:'',
        goodprice:'',
        name: "",
        phone: "",
      payType: '支付',
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
  	toPaying3(){
  		this.$router.push({
            path: "/paying2/paying3"
        });
  	},
  	init() {
  		api.getInfo((err, res) => {
            if (err || res.status != 200) {
           	 	this.$message.error("出错了，刷新一下吧");
             	return;
             }
            if (res.data.status == 1) {
            	this.name = res.data.result.name;
            	this.phone = res.data.result.phone;
            	console.log(res);
            } else{
                this.$message.error(res.data.message);
            }
        });
  	},
  	backTo() {
        this.$router.push({
            path: "/goodsMsg"
        });
    },
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
    }
  },
  mounted() {
  	this.init();
  	var goodsmsg=this.$store.state.showGoodsDetail
  	console.log(goodsmsg)
  	this.goodname=goodsmsg.name
  	this.goodprice=goodsmsg.price
  }
}
</script>

<style scoped>
.indexheader{
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		z-index: 9;
		background-color: #f9f9f9;
		display: flex;
		align-items: center;
	}
.indexheader>p{
	font-size: 18px;
	position: absolute;
	left: 50%;
	margin-left: -25px;
	color:#E56F42
}
.indexheader /deep/ .el-icon-arrow-left {
	font-size: 25px;
	margin-left:20px;
	font-weight: bold;
}

.block {
  background-color: #FEEEDE;
  width: 327px;
  margin: auto;
}
.head {
  height: 65px;
  width: 327px;
  margin: auto;
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
  height: 151px;
}
.block-five {
  height: 44px;
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #FF9565;
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
.block-child-five {
  padding-top: 14px;
  text-align: center;
}
.block-one-imgdiv {
  height: 40px;
  width: 40px;
  background-color: rgb(229,111,66);
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
.font-three {
  color: #FF9565;
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
