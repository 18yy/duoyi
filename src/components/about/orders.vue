<template>
    <div class="orders">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="padding:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:30px;"
                    v-for="(item,index) in ordersData" 
                    :key="index">
                    <div slot="header" class="clearfix">
                        <span style="color:#E56F42;marginRight:38px;">卖家用户名</span>
                        <span style="color:#E56F42;" class="el-icon-arrow-right"></span>
<<<<<<< HEAD
                        <span style="color:#E56F42;marginLeft:38px;">{{item.Oname}}</span>
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="ordersImg">
                        <div style="float:right; marginTop:48px;marginRight:388px;">
                            <div style="color:#E56F42;fontSize:32px;">{{item.Ogoods}}</div>
                            <div style="color:#FF3840;fontSize:38px;marginTop:25px;">￥{{item.Omoney}}</div>
                        </div>
                    </div>
                    <el-button-group style="float:right;marginTop:18px;">
                        <el-button size="mini" style="margin:20px;">查看</el-button>
                        <el-button size="mini" style="margin:20px;">删除</el-button>
                    </el-button-group>
=======
                        <!-- <span class="ordersName">{{item.Oname}}</span> -->
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="ordersImg">
                        <div class="ordersInfo">
                            <div class="ordersGoods">{{item.good.name}}</div>
                            <div class="ordersMoney">￥{{item.good.price}}</div>
                        </div>
                    </div>
                    <div style="float:right;">
                        <el-button class="ordersBtn">查看</el-button>
                        <el-button class="ordersBtn" @click="openDelete(index)">删除</el-button>
                    </div>
                    <confirm v-model="DeleteVisible"
				      title="确定删除吗？"
				      @on-confirm="deleteOrders">
				        <p style="text-align:center;color:#F9BE82;">
				        	删除操作无法撤销，该消息将被永久删除
				        </p>
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
    name: 'orders',
    components: {
<<<<<<< HEAD
        Header
    },
    data () {
        return {
           title: "我的订单",
            IsBack: true,
            pre_path: "/about",
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

=======
        XHeader,
        Confirm
    },
    data () {
        return {
           	title: "我的订单",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            ordersData: [],
            deleteIndex:0,
            DeleteVisible: false
        }
    },
    methods:{
    	init() {
    		api.selectOrders((err, res) => {
                if (err || res.status != 200) {
               	 	this.$message.error("出错了，刷新一下吧");
                 	return;
                 }
                if (res.data.status == 1) {
                	this.ordersData = res.data.result;
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
        deleteOrders() {
        	let data = {
        		id: this.ordersData[this.deleteIndex].id
        	}
        	api.deleteOrders((err, res) => {
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
            }, data);
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
  padding: 0;
  z-index: 99;
}
#header {
  height: 70px;
  padding-top: 25px;
  background-color: #F9F9F9;
}
.vux-header-left {
  margin-top: 25px;
}
<<<<<<< HEAD
.el-main {
    margin-top: 40px;
}
=======
.ordersTitle {
	color: #E56F42;
	margin-right: 19px;
}
/*.ordersName {
	color: #E56F42;
	margin-left: 19px;
}*/
>>>>>>> f847dd3... 完成个人中心现有的所有接口
.ordersImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
<<<<<<< HEAD
=======
    background-color: #E56F42;
}
.ordersInfo { 
	padding-top: 24px;
}
.ordersGoods {
	color: #E56F42;
	font-size: 16px;
}
.ordersMoney {
	color: #FF3840;
	font-size: 19px;
	margin-top: 25px;
	margin-bottom: 8px;
}
.ordersBtn {
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
.orders .weui-mask {
	opacity: 0.2;
}
.orders .weui-dialog strong {
	color: #E56F42;
}
.orders .weui-dialog__ft a {
	color: #E56F42;
>>>>>>> f847dd3... 完成个人中心现有的所有接口
}
</style>