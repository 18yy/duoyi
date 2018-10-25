<template>
  <div class="">
    <index-header></index-header>
    <second-hand></second-hand>
  </div>
</template>
<script>
  import IndexHeader from './components/index-header'
  import SecondHand from './components/second-hand'

  export default {
    name: 'index',
    components: {
      IndexHeader,
      SecondHand
    }
  }
</script>

<style>
  .el-main{
    padding: 0;
  }
  body{
    background:rgb(239,239,244);
  }
</style>