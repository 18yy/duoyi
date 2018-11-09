<template>
  <div class="goodsMsgWrap">
    <x-header id="header">
        <x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;"
          @click="backTo()"></x-icon>
    </x-header>
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
      <div class="block-three" @click="buy">
        <div class="block-three-mid">
          <p class="font-three">确认购买</p>
        </div>
        <div class="block-three-left">
        </div>
        <div class="block-three-right">
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import {XHeader} from 'vux'

export default{
  name: 'goodsmessage',
  components: {
    XHeader
  },
  data () {
    return {
      title: "物品信息",
      goodsMsg:{
        username: "填写用户名",
        userphone: 110,
        message: "这里填写物品信息",
        goodsimage: [],//用户上传的图片
        userImg:''

      }
    }
  },
  methods: {
    call () {
      alert(this.username + '：' + this.userphone);
    },
    buy () {
      alert("购买商品");
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
  },

}
</script>

<style scoped >
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
#header {
  height: 50px;
  padding-top: 25px;
  background-color: #F9F9F9;
}

.goodsImgBox{
  width: 100%;
  height: 250px;
  overflow: hidden
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
