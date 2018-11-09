<template>
  <div class="one">
    <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
      <span class="radio" :class="{'on':item.isChecked}"></span>
      <input v-model="payType" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">{{item.label}}
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
        payType: '在线支付',
        radios:[
          {
            label: 'Standart(7days)',
            value:'Standart(7days)',
            isChecked: true,
          },
          {
            label: 'Express(2days)',
            value:'Express(2days)',
            isChecked: false,
          },
          {
            label: 'Premium(1day)',
            value:'Premium(1day)',
            isChecked: false,
          }
        ]
    }
  },
  methods: {
    check(index) {
      // 先取消所有选中项
      this.radios.forEach((item) => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.payType = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
      console.log(this.payType);
    },
    loadData(){
        // 设置一进来是  在线支付  还是  线下支付
        _this.payType = data.FPayType
        if(data.FPayType === "在线支付"){
          _this.$set(_this.radios[0],'isChecked',true)  
          _this.$set(_this.radios[1],'isChecked',false)  
        }else{
          _this.$set(_this.radios[0],'isChecked',false)  
          _this.$set(_this.radios[1],'isChecked',true)  
        }
    }
  }
}
</script>
  
<style>
  .one {
    width: 50%;
  }
  .radio-box{
    display: inline-block;
    position: relative;
    height: 25px;
    line-height: 25px;
    margin-right: 5px;
  }
  .input-radio {
    display: inline-block;
    position: absolute;
    opacity: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    left: 0px;
    outline: none;
    -webkit-appearance: none;
  }
  .radio {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    cursor: pointer;
    background-image: url(../../../src/assets/radio-unclick.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .on {
    background-image: url(../../../src/assets/radio-click.png);
    background-size: 100% 100%;
    //background-position: -25px 0;
  }
</style>
