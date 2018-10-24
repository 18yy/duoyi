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
          <router-link to="/index">
            <el-menu-item  index="Index" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'Index'" src="../../assets/index.png"/>
              <img v-if="this.currenIndex == 'Index'" src="../../assets/index_visited.svg"/>
              <span>首页</span>
            </el-menu-item>
          </router-link>
          <router-link to="/team">
            <el-menu-item index="team" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'team'" src="../../assets/team.png"/>
              <img v-if="this.currenIndex == 'team'" src="../../assets/team_visited.png"/>
              <span>组队</span>
            </el-menu-item>
          </router-link>
          <router-link to="/sign">
            <el-menu-item index="sign" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'sign'" src="../../assets/sign.png"/>
              <img v-if="this.currenIndex == 'sign'" src="../../assets/sign_visited.png"/>
              <span>打卡</span>
            </el-menu-item>
          </router-link>
          <router-link to="/about">
            <el-menu-item index="about" class="btn" style="line-height:18px;">
              <img v-if="this.currenIndex != 'about'" src="../../assets/about.png"/>
              <img v-if="this.currenIndex == 'about'" src="../../assets/about_visited.png"/>
              <span>我的</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-row> 
      <!-- <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/index_visited.svg">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/team_visited.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../../assets/sign_visited.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/about_visited.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar> -->
    </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
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
    text-align: center;
    float: left;
    padding: 5px 34px;
    width: 25%;
  }
  img {
    width:25px;
    height: 25px;
    display:block;
  }
  span {
    margin-top:0;
    width:25px;
    height: 15px;
  }
</style>