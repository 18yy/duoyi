<template>
  <div class="Home">
    <el-container>
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
<style>
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
  padding: 0;
}
.el-header {
  height: 62px;
  padding: 0;
}
.header {
  padding-top: 18px;
  background-color: #f9f9f9;
}
.el-footer {
  height:48px;
}
.footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    position:fixed;
    bottom: 0;
    left: 0;
  } 
</style>
