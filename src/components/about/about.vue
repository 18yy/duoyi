<template>
    <div class="About">
         <el-container>
         	<el-header>
	            <x-header id="header" :left-options="{ showBack: false }">
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
            <el-main class="aboutMain">
                <Basic :name="name" :username="username" :money="money" :src="avatar"></Basic>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Information')">个人资料</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard">
                    <el-button type="text" class="aboutBtn" @click="Null()">聊天记录</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Unused')">我发布的闲置</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard1">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Orders')">我的订单</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard1">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Bought')">我买下的</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Entrust')">我发布的委托</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard1">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Entrusting')">我接受的委托</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" class="aboutCard1">
                    <el-button 
                        type="text" 
                        class="aboutBtn"
                        @click="goto('Entrusted')">我完成的委托</el-button>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import Basic from './basicInfo.vue'
import api from '../../services/main.js'

export default {
    name: 'About',
    components: {
        XHeader,
        Basic
    },
    data () {
        return {
            title: "个人中心",
            name: "",
            username: "",
            money: 0,
            avatar: ""
        }
    },
    methods:{
    	init() {
            api.getInfo((err, res) => {
                if (err || res.status != 200) {
               	 	this.$message.error("出错了，刷新一下吧");
                 	return;
                 }
                if (res.data.status == 1) {
                	this.avatar = res.data.result.img;
                    this.name = res.data.result.name;
                    this.username = res.data.result.username;
                    this.money = res.data.result.money;
                } else{
                    this.$message.error(res.data.message);
                }
            });
        },
       Null() {
            this.$message({
                message: '暂无此功能！',
                type: 'warning'
            });
        },
        goto(param) {
            this.$router.push({ 
                name: param 
            });
        }
    },
    created(){
        
    },
    mounted(){
    	this.init();
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
    color: #E56F42;
    font-weight: bold;
}
.aboutMain {
	padding: 0;
}	
.aboutCard {
	border: 0px solid white;
	margin-top: 12px;
}
.aboutCard1 {
	border: 0px solid white;
	border-top: 1px solid #FEEEDE;
}
.aboutBtn {
	width: 100%;
	margin: 3px 0;
	color: #E56F42;
	display: block;
}
.aboutBtn span {
	float: left;
	margin-left: 30px;
}
</style>