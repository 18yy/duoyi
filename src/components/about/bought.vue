<template>
    <div class="bought">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="padding:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:30px;"
                    v-for="(item,index) in boughtData" 
                    :key="index">
                    <div slot="header" class="clearfix">
                        <span style="color:#E56F42;marginRight:38px;">卖家用户名</span>
                        <span style="color:#E56F42;" class="el-icon-arrow-right"></span>
<<<<<<< HEAD
                        <span style="color:#E56F42;marginLeft:38px;">{{item.Bname}}</span>
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="boughtImg">
                        <div style="float:right; marginTop:48px;marginRight:388px;">
                            <div style="color:#E56F42;fontSize:32px;">{{item.Bgoods}}</div>
                            <div style="color:#FF3840;fontSize:38px;marginTop:25px;">￥{{item.Bmoney}}</div>
                        </div>
                    </div>
                    <el-button-group style="float:right;marginTop:18px;">
                        <el-button size="mini" style="margin:20px;">查看</el-button>
                        <el-button size="mini" style="margin:20px;">售后</el-button>
                        <el-button size="mini" style="margin:20px;">删除</el-button>
                    </el-button-group>
=======
                        <!--  <span class="boughtName">{{item.Bname}}</span>  -->
                    </div>
                    <div>
                        <img src="../../assets/login/Profile.png" class="boughtImg">
                        <div class="boughtInfo">
                            <div class="boughtGoods">{{item.name}}</div>
                            <div class="boughtMoney">￥{{item.price}}</div>
                        </div>
                    </div>
                    <div class="btnGroup">
                        <el-button class="boughtBtn">查看</el-button>
                        <el-button class="boughtBtn">售后</el-button>
                        <el-button class="boughtBtn">删除</el-button>
                    </div>
>>>>>>> f847dd3... 完成个人中心现有的所有接口
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from '../others/Header'

export default {
    name: 'bought',
    components: {
        Header
    },
    data () {
        return {
            title: "我买下的",
            IsBack: true,
            pre_path: "/about",
            boughtData: [{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
            },{
                name: "XXX",
                price: "2222"
            }]
        }
    },
    methods:{

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
<<<<<<< HEAD
=======
/*.boughtName {
	color: #E56F42;
	margin-left: 18px;
} */
>>>>>>> f847dd3... 完成个人中心现有的所有接口
.boughtImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
<<<<<<< HEAD
=======
    background-color: #E56F42;
}
.boughtInfo {
	padding-top: 24px; 
}
.boughtGoods {
	color: #E56F42;
	font-size: 16px;
}
.boughtMoney {
	color: #FF3840;
	font-size: 18px;
	margin-top: 25px;
	margin-bottom: 10px;
}
.btnGroup {
	float:right;
}
.boughtBtn {
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
>>>>>>> f847dd3... 完成个人中心现有的所有接口
}
</style>