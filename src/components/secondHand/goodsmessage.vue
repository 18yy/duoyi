<template>
  <div class="goodsMsgWrap">
  <div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				
			</div>
    <div class="block">
      <div class="goodsImgBox">
        <img :src="goodsMsg.goodsimage[0]" />
      </div>
      <div class="block-one" >
        <div class="block-one-left">
          <img :src="goodsMsg.userImg" class="user-image"/>
        </div>
        <p class="font-one">{{ goodsMsg.username}}</p>
        <div class="block-one-right" @click="call">
          <img src="../../assets/about/message.png" class="message-image">
          <p class="font-two">联系卖家</p>
        </div>
      </div>
      <hr />
      <div class="block-two">
        <p class="font-four">{{ goodsMsg.message}}</p>
        <div v-for="(item, index) in goodsMsg.goodsimage" :key="index">
          <img :src="goodsMsg.goodsimage[index]" class="goods-image" />
        </div>
      </div>
   <div class="myBtn" @click="buy">
          <button>
          确认购买
          </button>
        </div>
    </div>
     <confirm v-model="bugVisible"
      title="确定购买吗？"
      @on-confirm="insertOrder">
    </confirm>
  </div>  
</template>

<script>
import {XHeader,Confirm } from 'vux'
import api from '../../services/main.js'

export default{
  name: 'goodsmessage',
  components: {
    XHeader,
    Confirm 
  },
  data () {
    return {
      title: "物品信息",
      bugVisible:false,
      goodsMsg:{
        username: "填写用户名",
        userphone: 110,
        message: "这里填写物品信息",
        goodsimage: [],//用户上传的图片
        userImg:'',
        goodId:''

      }
    }
  },
  methods: {
    call () {
      alert(this.username + '：' + this.userphone);
    },
    buy(){
    	this.bugVisible=true

    },
   insertOrder() {
		//购买
		var orderId= this.goodsMsg.goodId
		let config = {
			"goodid":this.goodsMsg.goodId,
			"address": "广东工业大学",
			"way": "微信支付" 
		}
		api.insertOrder((err, res) => {
			if (res.data.status == 1) {
				this.$store.state.orderid=res.data.orderid
				
				this.$router.push({ path: '/paying2' });
			} else {
				this.$message.error("购买失败");
			}
		}, config)
	},
  	backTo() {
        this.$router.push({
            path: "/index"
        });
    }
  },
  mounted() {
    var goodsmsg=this.$store.state.showGoodsDetail
    this.goodsMsg.username=goodsmsg.username
    this.goodsMsg.message=goodsmsg.describe
     this.goodsMsg.goodsimage= goodsmsg.img
      this.goodsMsg.userImg = goodsmsg.userImg
      this.goodsMsg.goodId=goodsmsg.id
  },

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

.indexheader /deep/ .el-icon-arrow-left {
	font-size: 25px;
	margin-left:20px;
	font-weight: bold;
}
.myBtn{
	 width: 100%;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    position: fixed;
    bottom: 20px;

}
 .myBtn button{
    width: 70%;
    height: 50%;
    background: rgb(255,149,101); 
    border-radius: 30px;
    box-shadow: 2px 8px 12px rgba(255,149,101,0.6);
    font-size:20px;
    color: white;
    line-height: 55%;
    text-align: center;
  }
.goodsMsgWrap /deep/ .weui-mask {
	opacity: 0.2;
}
.goodsMsgWrap /deep/ .weui-dialog strong {
	color: #E56F42;
}
.goodsMsgWrap /deep/ .weui-dialog__ft a {
	color: #E56F42;
}
.goodsMsgWrap{
  width: 100%;
  min-height: 100%;
   background-color:rgba(231,231,235,0.9);
}
hr {
  height: 1px;
  border: none;
  border-top: 1px solid #e7e7eb;
}
.goodsMsgWrap /deep/ .vux-header{
	position: fixed;
}
#header {
	width: 100%;
  height: 50px;
  padding-top: 25px;
  background-color: #F9F9F9;
}

.goodsImgBox{
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-top: 40px;
}
.goodsImgBox>img{
  width: 100%;
  height: auto;
}
.block-one {
  height: 50px;
  padding: 6px 0;
  border: 1px solid #ddd ;
}
.block-two {
  margin: auto;
  padding-bottom: 20px;
  width: 330px;
  box-sizing: border-box

}
.block-three {
  position: fixed;
  top: 15.5rem;
  height: 50px;
  text-align: center;
}
.block-three-mid {
  position: fixed;
  top: 15.5rem;
  left: 2.3rem;
  margin: auto;
  height: 49px;
  width: 200px;
  background-color: rgb(229,111,66);
  text-align: center;
}
.block-three-left {
  position: fixed;
  top: 15.5rem;
  left: 1.65rem;
  height:50px;
  width: 50px;
  background-color: rgb(229,111,66);
  border-radius: 50%;  
}
.block-three-right {
  position: fixed;
  top: 15.5rem;
  left: 6.85rem;
  height:50px;
  width: 50px;
  background-color: rgb(229,111,66);
  border-radius: 50%;  
}
.user-image {
  height: 36px;
  width: 36px;
}
.message-image {
  width: 26px;
}
.goods-image {
  width: 100%;
  margin-top: 20px;
  height: 200px;
}
.block-one-left {
  height:36px;
  width:36px;
  /* background-color: rgb(229,111,66); */
  border-radius: 50%;
  float: left;
  margin: 8px 0 0 20px;
  overflow: hidden;
  text-align: center;
}
.block-one-right {
  float: right;
  text-align: center;
  margin:10px 20px 0 0;
}
.font-one {
  font-size: 14px;
  float: left;
  margin: 20px 0 0 10px;
}
.font-two {
  font-size: 10px;
  color: rgb(229,111,66);
  margin-top: 3px;
}
.font-three {
  font-size: 18px;
  color: white;
  padding-top: 15px;
}
.font-four {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #4f5555;
}
</style>
