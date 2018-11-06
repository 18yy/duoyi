<template>
    <div class="About">
         <el-container>
         	<el-header>
	            <x-header id="header" :left-options="{ showBack: false }">
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
            <el-main class="aboutMain">
                <Basic></Basic>
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

export default {
    name: 'About',
    components: {
        XHeader,
        Basic
    },
    data () {
        return {
            title: "个人中心"
        }
    },
    methods:{
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
    height: 90px;
    width: 180px;
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.aboutMain {
	padding-left: 0;
	padding-right: 0;
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
	margin: 3px 28px;
	color: #E56F42;
	display: block;
}
</style>