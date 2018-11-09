<template>
    <div class="bought">
        <el-container>
            <el-header>
                <x-header id="header" :left-options="options">
                	<x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main class="boughtMain">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="boughtCard"
                    v-for="(item,index) in boughtData" 
                    :key="index">
                    <div slot="header" class="clearfix">
                        <span class="boughtTitle">卖家用户名</span>
                        <span style="color:#E56F42;" class="el-icon-arrow-right"></span>
                        <!--  <span class="boughtName">{{item.Bname}}</span>  -->
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="boughtImg">
                        <div class="boughtInfo">
                            <div class="boughtGoods">{{item.name}}</div>
                            <div class="boughtMoney">￥{{item.price}}</div>
                        </div>
                    </div>
                    <div class="btnGroup">
                        <el-button class="boughtBtn">查看</el-button>
                        <el-button class="boughtBtn">售后</el-button>
                        <el-button class="boughtBtn">删除</el-button>
                    </div>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
    name: 'bought',
    components: {
        XHeader
    },
    data () {
        return {
            title: "我买下的",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            boughtData: [{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
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
  z-index: 99;
}
#header {
  background-color: #F9F9F9;
}
.headerTitle {
    text-align: center;
    color: #6B6B6B;
    font-weight: bold;
}
.boughtMain {
	padding-left: 0;
	padding-right: 0;
}
.boughtCard {
	margin: 12px 0;
}
.boughtTitle {
	color: #E56F42;
	margin-right: 18px;
}
/*.boughtName {
	color: #E56F42;
	margin-left: 18px;
} */
.boughtImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
}
.boughtInfo {
	padding-top: 24px; 
}
.boughtGoods {
	color: #E56F42;
	font-size: 16px;
}
.boughtMoney {
	color: #FF3840;
	font-size: 18px;
	margin-top: 25px;
	margin-bottom: 10px;
}
.btnGroup {
	float:right;
}
.boughtBtn {
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
</style>