<template>
    <div class="information">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main>
                <Basic></Basic>
                <el-collapse accordion>
                    <el-collapse-item v-for="(item,index) in InfoData" :key="index">
                        <template slot="title">
                            <div class="leftIcon">
                                <img :src="item.src" class="icon">
                                <div style="height:50px;color:#E56F42;fontSize:32px;marginTop:-42px;">{{item.detail}}</div>
                                <div style="height:50px;color:#F0AD94;fontSize:28px;">{{item.title}}</div>
                            </div>
                        </template>
                        <div>暂时啥也没有
                            <!-- <el-input style="fontSize:58px;color:#E56F42;" v-model="item.title">
                                <el-button slot="append" icon="el-icon-edit"></el-button>
                            </el-input> -->
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-main>
         </el-container>
    </div>
</template>

<script>
import Header from '../others/Header'
import Basic from './basicInfo.vue'
import api from '../../services/main.js'

export default {
    name: 'information',
    components: {
        Header,
        Basic
    },
    data () {
        return {
            title: "个人资料",
            IsBack: true,
            pre_path: "/about",
            InfoData: [{
                title: "用户名",
                detail: "aaa",
                src: require("../../assets/information/name.png")
            },{
                title: "个人简介",
                detail: "emmmm",
                src: require("../../assets/information/quote.png")
            },{
                title: "技能树",
                detail: "啥也不会",
                src: require("../../assets/information/medal.png")
            },{
                title: "联系电话",
                detail: "123456789",
                src: require("../../assets/information/phone.png")
            },{
                title: "收货地址",
                detail: "广东工业大学",
                src: require("../../assets/information/places.png")
            },{
                title: "联系邮箱",
                detail: "123456789",
                src: require("../../assets/information/message.png")
            }]
        }
    },
    methods:{
        init() {
            api.getInfo((err, res) => {
                if (err || res.status !== 200) {
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.state == 1) {
                    console.log(res.data);
                } else{
                    this.$message.error(res.data.message);
                }
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
    padding:0;
    margin-top: 40px;
}
.leftIcon {
    height: 36px;
    width: 220px;
    float: left;
    margin: 10px;
}
.icon {
    width: 20px;
    height: 20px;
    padding: 5px;
    margin-right: 18px;
    float: left;
}
.el-collapse-item__header {
    height:50px;
    margin:15px;
    padding: 12px;
}
.el-collapse-item__content {
    padding: 0;
}
</style>