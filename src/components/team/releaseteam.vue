<template>
  <div class="all">
    <x-header id="header" :left-options="options">
    	<x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
      <span class="header_title">{{title}}</span>
    </x-header>
    <div class="block block-one">
      <div class="block-one-top">
        <input type="text" id="teamname" placeholder="比赛名">
      </div>
      <hr/>
      <div class="block-one-bottom">
        <textarea id="teammessage" placeholder="这里填写本队简介、所需队员要求等">
        </textarea>
      </div>
    </div>
    <div class="block block-two">
    	<el-collapse>
		  <el-collapse-item>
		  	<template slot="title">
		      <span class="addTitle">添加更多</span>
		      <span class="addSubTitle">报名表 | 比赛链接...</span>
		    </template>
		    <div>这里还没有东西哦</div>
		  </el-collapse-item>
		</el-collapse>
    </div>
    <div class="block block-one">
      <div class="block-one-message" @click="arrow()">
        <p class="font-one">比赛人数</p>
        <img src="../../assets/Forward arrow.png" class="img-arrow"/>
      </div>
      <hr/>
      <div class="block-one-message" @click="arrow()">
        <p class="font-one">分类</p>
        <img src="../../assets/Forward arrow.png" class="img-arrow"/>      
      </div>
      <hr/>
      <div class="block-one-message" @click="arrow()">
        <p class="font-one">需要技能</p>
        <img src="../../assets/Forward arrow.png" class="img-arrow"/>
      </div>
      <hr/>
      <div class="block-one-message" @click="arrow()">
        <p class="font-one">比赛人数</p>
      </div>
    </div>
    <div class="block-three" @click="join">
      <div class="block-three-mid">
        <p class="font-three">确认发布</p>
      </div>
      <div class="block-three-left">
      </div>
      <div class="block-three-right">
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: "releaseTeam",
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
        }
    }
  },
  methods: {
    join () {
      alert("发布组队");
    },
    arrow () {
      alert("箭头");
    },
  	backTo() {
        this.$router.push({
            path: "/index"
        });
    }
  }
}  
</script>

<style scoped>
hr {
  height: 1px;
  border: none;
  border-top: 1px solid #FFF5EB;
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
#teamname {
  margin: 14px 0 0 20px;
  width: 80%;
  font-size: 12px;
}
#teammessage {
  margin: 14px 20px 0 20px;
  width: 88%;
  height: 100px;
  font-size: 12px;
}
.all {
  background-color: #FFF5EB;
  height: 700px;
}
.block {
  background-color: white;
  margin-bottom: 12px;
}
.block-one { 
  height: 190px;
}
.block-one-message {
  height: 40px;
}
.block-two {
  min-height: 50px;
}
.addTitle {
	color: #E56F42;
	margin-left: 30px;
}
.addSubTitle {
	color: #D8D8DB;
	margin-left: 30px;
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
.font-one {
  float: left;
  margin: 14px 0 0 20px;
  font-size: 12px;
  color: rgb(229,111,66);
}
.font-three {
  font-size: 18px;
  color: white;
  padding-top: 15px;
}
.img-arrow {
  float: right;
  margin: 14px 20px 0 0;
  width: 20px;
}
</style>
