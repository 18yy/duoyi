<template>
    <div class="unused">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main style="padding:0;">
                <el-card 
                    :body-style="{ padding: '0px' }" 
                    shadow="never" 
                    style="marginTop:30px;"
                    v-for="(item,index) in unusedData" 
                    :key="index">
                    <div>
                        <img src="../../assets/login/Profile.png" class="unusedImg">
                        <div style="float:right; marginTop:38px;marginRight:58px;">
                            <div style="color:#E56F42;fontSize:32px;float:left;">{{item.Ugoods}}</div>
                            <div style="color:#FF3840;fontSize:38px;float:right;marginLeft:280px;">￥{{item.Umoney}}</div>
                        </div>
                        <div style="paddingTop:128px;">
                            <span style="color:#F0AD94;"> 浏览：{{item.Ubrowse}}</span>
                            <span style="color:#F0AD94;marginLeft:38px;">评论：{{item.Ucomment}}</span>
                        </div>
                    </div>
                    <el-button-group style="float:right;marginTop:18px;">
                        <el-button size="mini" style="margin:20px;">查看</el-button>
                        <el-button size="mini" style="margin:20px;">编辑</el-button>
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
    name: 'unused',
    components: {
        Header
    },
    data () {
        return {
           title: "我发布的闲置",
            IsBack: true,
            pre_path: "/about",
            unusedData: [{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
            },{
                Ugoods: "书书书",
                Umoney: "2222",
                Ubrowse: "20",
                Ucomment: "40"
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
.unusedImg {
    width: 60px;
    height: 60px;
    float: left;
    margin: 12px;
}
</style>