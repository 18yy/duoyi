<template>
    <div class="entrust">
         <el-container>
            <el-header>
                <x-header id="header" :left-options="options" @on-click-back="backTo()">
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main>
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="entrustCard"
                    v-for="(item,index) in entrustData" 
                    :key="index">
                    <div class="entrustInfo">
                        <div>
                            <span class="entrustName">{{item.Ename}}</span>
                            <span class="entrustMoney">￥{{item.Emoney}}</span>
                        </div>
                        <div class="entrustText">{{item.Etext}}</div>
                        <div class="entrustBrowse">
                                <img src="../../assets/about/browse.png" class="entrustImg">
                                <div>{{item.Ebrowse}}</div>
                        </div>
                        <div class="entrustFooter">
                            <div>
                                <span class="entrustRate">难易度</span>
                                <el-rate 
                                    id="rateIcon"
                                    :colors="['#E56F42','#E56F42','#E56F42']" 
                                    v-model="item.Erate"
                                    disabled></el-rate>
                            </div>
                            <div class="entrustDate">发布时间：{{item.Edate}}</div>
                        </div>
                    </div>
                    <div style="borderTop:1px solid #EFA589;">
                        <div style="float:right;">
                            <el-button size="mini" class="entrustBtn">查看</el-button>
                            <el-button size="mini" class="entrustBtn">编辑</el-button>
                            <el-button size="mini" class="entrustBtn">删除</el-button>
                        </div>
                    </div>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import { XHeader } from 'vux'

export default {
    name: 'entrust',
    components: {
        XHeader
    },
    data () {
        return {
            title: "我发布的委托",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            entrustData: [{
                Ename: "任务名称",
                Emoney: "111",
                Etext: "字很多字很多字很多字很多字很多字很多字很多字很多字很多字很多",
                Ebrowse: "50",
                Erate: 1,
                Edate: "10月24日"
            },{
                Ename: "任务名称",
                Emoney: "111",
                Etext: "这里只有30个字哦！！！！！",
                Ebrowse: "50",
                Erate: 2,
                Edate: "10月24日"
            },{
                Ename: "任务名称",
                Emoney: "111",
                Etext: "这里只有30个字哦！！！！！",
                Ebrowse: "50",
                Erate: 3,
                Edate: "10月24日"
            },{
                Ename: "任务名称",
                Emoney: "111",
                Etext: "这里只有30个字哦！！！！！",
                Ebrowse: "50",
                Erate: 4,
                Edate: "10月24日"
            }]
        }
    },
    methods:{
       Null() {
            this.$message({
                message: '暂无此功能！',
                type: 'warning'
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
.entrustCard {
	margin-top: 15px;
}
.entrustInfo {
	min-height: 100px;
	padding: 25px;
}
.entrustName {
	color: #E56F42;
	font-size: 18px;
	font-weight: bold;
}
.entrustMoney {
	color: #FF3840;
	font-size: 19px;
	float: right;
	margin-right: 25px;
}
.entrustText {
	margin-top: 19px;
	height: 64px;
	color: #E56F42;
	font-size: 16px;
}
.entrustBrowse {
	float: right;
	height: 12px;
}
.entrustImg {
	height: 15px;
	width: 15px;
	float: left;
}
.entrustBrowse div {
	color: #E56F42;
	font-size: 11px;
	padding: 2.5px;
	float: right;
}
.entrustFooter {
	padding-top: 29px;
}
.entrustRate {
	min-width: 60px;
	color:#E56F42;
	font-size: 16px;
	font-weight: bold;
	float: left;
}
.entrustDate {
	color: #E56F42;
	float: right;
	margin-top: 5px;
}
.entrustBtn {
	margin: 14px;
}
</style>