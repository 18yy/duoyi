<template>
    <div class="orders">
        <el-container>
            <div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				<p>{{title}}</p >
			</div>
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
				      @on-confirm="deleteOrder">
				        <p style="text-align:center;color:#F9BE82;">
				        	删除操作无法撤销，该消息将被永久删除
				        </p>
				    </confirm>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { Confirm } from 'vux'
import api from '../../services/main.js'


export default {
    name: 'orders',
    components: {
        Confirm
    },
    data () {
        return {
           	title: "我的订单",
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
        deleteOrder() {
        	let data = {
        		id: this.ordersData[this.deleteIndex].id
        	}
        	api.deleteOrder((err, res) => {
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
    },
    created(){
    
    },
    mounted(){
    	this.init();
    }
}
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
}
.orders .el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #EFEFF4;
}
.indexheader{
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		z-index: 9;
		background-color: #f9f9f9;
		display: flex;
		align-items: center;
	}
.indexheader>p{
	font-size: 18px;
	position: absolute;
	left: 50%;
	margin-left: -25px;
	color:#E56F42
}
.indexheader /deep/ .el-icon-arrow-left {
	font-size: 25px;
	margin-left:20px;
	font-weight: bold;
}
.ordersMain {
	padding-left: 0;
	padding-right: 0;
	margin-top: 28px;
}
.ordersCard {
	margin-top: 15px;
}
.ordersTitle {
	color: #E56F42;
	margin-right: 19px;
}
/*.ordersName {
	color: #E56F42;
	margin-left: 19px;
}*/
.ordersImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
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
.orders /deep/ .weui-mask {
	opacity: 0.2;
}
.orders /deep/ .weui-dialog strong {
	color: #E56F42;
}
.orders /deep/ .weui-dialog__ft a {
	color: #E56F42;
}
</style>