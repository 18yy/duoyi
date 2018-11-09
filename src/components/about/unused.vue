<template>
    <div class="unused">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="padding:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:30px;"
                    v-for="(item,index) in unusedData" 
                    :key="index">
                    <div>
                        <img src="../../assets/login/Profile.png" class="unusedImg">
<<<<<<< HEAD
                        <div style="float:right; marginTop:38px;marginRight:58px;">
                            <div style="color:#E56F42;fontSize:32px;float:left;">{{item.Ugoods}}</div>
                            <div style="color:#FF3840;fontSize:38px;float:right;marginLeft:280px;">￥{{item.Umoney}}</div>
=======
                        <div class="unusedInfo">
                            <div class="unusedGoods">{{item.name}}</div>
                            <div class="unusedMoney">￥{{item.price}}</div>
>>>>>>> f847dd3... 完成个人中心现有的所有接口
                        </div>
                        <div style="paddingTop:128px;">
                            <span style="color:#F0AD94;"> 浏览：{{item.Ubrowse}}</span>
                            <span style="color:#F0AD94;marginLeft:38px;">评论：{{item.Ucomment}}</span>
                        </div>
                    </div>
<<<<<<< HEAD
                    <el-button-group style="float:right;marginTop:18px;">
                        <el-button size="mini" style="margin:20px;">查看</el-button>
                        <el-button size="mini" style="margin:20px;">编辑</el-button>
                        <el-button size="mini" style="margin:20px;">删除</el-button>
                    </el-button-group>
=======
                    <div style="float:right;">
                        <el-button class="unusedBtn">查看</el-button>
                        <el-button class="unusedBtn">编辑</el-button>
                        <el-button class="unusedBtn" @click="openDelete(index)">删除</el-button>
                    </div>
                    <confirm v-model="DeleteVisible"
				      title="确定删除吗？"
				      @on-confirm="deleteUnused">
				        <p style="text-align:center;">删除操作无法撤销，该消息将被永久删除</p>
				    </confirm>
>>>>>>> f847dd3... 完成个人中心现有的所有接口
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
<<<<<<< HEAD
import Header from '../others/Header'
=======
import { XHeader,Confirm } from 'vux'
import api from '../../services/main.js'
>>>>>>> f847dd3... 完成个人中心现有的所有接口

export default {
    name: 'unused',
    components: {
<<<<<<< HEAD
        Header
=======
        XHeader,
        Confirm
>>>>>>> f847dd3... 完成个人中心现有的所有接口
    },
    data () {
        return {
           title: "我发布的闲置",
<<<<<<< HEAD
            IsBack: true,
            pre_path: "/about",
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

=======
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            unusedData: [],
            deleteIndex:0,
            DeleteVisible: false
        }
    },
    methods:{
    	init() {
    		api.getAllByUserid((err, res) => {
                if (err || res.status != 200) {
               	 	this.$message.error("出错了，刷新一下吧");
                 	return;
                 }
                if (res.data.status == 1) {
                	this.unusedData = res.data.result;
                    //console.log(res);
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
        openDelete(index) {
        	this.deleteIndex = index;
        	this.DeleteVisible = true;
        },
        deleteUnused() {
        	let goodsid = this.unusedData[this.deleteIndex].id;
        	api.deleteUnused((err, res) => {
                if (err || res.status != 200) {
               	 	this.$message.error("出错了，刷新一下吧");
                 	return;
                 }
                if (res.data.status == 1) {
                	this.$message({
			          message: '删除成功',
			          type: 'success'
			        });
                	this.DeleteVisible = false;
                	this.init();
                    //console.log(res);
                } else{
                    this.$message.error(res.data.message);
                }
            }, goodsid);
        	console.log(this.unusedData[this.deleteIndex].id);
        }
>>>>>>> f847dd3... 完成个人中心现有的所有接口
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
<<<<<<< HEAD
  padding: 0;
=======
  	padding: 0;
  	z-index: 99;
>>>>>>> f847dd3... 完成个人中心现有的所有接口
}
#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.vux-header-left {
  margin-top: 25px;
}
.el-main {
    margin-top: 40px;
}
.unusedImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 12px;
<<<<<<< HEAD
=======
    background-color: #E56F42;
}
.unusedInfo { 
	padding-top: 15px;
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
}
.unusedBrowse {
	padding-top: 48px;
	padding-bottom: 12px;
}
.unusedComment {
	color: #F0AD94;
	margin-left: 19px;
} 
.unusedBtn {
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
.unused .weui-mask {
	opacity: 0.2;
}
.unused .weui-dialog strong {
	color: #E56F42;
}
.unused .weui-dialog__ft a {
	color: #E56F42;
>>>>>>> f847dd3... 完成个人中心现有的所有接口
}
</style>