<template>
    <div id="Footer">
      <el-row>
        <el-menu 
          background-color="rgb(249, 249, 249)"
          text-color="rgb(214, 214, 217)"
          active-text-color	="rgb(229, 111, 66)"
          mode="horizontal"
          @select="handleSelect">
          <router-link :to="{ name:'Index'}">
            <el-menu-item  
              index="Index" 
              class="btn" 
              style="line-height:18px;" 
              v-if="this.currenIndex != 'Index'">
              <img src="../../assets/footer/index.png"/>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item  
              index="Index" 
              class="btn" 
              style="line-height:18px;" 
              v-if="this.currenIndex == 'Index'">
              <img src="../../assets/footer/index_visited.svg"/>
              <span style="color:rgb(229, 111, 66);">首页</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'Team'}">
            <el-menu-item 
              index="team" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex != 'team'">
              <img src="../../assets/footer/team.png"/>
              <span>组队</span>
            </el-menu-item>
            <el-menu-item 
              index="team" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex == 'team'">
              <img src="../../assets/footer/team_visited.png"/>
              <span style="color:rgb(229, 111, 66);">组队</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'Sign'}">
            <el-menu-item 
              index="sign" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex != 'sign'">
              <img src="../../assets/footer/sign.png"/>
              <span>打卡</span>
            </el-menu-item>
            <el-menu-item 
              index="sign" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex == 'sign'">
              <img src="../../assets/footer/sign_visited.png"/>
              <span style="color:rgb(229, 111, 66);">打卡</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{ name:'About'}">
            <el-menu-item 
              index="about" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex != 'about'">
              <img src="../../assets/footer/about.png"/>
              <span>我的</span>
            </el-menu-item>
            <el-menu-item 
              index="about" 
              class="btn" 
              style="line-height:18px;"
              v-if="this.currenIndex == 'about'">
              <img src="../../assets/footer/about_visited.png"/>
              <span style="color:rgb(229, 111, 66);">我的</span>
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
  },
  created(){
      
  },
  mounted(){
    if(this.$route.path == "/team") {
      this.currenIndex = "team";
    }else if(this.$route.path == "/sign") {
      this.currenIndex = "sign";
    }else if(this.$route.path == "/about") {
      this.currenIndex = "about";
    }
    // console.log(this.$route.path);
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