<template>
  <div id="searchBigBox">
    <div class="searchBox">
      <router-link to="/index">
        <div class="back">
          <img :src="backSrc" alt="back">
        </div>
      </router-link>
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
      <div class="historyContentBox">
        <div v-for="(item,index) in historyList" :key="index">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="hotBox">
      <div class="hotHead">
        <img :src="hotSrc" alt="hot">
        <p>热搜</p>
      </div>
      <div class="hotContentBox">
        <div v-for="(item,index) in historyList" :key="index">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    components: {
      },
    data() {
      return {
        backSrc: require('@/assets/searchBack.png'),
        searchSrc: require('@/assets/search2.png'),
        historySrc: require('@/assets/searchHistory.png'),
        hotSrc: require('@/assets/searchHot.png'),
        deleteSrc: require('@/assets/searchDelete.png'),
        historyList: [
          '奶茶',
          'ppt制作',
          '香飘飘',
          '奶茶',
          'ppt制作',
          '香飘飘',
          '奶茶',
          '香飘飘aaaaaa'
        ]

      }
    }
  }

</script>

<style scoped>
  .el-main {
    padding: 0;
  }

  #searchBigBox {
    background: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
  }

  .searchBox {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 33px;
  }

  .searchInput {
    box-sizing: border-box;
    width: 272px;
    height: 35px;
    border-radius: 5px;
    padding: 2px 10px;
    font-size: 14px;
  }

  .searchBox img {
    width: 28px;
    height: 28px;
  }

  .historyBox {
    box-sizing: border-box;
    padding: 0px 15px 0px 20px;
    width: 100%;
    height: 80px;
    margin-bottom: 45px;
  }

  .hotBox img,
  .historyBox img {
    width: 13px;
    height: 13px;

  }

  .historyHead {
    display: flex;
    justify-content: space-between
  }

  .historyBox img[alt="history"],
  img[alt="hot"] {
    margin-right: 5px;
  }

  .hotHead,
  .historyIco {
    display: flex
  }

  .hotHead p,
  .historyIco p {
    padding-top: 1px;
    font-size: 14px;
    line-height: 14px;
    flex: 1;
  }

  .hotContentBox,
  .historyContentBox {
    width: auto;
    height: auto;
    padding: 10px 8px 10px 0px;
    display: flex;
    flex-wrap: wrap;

  }

  .historyContentBox div {
    height: 10px;
    width: auto;
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid rgb(239, 239, 239);
    margin: 5px 7px 5px 0;
  }

  .historyContentBox div span {
    font-size: 14px;
    line-height: 10px;
    color: #666666;
  }

  .hotBox {
    box-sizing: border-box;
    padding: 0px 15px 0px 20px;
    width: 100%;
    height: 80px;
  }

  .hotContentBox div {
    height: 15px;
    width: auto;
    display: inline-block;
    padding: 6px 10px;
    margin: 5px 7px 5px 0;
    border-radius: 10px;
    background: rgb(247, 246, 246);
    color: #666666;
  }

  .hotContentBox div span {
    font-size: 14px;
    line-height: 15px;
    color: #666666;
  }

</style>
