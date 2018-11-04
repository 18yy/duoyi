<template>
    <div class="entrusting">
         <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="paddingTop:0">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:48px;position:relative;overflow:visible;"
                    v-for="(item,index) in entrustingData" 
                    :key="index">
                    <div style="minHeight:220px;">
                        <div style="borderBottom:1px solid #EFA589;padding:48px;">
                            <div>
                                <span style="color:#E56F42;fontSize:37px;fontWeight:bold;">{{item.EGname}}</span>
                                <span style="color:#FF3840;fontSize:38px;float:right;">￥{{item.EGmoney}}</span>
                            </div>
                            <div style="marginTop:28px;">
                                <span style="color:#E56F42;marginTop:5px;fontSize:32px;">任务截止时间：{{item.EGdate}}</span>
                            </div>
                        </div>
                        <div style="borderBottom:1px solid #EFA589;padding:48px;">
                            <div style="color:#E56F42;fontSize:28px;fontWeight:bold;marginBottom:38px;">任务最近三条动态</div>
                            <div style="paddingBottom:88px;">
                                <div style="color:#E56F42;fontSize:26px;fontWeight:bold;marginBottom:18px;">{{item.EGtime1}}</div>
                                <div style="color:#E56F42;fontSize:28px;marginLeft:28px;">{{item.EGtext1}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                            <div style="paddingBottom:88px;">
                                <div style="color:#E56F42;fontSize:26px;fontWeight:bold;marginBottom:18px;">{{item.EGtime2}}</div>
                                <div style="color:#E56F42;fontSize:28px;marginLeft:28px;">{{item.EGtext2}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                            <div style="paddingBottom:88px;">
                                <div style="color:#E56F42;fontSize:26px;fontWeight:bold;marginBottom:18px;">{{item.EGtime3}}</div>
                                <div style="color:#E56F42;fontSize:28px;marginLeft:28px;">{{item.EGtext3}}</div>
                                <img src="../../assets/login/Profile.png" class="entrustingImg">
                            </div>
                        </div>
                        <div style="padding:38px;height:160px;">
                            <div style="color:#E56F42;fontSize:32px;fontWeight:bold;margin:12px;">任务进度</div>
                            <el-progress :percentage="item.EGpercent" :stroke-width="18" color="#F8E460"></el-progress>
                        </div>
                        <div class="detailsBtn">
                            <button>查看任务详情</button>
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
    name: 'entrusting',
    components: {
        Header
    },
    data () {
        return {
            title: "我接受的委托",
            IsBack: true,
            pre_path: "/about",
            entrustingData: [{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容很多很多很多哦",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容很多很多很多哦",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容很多很多很多哦",
                EGpercent: 20
            },{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容",
                EGpercent: 50
            },{
                EGname: "任务名称",
                EGmoney: 222,
                EGdate: "12.2",
                EGtime1: "Oct.24th",
                EGtext1: "这里有很多内容但是都不一样哦",
                EGtime2: "Oct.24th",
                EGtext2: "这里有很多内容但是都不一样哦",
                EGtime3: "Oct.24th",
                EGtext3: "这里有很多内容但是都不一样哦",
                EGpercent: 30
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
.entrustingImg {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    float: right;
    margin-top: 5px;
}
.detailsBtn{
    width: 100%;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
} 
.detailsBtn button{
    width: 150px;
    height: 30px;
    background: rgb(255,149,101); 
    border-radius: 30px;
    box-shadow: 2px 8px 12px rgba(255,149,101,0.6);
    font-size:12px;
    color: white;
    line-height: 55%;
    text-align: center;
    position: absolute;
    bottom: -15px;
}
</style>