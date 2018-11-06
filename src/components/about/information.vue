<template>
    <div class="information">
        <el-container>
        	<el-header>
	            <x-header id="header" :left-options="options" @on-click-back="backTo()">
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
            <el-main class="infoMain">
                <Basic></Basic>
                <el-collapse accordion>
                    <el-collapse-item v-for="(item,index) in InfoData" :key="index">
                        <template slot="title">
                            <div class="leftIcon">
                                <img :src="item.src" class="icon">
                                <div class="infoDetail">{{item.detail}}</div>
                                <div class="infoTitle">{{item.title}}</div>
                            </div>
                        </template>
                        <!-- <div>暂时啥也没有
                            <el-input style="fontSize:58px;color:#E56F42;" v-model="item.title">
                                <el-button slot="append" icon="el-icon-edit"></el-button>
                            </el-input>
                        </div> -->
                    </el-collapse-item>
                </el-collapse>
            </el-main>
         </el-container>
    </div>
</template>

<script>
import { XHeader } from 'vux'
import Basic from './basicInfo.vue'
import api from '../../services/main.js'

export default {
    name: 'information',
    components: {
        XHeader,
        Basic
    },
    data () {
        return {
            title: "个人资料",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            InfoData: [{
                title: "用户名",
                detail: "",
                src: require("../../assets/information/name.png")
            },{
                title: "个人简介",
                detail: "",
                src: require("../../assets/information/quote.png")
            },{
                title: "技能树",
                detail: "",
                src: require("../../assets/information/medal.png")
            },{
                title: "联系电话",
                detail: "",
                src: require("../../assets/information/phone.png")
            },{
                title: "收货地址",
                detail: "",
                src: require("../../assets/information/places.png")
            },{
                title: "联系邮箱",
                detail: "",
                src: require("../../assets/information/message.png")
            }]
        }
    },
    methods:{
        init() {
            api.getInfo((err, res) => {
                if (err || res.status !== 200) {
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.status == 1) {
                	this.InfoData[0].detail = res.data.result.name;
                	this.InfoData[3].detail = res.data.result.phone;
                	this.InfoData[5].detail = res.data.result.mail;
                    console.log(res.data);
                } else{
                    this.$message.error(res.data.message);
                }
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
}
#header {
  background-color: #F9F9F9;
}
.headerTitle {
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.infoMain {
	padding-left: 0;
	padding-right: 0;
}
.leftIcon {
    height: 36px;
    width: 220px;
    float: left;
    margin: 10px;
}
.icon {
    width: 20px;
    height: 20px;
    padding: 5px;
    margin-right: 18px;
    float: left;
}
.infoDetail {
	height: 25px;
	color: #E56F42;
	font-size: 16px;
	margin-top: -21px;
}
.infoTitle {
	height: 25px;
	color: #F0AD94;
	font-size: 14px;
}
.el-collapse-item__header {
    height:50px;
    margin:15px;
    padding: 12px;
}
.el-collapse-item__content {
    padding: 0;
}
</style>