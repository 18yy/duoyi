<template>
    <div class="Login">
        <el-container>
            <el-header>
                <Header :title="title" :IsBack="IsBack" :pre_path="pre_path" id="header"></Header>
            </el-header>
            <el-main>
                <el-card>
                    <img src="../../assets/index.png" class="image">
                    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="130px">
                        <el-form-item label="登录名" prop="name">
                            <input v-model="registerForm.name" id="name"/>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <input v-model="registerForm.password"/>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-main>
            <el-footer height="150px">
                <el-button @click.native="submitForm('registerForm')">完成注册</el-button>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import Header from '../others/Header'

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
                name: "",
                password: ""
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {
            alert('submit!');
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
    height: 400px;
    padding: 10px;
    margin: 25px;
}
.image {
    margin: 20px 70px;
    width: 80px;
    height: 70px;
}
.el-form {
    margin-top: 30px;
}
input {
    border-bottom: 1px solid #FEECDC;
}
.el-button {
    margin-left: 25px;
    width: 285px;
    height: 45px;
}
</style>