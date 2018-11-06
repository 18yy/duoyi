<template>
    <Card class="basicCard">
        <div slot="content">
            <div class="left">
                <img src="../../assets/login/Profile.png" class="leftImg">
                <div class="leftInfo">
                    <div class="leftName">{{name}}</div>
                    <div class="leftUsername">{{username}}</div>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/about/money.svg" class="rightImg">
                <div class="rightMoney">{{money}}</div>
            </div>
        </div>
    </Card>
</template>
<script>
import { Card } from 'vux'
import api from '../../services/main.js'

export default {
    name: 'Basic',
    components: {
        Card
    },
    data () {
        return {
       		name: '',
       		username: '',
       		money: ''
        }
    },
    methods:{
        init() {
            api.getInfo((err, res) => {
                if (err || res.status != 200) {
               	 	this.$message.error("出错了，刷新一下吧");
                 	return;
                 }
                if (res.data.status == 1) {
                    this.name = res.data.result.name;
                    this.username = res.data.result.username;
                    this.money = res.data.result.money;
                } else{
                    this.$message.error(res.data.message);
                }
            });
        }
    },
    created(){
        this.init();
    },
    mounted(){
    
    },
    watch: {
        '$route' () {
            
        }
    }
}
</script>

<style>
.basicCard {
	height: 60px;
	padding: 18px;
}
.left {
    height: 60px;
   /* width: 200px;*/
    float: left;
}
.leftImg {
    width: 60px;
    height: 60px;
    border-radius:100%;
    float: left;
}
.leftInfo {
	float: right;
	margin-top: 16px;
    margin-left: 12px;
}
.leftName {
	color: #E56F42;
	font-size: 16px;
}
.leftUsername {
	color: #F0AD94;
	font-size: 14px;
	margin-top: 8px;
}
.right {
    height: 30px;
    float: right;
    padding: 15px;
}
.rightImg {
	width: 18px; 
	height: 18px;
	float: left;
}
.rightMoney {
	float: right;
	color: #FFCC00;
	font-size: 19px;
    margin-top: 1px;
    margin-left: 8px;
}
</style>
