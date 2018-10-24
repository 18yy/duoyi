<template>
  <div class="Home">
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <Footer class="footer"></Footer>
    </el-container>
  </div>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'Home',
  components: {Footer},
  data () {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    margin:0;
    padding:0; 
}
.el-header {
  background-color:#312e2e;
}
.el-container {
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    width:100%;
}
.footer {
    height:52px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  } 
</style>
