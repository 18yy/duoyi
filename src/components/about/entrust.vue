<template>
    <div class="entrust">
         <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="paddingTop:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:38px;"
                    v-for="(item,index) in entrustData" 
                    :key="index">
                    <div style="minHeight:200px;margin:58px;">
                        <div>
                            <span style="color:#E56F42;fontSize:37px;fontWeight:bold;">{{item.Ename}}</span>
                            <span style="color:#FF3840;fontSize:38px;float:right;">￥{{item.Emoney}}</span>
                        </div>
                        <div style="marginTop:38px;height:128px;">
                            <span style="color:#E56F42;fontSize:32px;">{{item.Etext}}</span>
                        </div>
                        <div style="float:right;height:28px;">
                                <img src="../../assets/about/browse.png" style="height:30px;width:30px;">
                                <span style="color:#E56F42;fontSize:22px;">{{item.Ebrowse}}</span>
                        </div>
                        <div style="paddingTop:58px;">
                            <div style="float:left;width:280px;">
                                <span style="color:#E56F42;fontSize:32px;fontWeight:bold;">难易度</span>
                                <el-rate 
                                    style="float:right;" 
                                    :colors="['#E56F42','#E56F42','#E56F42']" 
                                    v-model="item.Erate"
                                    disabled></el-rate>
                            </div>
                            <span style="color:#E56F42;float:right;margin:5px;">发布时间：{{item.Edate}}</span>
                        </div>
                    </div>
                    <div style="borderTop:1px solid #EFA589;">
                        <el-button-group style="float:right;">
                            <el-button size="mini" style="margin:28px;">查看</el-button>
                            <el-button size="mini" style="margin:28px;">编辑</el-button>
                            <el-button size="mini" style="margin:28px;">删除</el-button>
                        </el-button-group>
                    </div>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import Header from '../others/Header'

export default {
    name: 'entrust',
    components: {
        Header
    },
    data () {
        return {
            title: "我发布的委托",
            IsBack: true,
            pre_path: "/about",
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