<template>
  <div>
    <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
    <div class="block">
      <div class="block-one">
        <div class="block-one-left">
          <img :src="userimage" class="user-image"/>
        </div>
        <p class="font-one">{{username}}</p>
        <div class="block-one-right" @click="call">
          <img src="../../assets/message.png" class="message-image">
          <p class="font-two">联系卖家</p>
        </div>
      </div>
      <hr />
      <div class="block-two">
        <p class="font-four">{{message}}</p>
        <img :src="goodsimage" class="goods-image"/>
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
import Header from '../others/Header'

export default{
  name: 'goodsmessage',
  components: {
    Header
  },
  data () {
    return {
      title: "物品信息",
      IsBack: true,
      pre_path: "/login",
      username: "填写用户名",
      userphone: 110,
      message: "这里填写物品信息",
      userimage: "./static/entrust.png",
      goodsimage: "./static/main.png"
    }
  },
  methods: {
    call () {
      alert(this.username + '：' + this.userphone);
    },
    buy () {
      alert("购买商品");
    }
  }
}
</script>

<style scoped>
hr {
  height: 1px;
  border: none;
  border-top: 1px solid rgb(229,111,66);
}
#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.block {
  background-color: rgb(255,245,235);
}
.block-one {
  height: 50px;
}
.block-two {
  margin: auto;
  height: 700px;
  width: 330px;
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
  margin: auto;
  margin-top: 20px;
}
.block-one-left {
  height:36px;
  width:36px;
  background-color: rgb(229,111,66);
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
  font-size: 14px;
  line-height: 20px;
  color: #4f5555;
}
</style>
