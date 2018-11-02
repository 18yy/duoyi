<template>
  <div id="searchBigBox">
    <div class="searchBox">
      <div class="back"></div>
      <div class="searchInput"></div>
      <div class="searchBtn"></div>
    </div>
  </div>
</template>
<script>
   export default {
      name: 'search',
   }
</script>

<style scoped>
  #searchBigBox{
    background: rgb(255,255,255);
    width: 100%;
    height: 100%;
  }
  .searchBox{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background-color: #f9f9f9;
   
  }
</style>