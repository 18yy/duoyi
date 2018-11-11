<template>
  <div>
    <transition name="fade">
      <div class="mask" v-show="isReallyShow" @click="hideSlide"></div>
    </transition>
    <transition name="slide-fade">
      <div class="slideContent" v-show="isReallyShow">
        <div class="slideUserInfo">
          <div>
            <div class="userAvatar">
            	<img :src="avatar" alt="">
            </div>
            <p class="userName">一包</p>
            <p class="userDes">生活区西区</p>
          </div>
        </div>
        <div class="slideMenu">
          <div>
            <img src="../../../assets/indexslidebar/jinbi.png" alt="">
            <span>我的金币</span>
          </div>
          <div @click="goto">
            <img src="../../../assets/indexslidebar/goods.png" alt="">
            <span>我的闲置</span>
          </div>
          <div>
            <img src="../../../assets/indexslidebar/msg.png" alt="">
            <span>我的消息</span>
          </div>
          <div>
            <img src="../../../assets/indexslidebar/weituo.png" alt="">
            <span>我接受的委托</span>
          </div>
        </div>
        <div class="slideMenu">
          <div>
            <img src="../../../assets/indexslidebar/team.png" alt="">
            <span>我的队伍</span>
          </div>
          <div>
            <img src="../../../assets/indexslidebar/competition.png" alt="">
            <span>与我相适配的比赛</span>
          </div>
        </div>
        <div class="slideMenu">
          <div>
            <img src="../../../assets/indexslidebar/people.png" alt="">
            <span>联系客服</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import api from '../../../services/main.js'

    export default {
        name: 'slide-bar',
        data() {
            return {
            	name: "",
            	avatar: "",
                menuTopMsg:[
                  '我的金币',
                  '我的闲置',
                  '我接受的委托'
                ],
                 menuBottomMsg:[
                  '与我相适配的比赛',
                  '与我相适配的队伍',
                  '与我相适配的委托'
                ]

            }
        },
        methods: {
        	init() {
        		api.getInfo((err, res) => {
                if (err || res.status !== 200) {
                this.$message.error("出错了，刷新一下吧");
                return;
                }
                if (res.data.status == 1) {
                	this.avatar = res.data.result.img;
                	this.name = res.data.result.name;
                    
                   	//console.log(res.data);
                } else{
                    this.$message.error(res.data.message);
                }
            });
        	},
            hideSlide: function() {
                this.$store.dispatch('hideSlideBar');
            },
            goto(){
            	 this.$store.dispatch('hideSlideBar');
            	this.$router.push({ path: '/about/unused' });
            }
        },
        computed: {
            isReallyShow() {
                return this.$store.getters.isShowMethod
            }
        },
        mounted() {
        	this.init();
        }
    }
</script>

<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 1;
        z-index: 10;
        background: rgba(255, 255, 255, 0.5);
    }
    
    .slideContent {
        width: 60%;
        height: 100%;
        position: fixed;
        z-index: 11;
        left: 0;
        top: 0;
        bottom: 0;
        background: rgb(255, 255, 255);
        box-shadow:1px 0px 17px rgba(229, 111, 66,0.6)
    }
    
    .fade-enter-to,
    .fade-leave-to {
        opacity: 1;
        transition: opacity 0.3s
    }
    
    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
    
    .slide-fade-enter-to,
    .slide-fade-leave-to {
        opacity: 1;
        transition: transform 0.3s;
        transform: translate(0px, 0px);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 0;
        transform: translate(-100%, 0);
        transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
    }
    
    .slideUserInfo {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .slideUserInfo>div {
        width: 100%;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .userAvatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgb(254, 238, 222);
        margin-bottom: 5px;
    }
    .userAvatar img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgb(254, 238, 222);
        margin-bottom: 5px;
    }
    .userName {
        font-size: 18px;
        color: rgb(229, 111, 66);
        font-weight: bold;
    }
    
    .userDes {
        font-size: 12px;
        color: rgb(229, 111, 66);
    }
    
   .slideMenu{
     width: 100%;
     padding: 15px 0px 15px 18px;
     border-top: 1px solid rgb(254, 238, 222);
     
     
   }
   .slideMenu div{
     display: flex;
     padding: 8px 0;
   }
   .slideMenu div img{
     width: 12px;
     height: 12px;
     margin-right: 10px;
   }
   .slideMenu div span{
     flex:1;
     font-size: 12px;
     color: rgb(229, 111, 66);
   }
</style>