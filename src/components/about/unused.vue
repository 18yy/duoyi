<template>
    <div class="unused">
        <el-container>
            <el-header>
                <x-header id="header" :left-options="options" @on-click-back="backTo()">
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main class="unusedMain">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="unusedCard"
                    v-for="(item,index) in unusedData" 
                    :key="index">
                    <div>
                        <img src="../../assets/login/Profile.png" class="unusedImg">
                        <div class="unusedInfo">
                            <div class="unusedGoods">{{item.Ugoods}}</div>
                            <div class="unusedMoney">￥{{item.Umoney}}</div>
                        </div>
                        <div class="unusedBrowse">
                            <span style="color:#F0AD94;"> 浏览：{{item.Ubrowse}}</span>
                            <span class="unusedComment">评论：{{item.Ucomment}}</span>
                        </div>
                    </div>
                    <div style="float:right;">
                        <el-button size="mini" class="unusedBtn">查看</el-button>
                        <el-button size="mini" class="unusedBtn">编辑</el-button>
                        <el-button size="mini" class="unusedBtn">删除</el-button>
                    </div>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
    name: 'unused',
    components: {
        XHeader
    },
    data () {
        return {
           title: "我发布的闲置",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            unusedData: [{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            }]
        }
    },
    methods:{
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
.el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #EFEFF4;
}
.el-header {
  padding: 0;
}
#header {
  background-color: #F9F9F9;
}
.headerTitle {
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.unusedMain {
	padding-left: 0;
	padding-right: 0;
}
.unusedCard {
	margin-top: 15px;
}
.unusedImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 12px;
    background-color: #E56F42;
}
.unusedInfo {
	float: right; 
	margin-top: 19px;
	margin-right: 29px;
}
.unusedGoods {
	color: #E56F42;
	font-size: 16px;
	float: left;
}
.unusedMoney {
	color: #FF3840;
	font-size: 19px;
	float: right;
	margin-left: 140px;
}
.unusedBrowse {
	padding-top: 64px;
}
.unusedComment {
	color: #F0AD94;
	margin-left: 19px;
}
.unusedBtn {
	margin: 10px;
}
</style>