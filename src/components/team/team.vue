<template>
    <div class="Team">
    	 <el-container>
         	<el-header>
	            <x-header id="header" :left-options="{ showBack: false }">
	                <span class="headerTitle">{{title}}</span>
	            </x-header>
	        </el-header>
	        <el-main class="teamMain">
	        	<img src="../../assets/null.png" alt="">
	        </el-main>
	    </el-container>   
    </div>
</template>
<script>
import { XHeader } from 'vux'

export default {
    name: 'Team',
    components: {
        XHeader
    },
    data () {
        return {
            title: "组队 "
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

<style scoped>
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
  z-index: 99;
  height: 40px;
}
#header {
  background-color: #F9F9F9;
}
.headerTitle {
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
.teamMain {
	width: 100%;
	height: 100%;
	padding: 0;
}	
.teamMain img {
	width: 100%;
	height: 100%;
}
</style>