<template>
    <div class="Register">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main>
                <el-card>
                    <img src="../../assets/register/logo.png" class="logo">
                    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="170px">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="registerForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="登录名" prop="username">
                            <el-input v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密  码" prop="password1">
                            <el-input v-model="registerForm.password" type="password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="password2">
                            <el-input v-model="registerForm.password" type="password"></el-input>
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
import Header from '../others/Header'

export default {
    name: 'Register',
    components: {
        Header
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
            IsBack: true,
            pre_path: "/login",
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$router.push({
                        path: "/login"
                    });
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
    padding: 0;
    margin: 0;
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
  height: 70px;
  padding-top: 25px;
  background-color: #FEECDC;
}
.vux-header-left {
  margin-top: 25px;
}
.el-main {
    margin-top:40px;
}
.el-card {
    height: 420px;
    padding: 10px;
    margin: 25px;
}
.logo {
    margin: 20px 70px;
    width: 80px;
    height: 70px;
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
    /* width: 100px; */
    border: 0;
    border-bottom: 1px solid #FEECDC;
}
.el-form-item__error {
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

