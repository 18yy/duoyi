<template>
    <div class="entrusted">
         <el-container>
           <div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				<p>{{title}}</p >
			</div>
            <el-main class="entrustedMain">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    class="entrustedCard"
                    v-for="(item,index) in entrustedData" 
                    :key="index">
                    <div class="entrustedInfo">
                        <div>
                            <span class="entrustedName">{{item.EDname}}</span>
                            <span class="entrustedMoney">￥{{item.EDmoney}}</span>
                        </div>
                        <div class="entrustedDate">任务完成时间：{{item.EDdate}}</div>
                        <div class="entrustedFooter">
                            <div>
                                <span class="entrustedRate">雇主评分</span>
                                <el-rate 
                                    style="float:right;" 
                                    :colors="['#E56F42','#E56F42','#E56F42']" 
                                    v-model="item.EDrate"
                                    disabled></el-rate>
                            </div>
                            <el-button class="entrustedBtn">查看</el-button>
                        </div>
                    </div>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>

export default {
    name: 'entrusted',
    data () {
        return {
            title: "我完成的委托",
            entrustedData: [{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 1
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 2
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 3
            },{
                EDname: "任务名称",
                EDmoney: "444",
                EDdate: "10.24",
                EDrate: 5
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

<style scoped>
body {
    padding: 0;
    margin: 0;
}
.entrusted .el-container {
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
.entrustedMain {
	margin-top: 28px;
}
.entrustedCard {
	margin-top: 15px;
}
.entrustedInfo {
	min-height: 110px;
	padding: 26px;
}
.entrustedName {
	color: #C7C7CC;
	font-size: 18px;
	font-weight: bold;
}
.entrustedMoney {
	color: #CACACF;
	font-size: 19px;
	float: right;
	margin-right: 26px;
}
.entrustedDate {
	margin-top: 14px;
	color: #C7C7CC;
	font-size: 16px;
}
.entrustedFooter {
	margin-top: 49px;
	height: 24px;
}
.entrustedFooter div {
	float: left;
}
.entrustedRate{
	color: #E56F42;
	font-size: 16px;
	font-weight: bold;
	margin-right: 5px;
}
.entrustedBtn {
	float: right;
	width: 60px;
	height: 20px;
	margin: 15px;
	padding: 0;
	border-radius: 0;
	color: #B8B8BB;
}
</style>