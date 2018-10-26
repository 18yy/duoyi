<template>
    <div class="Login">
        <router-link :to="{ name:'Index', params: {title: '首页'} }">
            <el-button type="success">登录</el-button>
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data () {
            return {
                
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

</style>