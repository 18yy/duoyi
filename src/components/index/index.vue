<template>
  <div class="indexWrap">
		<div class="indexheader">
			<p>首页</p >
		</div>
	    <div class="indexHead">
	      <div class="tabBigBox vux-1px-b">
	        <div class="tabImg" @click="showSlide"> 
	          <img :src="menuSrc" alt="menu">
	        </div>
	        <router-link to="/search">
	          <div class="tabImg">
	            <img :src="searchSrc" alt="search">
	          </div>
	        </router-link>
	        <tab :line-width="0" active-color="rgb(229, 111, 66)" default-color="#ccc" class="tabBox">
	          <tab-item class="tabItem" v-for="(item,index) in tabName" :key="index" :selected="firstTab === item" @click.native="changeTab(index)">{{item}}</tab-item>
	        </tab>
	      </div>
	    </div>
	    <div :is="currentView" keep-alive>
	    </div>
	    <slide-bar></slide-bar>
	    <hoverBtn></hoverBtn>
	  </div>
</template>
<script>
  import {
  	XHeader,
    Tab,
    TabItem
  } from 'vux'

  import HoverBtn from '@/components/others/hoverbutton'
  
  import SecondHand from '../secondHand/second-hand'
  import Reward from './components/reward'
  import Source from './components/source'
  import SlideBar from './components/slide-bar'

  export default {
    name: 'index',
    components: {
    	XHeader,
      Tab,
      TabItem,
      SecondHand,
      Reward,
      Source,
      SlideBar,
      HoverBtn
    },
    data() {
      return {
      	title: "首页",
        currentView:'SecondHand',
        myViews:['Source','SecondHand','Reward'],
        firstTab: '二手闲置',
        tabName: [
          '资源共享',
          '二手闲置',
          '悬赏大厅',
        ],
        menuSrc: require('@/assets/indexmenu.png'),
        searchSrc: require('@/assets/indexsearch.png')
      }
    },
    methods: {
      changeTab: function (index) {
        this.currentView=this.myViews[index]
      },
       showSlide:function(){
      this.$store.dispatch('showSlideBar')
    }
    }
  }

</script>


<style lang="less" scoped>
	.indexheader{
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		z-index: 9;
		background-color: #f9f9f9;
		display: flex;
		/* flex-direction: column; */
		justify-content:center;
		align-items: center;
	}
	.indexheader>p{
		font-size: 18px;
		font-weight: bold;
		color: #E56F42;
	}
  .indexWrap{
    width: 100%;
    height: 100%;
  }
  .el-header {
	padding: 0;
  	z-index: 99;
  }
  #header {
  	 background-color: #F9F9F9;
  	 z-index:999;
  }
  .el-main {
    padding: 0;
     background: rgb(239, 239, 244);
  }

  body {
    background: rgb(239, 239, 244);
  }

  @import '~vux/src/styles/1px.less';

  .tabBigBox {
    width: 100%;
    height: 44px;
    position: fixed;
    z-index: 9;
    top: 45px;
    background-color: #f9f9f9;
  }

  .tabBox {
    width: 250px;
    margin: 0 auto;
  }

  .tabBigBox .vux-tab .vux-tab-item {
    font-size: 14px;
    background-color: #f9f9f9;
  }

  .tabImg img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    margin-top: -8px;
  }

  .tabImg img[alt="menu"] {
    left: 16px;
  }

  .tabImg img[alt="search"] {
    right: 16px;
  }

</style>
