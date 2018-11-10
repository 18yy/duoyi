<template>
  <div class="secondHand">
    <div>
    <div class="card" v-for="(item,index) in cardMsg" @click="toDetail(index)">
      <div class="goodsImg">
        <img :src="item.img[0]" >
      </div>
      <div class="cardInfo">
        <div class="goodsInfo">
          <div>
            <p class="goodsName">{{item.name}}</p>
            <p class="tradeType">#线下交易#</p>
          </div>

          <p class="goodsPrice"> ￥{{item.price}}</p>
            <!-- <span class="intNum">22</span>.22</p> -->
        </div>

        <div class="sellerInfo">
          <img :src="item.userImg" alt="" class="sellerImg">
          <div>
            <p class="sellerName">{{item.username}}</p>
            <p class="sellerAdr">生活区西区</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import api from '../../services/main.js'
  export default {
    name: 'second-hand',
    data() {
      return {
        cardMsg:[]

      }
    },
    methods: {
      toDetail(index){
        this.$store.state.showGoodsDetail= this.cardMsg[index]
          this.$router.push({
              path: "/goodsMsg"
            });
      }
    },
    created() {

    },
    mounted() {
      api.showGoods((err, res) => {
        if (res.data.status == 1) {
           this.cardMsg=res.data.result
        } else {
          this.$message.error("提交失败");
        }
      })

    }
  }

</script>

<style scoped>
  .secondHand {
    width: 100%;
     min-height:90%;
     background-color: rgb(239, 239, 244);
     margin-top: 10%;
  }
  .secondHand>div{
    box-sizing: border-box;
    padding: 30px 0 70px 0;
    width:92%;
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;

  }
  .card {
    width: 167px;
    height: 232px;
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
  }

  .goodsImg {
    position: relative;
    top: 0;
    left: 0;
    width:167px;
    height: 45%;
    border:none;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    overflow: hidden
  }
   .goodsImg>img{
    width:100%;
    height: auto;
   }
  .cardInfo {
    margin: 0 auto;
    width: 80%;
    height: 55%;
    padding: 10px 0;
    box-sizing: border-box;
    position: relative;

  }

  .goodsInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .goodsInfo .goodsName {
    padding-right: 3px;
    font-size: 14px;
    line-height: 16px;
    color: rgb(127, 127, 127);
  }

  .goodsInfo .tradeType {
    font-size: 10px;
    color: rgb(209, 209, 214);
    padding-top: 5px;
  }

  .goodsInfo .goodsPrice {
    font-size: 13px;
    color: rgb(255, 59, 48);
  }

  .goodsInfo .goodsPrice .intNum {
    font-size: 16px;
  }

  .sellerInfo {
    display: flex;
    align-items: flex-start;
    position: absolute;
    bottom: 10px;
  }

  .sellerInfo .sellerImg {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    /* background: yellow; */
    margin-right: 9px;

  }

  .sellerInfo div {
    flex: 1;
    font-size: 12px;
    color: rgb(186, 186, 187);
    line-height: 15px;

  }

  .sellerInfo div .sellerAdr {
    font-size: 10px;
    color: #ffcc99;
    line-height: 13px;
  }

</style>
