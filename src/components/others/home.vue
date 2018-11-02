<template>
  <div class="Home">
    <el-container>
        <el-header>
          <Header class="header" :title="title" :IsBack="IsBack" :pre_path="pre_path"></header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer class="footer"></Footer>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      title: "首页",
      IsBack: true,
      pre_path: "/about"
    }
  },
  methods:{

  },
  created(){
      
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    margin:0;
    padding:0; 
}
.el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
}
.el-main {
  margin-top: 25px;
}
.el-header {
  padding: 0;
}
.header {
  height: 45px;  
  margin-top: 25px;
  background-color: #FEECDC;
}
.el-footer {
  height:48px;
}
.footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    position:absolute;
    bottom: 0;
    left: 0;
  } 
</style>
