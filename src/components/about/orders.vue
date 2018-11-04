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
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Header from '../others/Header'

export default {
    name: 'orders',
    components: {
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
.ordersImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 18px;
}
</style>