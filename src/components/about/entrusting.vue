<template>
    <div class="entrusting">
         <el-container>
         	<el-header>
	            <x-header id="header" :left-options="options">
	            	<x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
            <el-main class="entrustingMain">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="entrustingCard"
                    v-for="(item,index) in entrustingData" 
                    :key="index">
                    <div class="entrustingInfo">
                        <div class="entrustingHeader">
                            <div>
                                <span class="entrustingName">{{item.EGname}}</span>
                                <span class="entrustingMoney">￥{{item.EGmoney}}</span>
                            </div>
                            <div class="entrustingDate">任务截止时间：{{item.EGdate}}</div>
                        </div>
                        <div class="entrustingCenter">
                            <div class="mainTitle">任务最近三条动态</div>
                            <div class="mainContent">
                                <div class="entrustingTime">{{item.EGtime1}}</div>
                                <div class="entrustingText">{{item.EGtext1}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                            <div class="mainContent">
                                <div class="entrustingTime">{{item.EGtime2}}</div>
                                <div class="entrustingText">{{item.EGtext2}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                            <div class="mainContent">
                                <div class="entrustingTime">{{item.EGtime3}}</div>
                                <div class="entrustingText">{{item.EGtext3}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                        </div>
                        <div class="entrustingFooter">
                            <div>任务进度</div>
                            <el-progress :percentage="item.EGpercent" :stroke-width="18" color="#F8E460"></el-progress>
                        </div>
                        <div class="detailsBtn">
                            <button>查看任务详情</button>
                        </div>
                    </div>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import { XHeader } from 'vux'

export default {
    name: 'entrusting',
    components: {
        XHeader
    },
    data () {
        return {
            title: "我接受的委托",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            entrustingData: [{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容很多很多很多哦",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容很多很多很多哦",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容很多很多很多哦",
                EGpercent: 20
            },{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容",
                EGpercent: 50
            },{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容但是都不一样哦",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容但是都不一样哦",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容但是都不一样哦",
                EGpercent: 30
            }]
        }
    },
    methods:{
       Null() {
            this.$message({
                message: '暂无此功能！',
                type: 'warning'
            });
        },
        backTo() {
            this.$router.push({
                path: "/about"
            });
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
.entrusting .el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #EFEFF4;
}
.entrusting .el-header {
  	padding: 0;
  	z-index: 999;
}
.entrusting #header {
  background-color: #F9F9F9;
}
.entrusting .headerTitle {
    text-align: center;
    color: #6B6B6B;
    font-weight: bold;
}
.entrustingCard {
	margin-top: 24px;
	overflow: visible;
}
.entrustingInfo {
	position: relative;
	min-height: 110px;
}
.entrustingHeader {
	border-bottom:1px solid #EFA589;
	padding: 24px;
}
.entrustingHeader div {
	margin-bottom: 8px;
}
.entrustingName {
	color: #E56F42;
	font-size: 18px;
	font-weight: bold;
}
.entrustingMoney {
	color: #FF3840;
	font-size: 19px;
	float: right;
	margin-right: 24px;
}
.entrustingDate {
	color: #E56F42;
	margin-top: 8px;
	font-size: 16px;
}
.entrustingCenter {
	border-bottom:1px solid #EFA589;
	padding: 24px;
}
.mainTitle {
	color: #E56F42;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 19px;
}
.mainContent {
	padding-bottom: 45px;
}
.entrustingTime {
	color: #E56F42;
	font-size: 13px;
	font-weight: bold;
	margin-bottom: 9px;
}
.entrustingText {
	color: #E56F42;
	font-size: 14px;
	margin-left: 14px;
}
.entrustingImg {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    float: right;
    margin-top: 5px;
}
.entrustingFooter {
	padding: 19px;
	height: 60px;
}
.entrustingFooter div {
	color: #E56F42;
	font-size: 16px;
	font-weight: bold;
}
.detailsBtn{
    width: 100%;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
} 
.detailsBtn button{
    width: 150px;
    height: 30px;
    background: rgb(255,149,101); 
    border-radius: 30px;
    box-shadow: 2px 8px 12px rgba(255,149,101,0.6);
    font-size:12px;
    color: white;
    line-height: 55%;
    text-align: center;
    position: absolute;
    bottom: -15px;
}
</style>