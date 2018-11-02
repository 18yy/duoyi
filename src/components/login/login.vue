<template>
    <div class="Login">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main>
                <el-card id="card">
                    <img src="../../assets/Profile.png" class="image">
                    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="150px">
                        <el-form-item label="登录名" prop="username">
                            <el-input v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="password">
                            <el-input v-model="registerForm.password" type="password"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button type="text" class="button" @click="Null()">忘记密码？</el-button>
                    <div class="line">第三方登录</div>
                    <div class="third">
                        <img src="../../assets/QQ.png" class="QQ" @click="Null()">
                        <img src="../../assets/wechat.png" class="wechat" @click="Null()">
                    </div>
                </el-card>
            </el-main>
            <el-footer height="150px">
                <el-button @click="jump()" class="register">注册</el-button>
                <el-button @click="submitForm('registerForm')" class="login">登录</el-button>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import Header from '../others/Header'
import api from '../../services/main.js'


export default {
    name: 'Login',
    components: {
        Header
    },
    data () {
        return {
            title: "登录",
            IsBack: false,
            pre_path: "/login",
            registerForm: {
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
                    username: this.registerForm.username,
                    password: this.registerForm.password
                }
                api.login((err, res) => {
                    if (err || res.status !== 200) {
                    this.$message.error("出错了，刷新一下吧");
                    return;
                    }
                    if (res.data.state == 1) {
                        this.$router.push({ path: '/index' });
                    } else{
                        this.$message.error(res.data.message);
                    }
                },data);
            } else {
                console.log('error submit!!');
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
  height: 45px;
  margin-top: 25px;
  background-color: #FEECDC;
}
.el-main {
    margin-top:20px;
}
.el-card {
    height: 420px;
    padding: 10px;
    margin: 30px;
}
.image {
    margin: 20px 70px;
    width: 70px;
    height: 70px;
    border-radius:100%;
    border: 1px dashed #707070;
    padding: 5px;
}
.el-form {
    margin-top: 20px;
}
.el-form-item {
    margin-bottom: 5px;
}
.el-form-item__label {
    line-height: 55px;
    color:#F0AD94;
    font-size: 15px;
}
.el-input__inner {
    /* width: 150px; */
    border: 0;
    border-bottom: 1px solid #FEECDC;
}
.el-form-item__error {
    top: 80%;
}
.el-button--text {
    float: right;
    color:#C7C7CC;
}
.line {
    width: 100%;
    text-align: center;
    margin-top: 60px;
    color: #C7C7CC;
}
.QQ {
    width: 30px;
    height: 30px;
    border-radius:100%;
    float:left;
    margin-top: 20px;
    margin-left: 30px;
    border: 1px solid #ff9565;
    padding: 5px;
}
.wechat {
    width: 30px;
    height: 30px;
    border-radius:100%;
    float: right;
    margin-top: 20px;
    margin-right: 30px;
    border: 1px solid #ff9565;
    padding: 5px;
}
.register, .login {
    font-size: 20px;
    margin-left: 25px;
    width: 135px;
    height: 50px;
}
.register {
    color:#F0AD94;
}
.login {
    background-color: #FF9565;
    color: #FFFFFF;
}
</style>