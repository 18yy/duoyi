<template>
    <div class="Login">
        <el-container>
            <div class="indexheader">
				<p>{{title}}</p >
			</div>
            <el-main class="loginMain">
                <el-card class="loginCard">
                    <img src="../../assets/login/Profile.png" class="loginImg">
                    <el-form 
                    	:model="loginForm" 
                    	:rules="rules" 
                    	ref="loginForm">
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
            <div class="footer">
                <el-button @click="jump()" class="register">注册</el-button>
                <el-button @click="submitForm('loginForm')" class="loginBtn">登录</el-button>
            </div>
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

<style scoped>
body {
    margin:0;
    padding:0; 
}
.Login .el-container {
    width:100%;
    clear:both;
    position:absolute;
    top:0px;
    bottom:0px;
    background-color: #FEECDC;
}
.indexheader{
		width: 100%;
		height: 45px;
		position: fixed;
		top: 0;
		z-index: 9;
		background-color: #FEECDC;
		display: flex;
		align-items: center;
	}
.indexheader>p{
	font-size: 18px;
	position: absolute;
	left: 50%;
	margin-left: -25px;
	color:#E56F42;
}
.loginMain {
	padding-left: 0;
	padding-right: 0;
}
.Login .loginCard {
    height: 420px;
    padding: 10px;
    margin: 55px 40px;
}
.Login .loginImg {
    margin: 20px 70px;
    width: 70px;
    height: 70px;
    border-radius:100%;
    border: 1px dashed #707070;
    padding: 5px;
}
.Login /deep/ .el-form {
    margin-top: 20px;
    width: 100%;
}
.Login /deep/ .el-form-item {
    margin-bottom: 5px;
    width: 100%;
}
.Login /deep/ .el-form-item__label {
	width: 68px;
    line-height: 55px;
    color:#F0AD94;
    font-size: 15px;
}
.Login /deep/ .el-form-item__content {
	float: right;
	width: 4.2rem;
}
.Login /deep/ .el-input__inner {
    /* width: 150px; */
    border: 0;
    border-bottom: 1px solid #FEECDC;
}
.Login /deep/ .el-form-item__error {
    top: 80%;
}
.Login /deep/ .el-button--text {
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
.footer {
	background-color: #FEECDC;
    color: #333;
    text-align: center;
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
	height: 88px;
}
</style>