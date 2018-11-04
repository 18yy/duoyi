<template>
    <div class="About">
         <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main>
                <Basic></Basic>
                <el-card :body-style="{ padding: '0px' }" shadow="never" style="marginTop:20px;">
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;" 
                        @click="goto('Information')">个人资料</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" style="marginTop:20px;">
                    <el-button type="text" style="margin:10px 60px;color:#E56F42;" @click="Null()">聊天记录</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" style="marginTop:20px;">
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Unused')">我发布的闲置</el-button>
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Orders')">我的订单</el-button>
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Bought')">我买下的</el-button>
                </el-card>
                <el-card :body-style="{ padding: '0px' }" shadow="never" style="marginTop:20px;">
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Entrust')">我发布的委托</el-button>
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Entrusting')">我接受的委托</el-button>
                    <el-button 
                        type="text" 
                        style="margin:10px 60px;color:#E56F42;display:block;"
                        @click="goto('Entrusted')">我完成的委托</el-button>
                </el-card>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import Header from '../others/Header'
import Basic from './basicInfo.vue'

export default {
    name: 'About',
    components: {
        Header,
        Basic
    },
    data () {
        return {
            title: "个人中心",
            IsBack: false,
            pre_path: "/about"
        }
    },
    methods:{
       Null() {
            this.$message({
                message: '暂无此功能！',
                type: 'warning'
            });
        },
        goto(param) {
            this.$router.push({ 
                name: param 
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
</style>