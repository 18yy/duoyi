<template>
    <div class="information">
        <el-container>
        	<el-header>
	            <x-header id="header" :left-options="options">
                    <x-icon slot="overwrite-left" type="ios-arrow-back" size="78" style="fill:#E56F42;position:relative;top:-20px;left:-8px;" @click="backTo()"></x-icon>
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
            <el-main class="infoMain">
                <Basic :name="name" :username="username" :money="money" :src="avatar"></Basic>
                <label for="avatar">
                	<img src="../../assets/about/compose.png" class="updateImg">
           		</label>
                <input 
                	type="file" 
                	style="display:none;" 
                	accept=".jpg, .png" 
                	id="avatar" 
                	ref="inputImg"
                	@change="updateImg($event)">
                <el-card 
                    shadow="never" 
                    v-for="(item,index) in InfoData" 
                    :key="index" 
                    class="infoCard">
                    <div class="leftIcon">
                        <img :src="item.src" class="icon">
                        <div class="infoDetail">{{item.detail}}</div>
                        <div class="infoTitle">{{item.title}}</div>
                    </div>
                    <span class="el-icon-arrow-right updateInfo" @click="openUpdate(index)"></span>
                </el-card>

				<el-dialog
				  :visible.sync="dialogVisible"
				  :title="InfoData[this.currentIndex].title"
				  class="updateInput">
					<el-input v-model="detail">
					</el-input>
				    <el-button 
				    	icon="el-icon-check" 
				    	type="text" 
				    	class="updateBtn" 
				    	@click="updateInfo()"></el-button>
				</el-dialog>
            </el-main>
         </el-container>
    </div>
</template>

<script>

import { XHeader,ConfirmPlugin } from 'vux'
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
            name: "",
            username: "",
            money: 0,
            avatar: "",
            dialogVisible: false,
            currentIndex: 0,
            detail: "",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            InfoData: [{
                title: "用户名",
                detail: "",
                src: require("../../assets/information/name.png")
            },/*{
                title: "个人简介",
                detail: "",
                src: require("../../assets/information/quote.png")
            },{
                title: "技能树",
                detail: "",
                src: require("../../assets/information/medal.png")
            },*/{
                title: "联系电话",
                detail: "",
                src: require("../../assets/information/phone.png")
            },/*{
                title: "收货地址",
                detail: "",
                src: require("../../assets/information/places.png")
            },*/{
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
                	this.avatar = res.data.result.img;
                	this.name = res.data.result.name;
                    this.username = res.data.result.username;
                    this.money = res.data.result.money;
                	this.InfoData[0].detail = res.data.result.name;
                	this.InfoData[1].detail = res.data.result.phone;
                	this.InfoData[2].detail = res.data.result.mail;
                   	//console.log(res.data);
                } else{
                    this.$message.error(res.data.message);
                }
            });
        },
        backTo() {
            this.$router.push({
                path: "/about"
            });
        },
        updateImg() {
        	let inputDOM = this.$refs.inputImg;
        	this.avatar = window.URL.createObjectURL(inputDOM.files[0]);
        	let formData = new FormData();
        	formData.append('img', inputDOM.files[0]);
        	let config = {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
        	api.updateImg((err, res) => {
                if (err || res.status !== 200) {
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.status == 1) {
                	this.$message({
			          message: '修改成功',
			          type: 'success'
			        });
                	this.init();
                	//console.log(res);
                } else{
                    this.$message.error(res.data.message);
                }
            }, formData, config);
        },
        openUpdate(index) {
        	this.currentIndex = index;
        	this.dialogVisible = true;
        	this.detail = this.InfoData[index].detail;
        },
        updateInfo() {
        	var nameReg = /([\u4e00-\u9fa5_a-zA-Z0-9]){3,8}/;
        	var phoneReg = /^1[3456789]\d{9}$/;
        	var mailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        	this.InfoData[this.currentIndex].detail = this.detail;
        	let data = {
        		name: this.InfoData[0].detail,
        		phone: this.InfoData[1].detail,
        		mail: this.InfoData[2].detail
        	}
        	if(data.name != "" && !nameReg.test(data.name)) {
        		this.$message.error("用户名格式错误");
        	}else if(data.phone != "" && !phoneReg.test(data.phone)) {
        		//console.log(data.phone);
        		this.$message.error("号码格式错误");
        	}else if(data.mail != "" && !mailReg.test(data.mail)) {
        		this.$message.error("邮箱格式错误");
        	}else {
        		api.updateInfo((err, res) => {
	                if (err || res.status !== 200) {
	                this.$message.error("出错了，刷新一下吧");
	                return;
	                }
	                if (res.data.status == 1) {
	                   this.$message({
				          message: '修改成功',
				          type: 'success'
				        });
	                   this.dialogVisible = false;
	                   this.init();
	                } else{
	                    this.$message.error(res.data.message);
	                }
	            }, data);
        	}	
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
.information .el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #EFEFF4;
}
.information .el-header {
  	padding: 0;
  	z-index: 99;
}
.information #header {
  background-color: #F9F9F9;
}
.information .headerTitle {
    text-align: center;
    color: #6B6B6B;
    font-weight: bold;
}
.infoMain {
	padding: 0;
}
.updateImg {
	position: fixed;
	top: 98px;
	left: 68px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
}
.infoMain {
	padding: 0;
}
.updateImg {
	position: fixed;
	top: 98px;
	left: 68px;
	width: 15px;
	height: 15px;
	border-radius: 100%;
}
.infoCard {
    margin: 12px;
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
    margin-right: 18px;
    float: left;
}
.infoDetail {
	height: 25px;
	color: #E56F42;
	font-size: 16px;
	margin-top: -10px;
}
.infoTitle {
	height: 25px;
	color: #F0AD94;
	font-size: 14px;
}
.updateInfo {
    font-size: 18px;
    font-weight: bold;
    color:#E56F42;
    float: right;
    margin-top: 12px;
}
.information .el-dialog{
	width: 310px;
	height: 150px;
	box-shadow: 1px 3px 12px #FFE9DE;
}
.information .el-dialog__headerbtn .el-dialog__close {
	color: #E56F42;
}
.information .el-dialog__title {
	padding-top: 10px;
	color: #EA8D69;
	font-size: 15px;
}
.information .el-dialog__body {
	padding: 0 20px;
	color: #F9BE82;
}
.information .el-input__inner {
	padding: 0;
	border: 0;
	border-bottom: 1px solid #FEEEDE;
	color: #F9BE82;
	font-size: 16px;
}
.updateBtn {
	font-size: 22px;
	font-weight: bold;
	color: #E56F42;
	float: right;
	margin-top: 11px;
}
</style>