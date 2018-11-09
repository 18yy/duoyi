<template>
  <div>
    <x-header id="header" :left-options="options" @on-click-back="backTo()">
      <span class="header_title">{{title}}</span>
    </x-header>
    <div class="block">
      <div class="block-one">
        <div class="block-one-left">
          <img :src="userimage" class="user-image"/>
        </div>
        <p class="font-one">{{username}}</p>
        <div class="block-one-right" @click="call">
          <img src="../../assets/about/message.png" class="message-image">
          <p class="font-two">联系队长</p>
        </div>
      </div>
      <hr />
      <div class="block-two">
        <p class="font-four">{{message}}</p>
        <img :src="goodsimage" class="team-image"/>
      </div>
      <div class="block-three" @click="buy">
        <div class="block-three-mid">
          <p class="font-three">确认加入</p>
        </div>
        <div class="block-three-left">
        </div>
        <div class="block-three-right">
        </div>
      </div>
      <div class="block-four" @click="addWeb">
        <p class="font-five">{{webname}}</p>
        <div class="block-four-bottom">
          <p class="font-six">{{webmessage}}</p>
          <img src="../../assets/team/web.png" class="web-image">
        </div>
      </div>
      <div class="block-five" @click="addFile">
        <p class="font-five">{{filename}}</p>
        <img :src="filetype" class="file-image">
      </div>
    </div>
  </div>  
</template>

<script>
import {XHeader} from 'vux'

export default{
  name: 'teammessage',
  components: {
    XHeader
  },
  data () {
    return {
      title: "组队信息",
      options: {
            showBack: true,
            backText: '',
            preventGoBack: true
        },
      username: "填写用户名",
      userphone: 110,
      message: "这里填写组队信息",
      filename: "这里写文件名",
      webname: "这是网页标题",
      webmessage: "这里是摘要",
      userimage: require('@/assets/indexmenu.png'),//用户头像
      goodsimage: require('@/assets/about/browse.png'),//用户上传的图片
      filetype: require('@/assets/indexmenu.png')//文件类型
    }
  },
  methods: {
  	backTo() {
        this.$router.push({
            path: "/login"
        });
    },
    call () {
      alert(this.username + '：' + this.userphone);
    },
    buy () {
      alert("加入队伍");
    },
    addWeb () {
      alert("添加网页");
    },
    addFile () {
      alert("添加文件");
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
  background-color: #F9F9F9;
}
.header_title {
    height: 90px;
    width: 180px;
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.block {
  background-color: rgb(255,245,235);
}
.block-one {
  height: 50px;
}
.block-two {
  margin: auto;
  height: 500px;
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
.block-four {
  margin: auto;
  height: 120px;
  width: 330px;
  background-color: white;
  border: 0.5px solid #72777b;
}
.block-four-bottom {
  margin-top: 40px;
}
.block-five {
  margin: auto;
  margin-bottom: 140px;
  margin-top: 20px;
  height: 60px;
  width: 330px;
  background-color: white;
  border: 0.5px solid #72777b;
}
.user-image {
  height: 36px;
  width: 36px;
}
.message-image {
  width: 26px;
}
.team-image {
  width: 100%;
  margin: auto;
  margin-top: 20px;
}
.file-image {
  float: right;
  height: 30px;
  margin: 10px 20px 0 0;
}
.web-image {
  height: 50px;
  float: right;
  margin: 10px 20px 0 0;
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
.font-five {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 14px;
  color: #4f5555;
}
.font-six {
  float: left;
  margin: 10px 0 0 20px;
  font-size: 12px;
  color: #4f5555;
}
</style>
