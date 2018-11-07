<template>
<<<<<<< HEAD
  <div>
    <div class="head">
      <img class="head-img" src="@/assets/进度条3.png">
=======
  <div class="Paying3">
    <x-header id="header" :left-options="options" @on-click-back="backTo()">
        <span class="header_title">{{title}}</span>
    </x-header>
    <div class="head">
      <img class="head-img" src="../../assets/bar3.png">
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
      <div>
        <p class="font font-one head-font-left">下单</p>
        <p class="font font-one head-font-mid">确认个人信息</p>
        <p class="font font-one head-font-right">付款</p>
      </div>
    </div>
    <div class="block block-one">
      <div style="margin-top: 50px">
        <p class="font font-three">您将向“{{username}}”支付：</p>
      </div>
      <div class="block-child-one">
        <p class="font font-four">￥{{money}}</p>
      </div>
    </div>
    <hr/>
    <div class="block block-two"></div>
    <hr/>
    <div class="block block-two"></div>
    <hr/>
    <div class="blcok block-three"></div>
    <div class="block block-four"></div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Paying3",
  data () {
    return {
      username: 'username',
      money: '1234.00'
    }
=======
import { XHeader } from 'vux'

export default {
  name: "Paying3",
  components: {
      XHeader
  },
  data () {
    return {
      title: "支付",
      options: {
	        showBack: true,
	        backText: '',
	        preventGoBack: true
	    },
      username: 'username',
      money: '1234.00'
    }
  },
  methods: {
  	backTo() {
        this.$router.push({
            path: "/paying2"
        });
    }
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
  }
}  
</script>

<<<<<<< HEAD
<style scoped>
  hr {
    height: 1px;
    width: 327px;
    margin: auto;
    border: none;
    border-top: 1px solid #FEEEDE;
  }
  .head {
    height: 65px;
    width: 327px;    
    margin: auto;
  }
  .head-img {
    width: 300px;
    height: 20px;
    margin-left: .34rem;
  }
  .head-font-left {
    float: left;
    margin: 5px 0 0 15px;
  }
  .head-font-mid {
    float: left;
    margin: 5px 0 0 2.65rem;
  }
  .head-font-right {
    float: right;
    margin: 5px 15px 0 0;
  }
  .block {
    width: 327px;
    margin: auto;
  }
  .block-one {
    height: 140px;
    //border: 1px solid red;
  }
  .block-two {
    height: 80px;
    //border: 1px solid blue;
  }
  .block-three {
    height: 190px;
    //border: 1px solid green;
  }
  .block-four {
    height: 44px;
    //border: 1px solid blue;
  }
  .block-child-one {
    margin: 40px;
    text-align: center;
  }
  .font {
    display: inline;
    color: rgb(229,111,66);
  }
  .font-one {
    font-size: 10px;    
  }
  .font-two {
    font-size: 14px;
  }
  .font-three {
    font-size: 12px;
  }
  .font-four {
    font-size: 40px;
  }  
=======
<style>
#header {
  background-color: #F9F9F9;
}
.header_title {
    height: 90px;
    width: 180px;
    text-align: center;
    color: #E56F42;
    font-weight: bold;
}
hr {
  height: 1px;
  width: 327px;
  margin: auto;
  border: none;
  border-top: 1px solid #FEEEDE;
}
.head {
  height: 65px;
  width: 327px;    
  margin: 25px auto;
}
.head-img {
  width: 300px;
  height: 20px;
  margin-left: .34rem;
}
.head-font-left {
  float: left;
  margin: 5px 0 0 15px;
}
.head-font-mid {
  float: left;
  margin: 5px 0 0 2.65rem;
}
.head-font-right {
  float: right;
  margin: 5px 15px 0 0;
}
.block {
  width: 327px;
  margin: auto;
}
.block-one {
  height: 140px;
  /* border: 1px solid red; */
}
.block-two {
  height: 80px;
  /* border: 1px solid blue; */
}
.block-three {
  height: 190px;
  /* border: 1px solid green; */
}
.block-four {
  height: 44px;
  /* border: 1px solid blue; */
}
.block-child-one {
  margin: 40px;
  text-align: center;
}
.font {
  display: inline;
  color: rgb(229,111,66);
}
.font-one {
  font-size: 10px;    
}
.font-two {
  font-size: 14px;
}
.font-three {
  font-size: 12px;
}
.font-four {
  font-size: 40px;
}  
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
</style>
