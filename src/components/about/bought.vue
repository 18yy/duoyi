<template>
    <div class="bought">
        <el-container>
            <div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				<p>{{title}}</p >
			</div>
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
                            <div class="boughtGoods">{{item.good.name}}</div>
                            <div class="boughtMoney">￥{{item.good.price}}</div>
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
import api from '../../services/main.js'

export default {
    name: 'bought',
    data () {
        return {
            title: "我买下的",
            boughtData: []
        }
    },
    methods:{
        init() {
            api.getBought((err, res) => {
                if (err || res.status != 200) {
                    this.$message.error("出错了，刷新一下吧");
                    return;
                 }
                if (res.data.status == 1) {
                    this.boughtData = res.data.result;
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
.bought .el-container {
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
.bought .boughtMain {
	padding-left: 0;
	padding-right: 0;
	margin-top: 28px;
}
.bought .boughtCard{
	margin:15px 0;
}
.bought .boughtTitle {
	color: #E56F42;
	margin-right: 18px;
}
/*.bought .boughtName {
	color: #E56F42;
	margin-left: 18px;
} */
.bought .boughtImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
}
.bought .boughtInfo {
	padding-top: 24px; 
}
.bought .boughtGoods {
	color: #E56F42;
	font-size: 16px;
}
.bought .boughtMoney {
	color: #FF3840;
	font-size: 18px;
	margin-top: 25px;
	margin-bottom: 10px;
}
.bought .btnGroup {
	float:right;
}
.bought .boughtBtn {
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
</style>