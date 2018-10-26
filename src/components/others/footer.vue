<template>
    <div id="Footer">
      <el-row>
        <el-menu 
          default-active="Index" 
          background-color="rgb(249, 249, 249)"
          text-color="rgb(214, 214, 217)"
          active-text-color	="rgb(229, 111, 66)"
          mode="horizontal"
          @select="handleSelect">
          <router-link :to="{ name:'Index', params: {title: '首页'} }">
            <el-menu-item  index="Index" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'Index'" src="../../assets/index.png"/>
              <img v-if="this.currenIndex == 'Index'" src="../../assets/index_visited.svg"/>
              <span>首页</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'Team', params: {title: '组队'} }">
            <el-menu-item index="team" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'team'" src="../../assets/team.png"/>
              <img v-if="this.currenIndex == 'team'" src="../../assets/team_visited.png"/>
              <span>组队</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'Sign', params: {title: '打卡'} }">
            <el-menu-item index="sign" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'sign'" src="../../assets/sign.png"/>
              <img v-if="this.currenIndex == 'sign'" src="../../assets/sign_visited.png"/>
              <span>打卡</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'About', params: {title: '我的'} }">
            <el-menu-item index="about" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'about'" src="../../assets/about.png"/>
              <img v-if="this.currenIndex == 'about'" src="../../assets/about_visited.png"/>
              <span>我的</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-row>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
        currenIndex: "Index"
    }
  },
  methods: {
     handleSelect(key) {
        this.currenIndex = key;
      }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .el-menu {
    text-align: center;
    width: 100%;
    height: 100%;
    
  }
  .btn{
    float: left;
    padding: 5px 35px;
    width: 25%;
  }
  img {
    width:25px;
    height: 25px;
    display:block;
    padding: 1.8px;
  }
  span {
    margin-top:0;
    width:25px;
    height: 15px;
  }
</style>