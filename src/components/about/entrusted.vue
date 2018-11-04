<template>
    <div class="entrusted">
         <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="paddingTop:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:38px;"
                    v-for="(item,index) in entrustedData" 
                    :key="index">
                    <div style="minHeight:220px;padding:52px;">
                        <div>
                            <span style="color:#C7C7CC;fontSize:37px;fontWeight:bold;">{{item.EDname}}</span>
                            <span style="color:#CACACF;fontSize:38px;float:right;">￥{{item.EDmoney}}</span>
                        </div>
                        <div style="marginTop:28px;">
                            <span style="color:#C7C7CC;marginTop:5px;fontSize:32px;">任务完成时间：{{item.EDdate}}</span>
                        </div>
                        <div style="marginTop:98px;height:48px;">
                            <div style="float:left;width:320px;paddingTop:8px;">
                                <span style="color:#E56F42;fontSize:32px;fontWeight:bold;">雇主评分</span>
                                <el-rate 
                                    style="float:right;" 
                                    :colors="['#E56F42','#E56F42','#E56F42']" 
                                    v-model="item.EDrate"
                                    disabled></el-rate>
                            </div>
                            <el-button size="mini" style="float:right;fontSize:20px;">查看</el-button>
                        </div>
                    </div>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import Header from '../others/Header'

export default {
    name: 'entrusted',
    components: {
        Header
    },
    data () {
        return {
            title: "我完成的委托",
            IsBack: true,
            pre_path: "/about",
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
.el-rate__icon {
    margin: 0;
}
</style>