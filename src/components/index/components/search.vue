<template>
  <div id="searchBigBox">
    <div class="searchBox">
      <div class="back">
        <img :src="backSrc" alt="back">
      </div>
      <div>
        <input type="text" placeholder="完成PPT" class="searchInput">
      </div>
      <div class="searchBtn">
        <img :src="searchSrc" alt="search">
      </div>
    </div>
    <div class="historyBox">
      <div class="historyHead">
        <div class="historyIco">
          <img :src="historySrc" alt="history">
          <p>历史搜索</p>
        </div>
        <div class="deleteIco">
          <img :src="deleteSrc" alt="delete">
        </div>
      </div>
    </div>
    <div class="hotBox"></div>
  </div>
</template>
<script>
   export default {
      name: 'search',
      data(){
        return{
          backSrc: require('@/assets/searchBack.png'),
          searchSrc: require('@/assets/search2.png'),
          historySrc: require('@/assets/searchHistory.png'),
          hotSrc: require('@/assets/searchHot.png'),
          deleteSrc: require('@/assets/searchDelete.png')

        }
      }
   }
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
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
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchInput{
    box-sizing: border-box;
    width: 272px;
    height: 35px;
    border-radius: 5px;
    padding:2px 10px;  
    font-size: 16px;
  }
  .searchBox img{
    width:28px;
    height: 28px;
  }
  .historyBox{
   margin:28px 15px 0px 20px;
  }
  .historyBox img{
    width: 14px;
    height: 14px;
   
  }
  .historyHead{
    display: flex;
    justify-content: space-between
  }
  .historyBox img[alt="history"]{
    margin-right: 5px;
  }
   .historyIco{
     display: flex
   }
  .historyIco p{
    font-size: 14px;
    flex: 1;
  }
  
</style>