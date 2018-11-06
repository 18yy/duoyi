<template>
    <Card class="basicCard">
        <div slot="content">
            <div class="left">
                <img src="../../assets/login/Profile.png" class="leftImg">
                <div class="leftInfo">
                    <div class="leftName">JOJO DIO</div>
                    <div class="leftDetails">I don't know know</div>
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
           money: "444"
        }
    },
    methods:{
        init() {
            api.getInfo((err, res) => {
                if (err || res.status !== 200) {
                	console.log(res);
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.state == 1) {
                    console.log(res);
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
.basicCard {
	height: 60px;
	padding: 18px;
}
.left {
    height: 60px;
    width: 200px;
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
	margin-top: 14px;
}
.leftName {
	color: #E56F42;
	font-size: 16px;
}
.leftDetails {
	color: #F0AD94;
	font-size: 14px;
	margin-top: 2px;
}
.right {
    height: 30px;
    width: 70px;
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
}
</style>
