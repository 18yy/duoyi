<template>
<div class="paid">
  <x-header id="header" :left-options="options" @on-click-back="backTo()">
    <span class="header_title">{{title}}</span>
  </x-header>
  <div class="all">
    <div class="head">
      <img class="success-img" src="../../assets/team/wanted.png" />
      <div class="head-child">
        <img class="firewords" src="../../assets/firewords_left.png" />
        <p class="head-font">发布成功</p>
        <img class="firewords" src="../../assets/firewords_right.png" />
      </div>
    </div>
    <div class="mid">
      <hr/>
      <p class="mid-font">委托名字：{{entrust}}</p>
      <hr/>
      <p class="mid-font">委托金额：{{money}}</p>
      <hr/>
      <p class="mid-font">委托完成时间：{{month}}月{{date}}日</p>
      <hr/>
      <p class="mid-font">委托清单：{{num}}件</p>
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
import { XHeader } from 'vux'

export default{
  name: 'Paid',
  components: {
      XHeader
  },
  data () {
    return {
      title: "发布组队",
      options: {
            showBack: true,
            backText: '',
            preventGoBack: true
        },
      entrust: "名字",
      money: "￥1234.00",
      month: 11,
      date: 11,
      num: 2
    }
  },
  methods: {
  	backTo() {
        this.$router.push({
            path: "/login"
        });
    }
  }
}
</script>

<style scoped>
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
.vux-header-left {
  margin-top: 25px;
}
.firewords {
  width: 50px;
  height: 50px;
  margin-top: -70px;
  display: inline;
}
.success-img {
  width: 1.9rem;
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
  margin: 25px auto;
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
