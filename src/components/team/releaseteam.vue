<template>
  <div class="all">
    <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
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
import Header from '../others/Header'

export default {
  name: "releaseTeam",
  components: {
    Header
  },
  data () {
    return {
      title: "发布组队",
      IsBack: true,
      pre_path: "/login"
    }
  },
  methods: {
    join () {
      alert("发布组队");
    },
    arrow () {
      alert("箭头");
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
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
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
  height: 100px;
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
