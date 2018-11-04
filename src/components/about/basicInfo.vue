<template>
    <Card style="height:120px;padding:38px;">
        <div slot="content">
            <div class="left">
                <img src="../../assets/login/Profile.png" class="avatar">
                <div style="float:right;marginTop:28px;">
                    <div style="color:#E56F42;fontSize:32px;">JOJO DIO</div>
                    <div style="color:#F0AD94;fontSize:28px;marginTop:5px;">I don't know know</div>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/about/money.svg" style="width:38px; height:38px;float:left;">
                <div style="marginTop:3px;float:right;color:#FFCC00;fontSize:38px;">{{money}}</div>
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
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.state == 1) {
                    console.log(res.data);
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

.left {
    height: 60px;
    /* width: 200px; */
    float: left;
}
.avatar {
    width: 60px;
    height: 60px;
    border-radius:100%;
    float: left;
}
.right {
    height: 30px;
    width: 70px;
    float: right;
    padding: 15px;
}
</style>
