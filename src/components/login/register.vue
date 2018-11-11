<template>
    <div class="Register">
        <el-container>
        	<div class="indexheader">
            	<span style="color:#E56F42;" class="el-icon-arrow-left" @click="backTo()"></span>
				<p>{{title}}</p >
			</div>
            <el-main>
                <el-card class="registerCard">
                    <img src="../../assets/register/logo.png" class="registerImg">
                    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="170px">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="registerForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="登录名" prop="username">
                            <el-input v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="password1">
                            <el-input v-model="registerForm.password1" type="password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password2">
                            <el-input v-model="registerForm.password2" type="password"></el-input>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-main>
            <el-footer height="150px">
                <el-button @click.native="submitForm('registerForm')" class="confirm">完成注册</el-button>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import api from '../../services/main.js'

export default {
    name: 'Register',
    components: {
        XHeader
    },
    data () {
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.registerForm.password1) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            title: "注册",
            options: {
                showBack: true,
                backText: '',
                preventGoBack: true
            },
            registerForm: {
                name: "",
                username: "",
                password1: "",
                password2: ""
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                username: [
                    { required: true, message: '请输入登录名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                    { pattern: /[A-Za-z0-9]/, message: '登录名格式有误',trigger: 'blur'}
                ],
                password1: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' },
                    { pattern: /[A-Za-z0-9]/, message: '密码格式有误',trigger: 'blur'}
                ],
                password2: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
 
                ]
            }
        }
    },
    methods:{
        backTo() {
            this.$router.push({
                path: "/login"
            });
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                	let data = {
                		name: this.registerForm.name,
                		username: this.registerForm.username,
                		password: this.registerForm.password2
                	}
                	console.log(data);
                	api.register((err, res) => {
                        if (err || res.status !== 200) {
    	                    this.$message.error("出错了，刷新一下吧");
    	                    return;
                        }
                        if (res.data.status == 1) {
                            this.$router.push({ path: '/login' });
                            //console.log(res);
                        } else{
                            this.$message.error(res.data.message);
                            //console.log(res);
                        }
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
.Register .el-container {
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
.indexheader /deep/ .el-icon-arrow-left {
	font-size: 25px;
	margin-left:20px;
	font-weight: bold;
}
.Register .registerCard {
    height: 420px;
    padding: 10px;
    margin: 40px 25px 25px 25px;
}
.Register .registerImg {
    margin: 20px 70px;
    width: 80px;
    height: 70px;
}
.Register /deep/ .el-form {
    margin-top: 20px;
}
.Register /deep/ .el-form-item {
    margin-bottom: 5px;
}
.Register /deep/ .el-form-item__label {
    line-height: 55px;
    color:#F0AD94;
    font-size: 15px;
}
.Register /deep/ .el-input__inner {
    /* width: 100px; */
    border: 0;
    border-bottom: 1px solid #FEECDC;
}
.Register /deep/ .el-form-item__error {
    top: 80%;
}
.confirm {
    font-size: 20px;
    margin-left: 28px;
    width: 280px;
    height: 50px;
    background-color: #FF9565;
    color: #FFFFFF;
}
</style>

