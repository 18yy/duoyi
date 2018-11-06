<template>
    <div class="orders">
        <el-container>
            <el-header>
                <x-header id="header" :left-options="options" @on-click-back="backTo()">
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main class="ordersMain">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="ordersCard"
                    v-for="(item,index) in ordersData" 
                    :key="index">
                    <div slot="header" class="clearfix">
                        <span class="ordersTitle">卖家用户名</span>
                        <span style="color:#E56F42;" class="el-icon-arrow-right"></span>
                        <span class="ordersName">{{item.Oname}}</span>
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="ordersImg">
                        <div class="ordersInfo">
                            <div class="ordersGoods">{{item.Ogoods}}</div>
                            <div class="ordersMoney">￥{{item.Omoney}}</div>
                        </div>
                    </div>
                    <div style="float:right;">
                        <el-button size="mini" class="ordersBtn">查看</el-button>
                        <el-button size="mini" class="ordersBtn">删除</el-button>
                    </div>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
    name: 'orders',
    components: {
        XHeader
    },
    data () {
        return {
           	title: "我的订单",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            ordersData: [{
                Oname: "XXX",
                Ogoods: "书书书",
                Omoney: "2222"
            },{
                Oname: "XXX",
                Ogoods: "书书书",
                Omoney: "2222"
            },{
                Oname: "XXX",
                Ogoods: "书书书",
                Omoney: "2222"
            },{
                Oname: "XXX",
                Ogoods: "书书书",
                Omoney: "2222"
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
.ordersMain {
	padding-left: 0;
	padding-right: 0;
}
.ordersCard {
	margin-top: 15px;
}
.ordersTitle {
	color: #E56F42;
	margin-right: 19px;
}
.ordersName {
	color: #E56F42;
	margin-left: 19px;
}
.ordersImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
    background-color: #E56F42;
}
.ordersInfo {
	float: right; 
	margin-top: 24px;
	margin-right: 200px;
}
.ordersGoods {
	color: #E56F42;
	font-size: 16px;
}
.ordersMoney {
	color: #FF3840;
	font-size: 19px;
	margin-top: 12px;
}
.ordersBtn {
	margin: 10px;
}
</style>