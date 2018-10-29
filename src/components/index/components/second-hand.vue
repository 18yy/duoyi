<template>
  <div class="secondHand">
    <div class="card" v-for="(item,index) in cardImg">
      <img src="" alt="" class="goodsImg">
      <div class="cardInfo">
        <div class="goodsInfo">
          <div>
            <p class="goodsName">{{item.goodsName}}</p>
            <p class="tradeType">#{{item.tradeType}}#</p>
          </div>

          <p class="goodsPrice">￥22.2</p>
            <!-- <span class="intNum">22</span>.22</p> -->
        </div>

        <div class="sellerInfo">
          <img src="" alt="" class="sellerImg">
          <div>
            <p class="sellerName">{{item.sellerName}}</p>
            <p class="sellerAdr">{{item.sellerAdr}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'second-hand',
    data() {
      return {
        cardImg: [{
            imgSrc: '',
            goodsName: '二手书籍数据结构',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'

          }, {
            imgSrc: '',
            goodsName: '二手书籍数据结构',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          }, {
            imgSrc: '',
            goodsName: '二手书籍数据结构哈哈哈哈',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          }, {
            imgSrc: '',
            goodsName: '二手书籍数据结构哈哈哈哈',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          },
          {
            imgSrc: '',
            goodsName: '二手书籍数据结构哈哈哈哈',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          }, {
            imgSrc: '',
            goodsName: '二手书籍数据结构哈哈哈哈',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          }, {
            imgSrc: '',
            goodsName: '二手书籍数据结构哈哈哈哈',
            tradeType: '线下交易',
            sellerName: 'yibaoyyyyyy',
            sellerAdr: '生活区西区'
          }
        ]

      }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
  }

</script>

<style>
  .secondHand {
    box-sizing: border-box;
    padding: 60px 0 10px 0;
    width: 92%;
    height: auto;
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
    background: rgb(229, 111, 66);
    width: 100%;
    height: 45%;
    border-radius: 5px 5px 0px 0px;
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
    /* height: 40%; */
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
    background: yellow;
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
