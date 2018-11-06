<template>
    <div class="Login">
        <el-container>
            <el-header>
                <x-header id="header" :left-options="{ showBack: false }" @on-click-back="backTo()">
                    <span class="headerTitle">{{title}}</span>
                </x-header>
            </el-header>
            <el-main>
                <el-card class="loginCard">
                    <img src="../../assets/login/Profile.png" class="loginImg">
                    <el-form 
                    	:model="loginForm" 
                    	:rules="rules" 
                    	ref="loginForm" 
                    	label-width="150px">
                        <el-form-item label="登录名" prop="username">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="password">
                            <el-input v-model="loginForm.password" type="password"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button type="text" class="button" @click="Null()">忘记密码？</el-button>
                    <div class="line">第三方登录</div>
                    <div class="third">
                        <img src="../../assets/login/QQ.png" class="QQ" @click="Null()">
                        <img src="../../assets/login/wechat.png" class="wechat" @click="Null()">
                    </div>
                </el-card>
            </el-main>
            <el-footer height="150px">
                <el-button @click="jump()" class="register">注册</el-button>
                <el-button @click="submitForm('loginForm')" class="loginBtn">登录</el-button>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import api from '../../services/main.js'


export default {
    name: 'Login',
    components: {
        XHeader
    },
    data () {
        return {
            title: "登录",
            loginForm: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                    { pattern: /[A-Za-z0-9]/, message: '登录名格式有误',trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' },
                    { pattern: /[A-Za-z0-9]/, message: '密码格式有误',trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        Null() {
            this.$message({
                message: '暂无此功能！',
                type: 'warning'
            });
        },
        jump() {
            this.$router.push({ path: '/register' });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let data = {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    }
                    api.login((err, res) => {
                        if (err || res.status !== 200) {
    	                    this.$message.error("出错了，刷新一下吧");
    	                    return;
                        }
                        if (res.data.status == 1) {
                        	sessionStorage.setItem("username", this.loginForm.username);
                            this.$router.push({ path: '/' });
                            //console.log(res);
                        } else{
                            this.$message.error(res.data.message);
                        }
                        this.$refs[formName].resetFields();
                    },data);
                } else {
                    this.$message.error("格式错误");
                    return false;
                }
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
    margin:0;
    padding:0; 
}
.el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #FEECDC;
}
.el-header {
  padding: 0;
}
#header {
  background-color: #FEECDC;
}
.headerTitle {
    height: 90px;
    width: 180px;
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.loginCard {
    height: 420px;
    padding: 10px;
    margin: 25px;
}
.loginImg {
    margin: 20px 70px;
    width: 70px;
    height: 70px;
    border-radius:100%;
    border: 1px dashed #707070;
    padding: 5px;
}
.Login .el-form {
    margin-top: 20px;
}
.Login .el-form-item {
    margin-bottom: 5px;
}
.Login .el-form-item__label {
    line-height: 55px;
    color:#F0AD94;
    font-size: 15px;
}
.Login .el-input__inner {
    /* width: 150px; */
    border: 0;
    border-bottom: 1px solid #FEECDC;
}
.Login .el-form-item__error {
    top: 80%;
}
.Login .el-button--text {
    float: right;
    color:#C7C7CC;
}
.line {
    width: 100%;
    text-align: center;
    margin-top: 60px;
    color: #C7C7CC;
}
.QQ , .wechat {
	width: 30px;
    height: 30px;
    border-radius:100%;
    margin-top: 20px;
    border: 1px solid #ff9565;
    padding: 5px;
}
.QQ {
    float:left;
    margin-left: 30px;
}
.wechat {
    float: right;
    margin-right: 30px;
}
.register, .loginBtn {
    font-size: 20px;
    margin-left: 25px;
    width: 135px;
    height: 50px;
}
.register {
    color:#F0AD94;
}
.loginBtn {
    background-color: #FF9565;
    color: #FFFFFF;
}
</style>