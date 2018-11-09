<template>
    <div class="entrusted">
         <el-container>
            <el-header>
                <x-header id="header" :left-options="options">
                	<x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main>
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="entrustedCard"
                    v-for="(item,index) in entrustedData" 
                    :key="index">
                    <div class="entrustedInfo">
                        <div>
                            <span class="entrustedName">{{item.EDname}}</span>
                            <span class="entrustedMoney">￥{{item.EDmoney}}</span>
                        </div>
                        <div class="entrustedDate">任务完成时间：{{item.EDdate}}</div>
                        <div class="entrustedFooter">
                            <div>
                                <span class="entrustedRate">雇主评分</span>
                                <el-rate 
                                    style="float:right;" 
                                    :colors="['#E56F42','#E56F42','#E56F42']" 
                                    v-model="item.EDrate"
                                    disabled></el-rate>
                            </div>
                            <el-button class="entrustedBtn">查看</el-button>
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
    name: 'entrusted',
    components: {
        XHeader
    },
    data () {
        return {
            title: "我完成的委托",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            entrustedData: [{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 1
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 2
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 3
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 5
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
.entrustedCard {
	margin-top: 15px;
}
.entrustedInfo {
	min-height: 110px;
	padding: 26px;
}
.entrustedName {
	color: #C7C7CC;
	font-size: 18px;
	font-weight: bold;
}
.entrustedMoney {
	color: #CACACF;
	font-size: 19px;
	float: right;
	margin-right: 26px;
}
.entrustedDate {
	margin-top: 14px;
	color: #C7C7CC;
	font-size: 16px;
}
.entrustedFooter {
	margin-top: 49px;
	height: 24px;
}
.entrustedFooter div {
	float: left;
}
.entrustedRate{
	color: #E56F42;
	font-size: 16px;
	font-weight: bold;
	margin-right: 5px;
}
.entrustedBtn {
	float: right;
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
</style>