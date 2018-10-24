<template>
  <div class="home">
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <Footer class="footer"></Footer>
    </el-container>
  </div>
</template>

<script>
import Footer from './others/footer'

export default {
  name: 'index',
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
.el-container {
    color:#fff;
    background-color:#312e2e;
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
