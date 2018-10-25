<template>
  <div class="">
    <div class="tabBigBox vux-1px-b">
      <div class="tabImg">
        <img :src="menuSrc" alt="menu">
      </div>
      <div class="tabImg">
        <img :src="searchSrc" alt="search">
      </div>
      <router-link to="/secondHand">
        <tab :line-width="0" active-color="rgb(229, 111, 66)" default-color="#ccc" class="tabBox">
          <tab-item class="tabItem" v-for="(item,index) in tabName" :key="index" :selected="firstTab === item">{{item}}</tab-item>
        </tab>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {
    Tab,
    TabItem
  } from 'vux'

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        firstTab:'二手闲置',
        tabName:[
          '资源共享',
          '二手闲置',
          '悬赏大厅',
        ],
        menuSrc:require('@/assets/indexmenu.png'),
        searchSrc:require('@/assets/indexsearch.png')
      }
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  .tabBigBox{
    width: 100%;
    height: 44px;
    position: relative;
    background: white;
  }
  .tabBox {
    width: 250px;
    margin: 0 auto;
  }
  .tabBigBox .vux-tab .vux-tab-item{
    font-size: 14px;
    background: white;
  }
  .tabImg img{
    width: 16px;
    height: 16px;
    position: absolute;
    top:50%;
    margin-top: -8px;
  }
  .tabImg img[alt="menu"]{
    left: 16px;
  }
  .tabImg img[alt="search"]{
    right: 16px;
  }
</style>
