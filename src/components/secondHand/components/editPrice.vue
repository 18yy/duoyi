<template>
  <div class="editPriceBox">
    <div class="editBox"> 
      <div class="editSmallBox">
        <p>价格</p>
        <div>
          <span>￥</span>
          <input type="text" v-model="price" >
        </div>
      </div>
      <div class="editSmallBox">
        <p>入手价</p>
        <div>
          <span>￥</span>
          <input type="text" >
        </div>
      </div>
      <div class="editSmallBox">
        <p>运费/寄存费</p>
        <div>
          <span>￥</span>
          <input type="text" >
        </div>
      </div>
    </div>
   
      <div :class="[isEdit?'editPriceBtn-check':'editPriceBtn-close']"  @click="closeBox">
        <transition name="fade" v-if="isEdit">
           <x-icon type="ios-checkMark-empty" size="80" style="fill:#cc6633"  ></x-icon>
        </transition>
        <transition name="fade" v-else>
          <x-icon type="ios-close-empty" size="80" style="fill:white" ></x-icon>
        </transition>
      </div>
    
  </div>
</template>
<script>
   export default {
      name: 'editPrice',
      data() {
        return {
          isEdit:false,
          price:''
        }
      },
       methods: {
          closeBox: function () {
            this.$emit('listenToChildClick',this.isEdit,this.price)
          }
        },
      watch:{
        price:function(curval,odeVal){
          if(curval!=""){
            this.isEdit= true
          }else{
             this.isEdit = false
          }
          
        }
      }
   }

</script>

<style>
   .fade-enter-to, .fade-leave-to{
     opacity: 1;
    transition: opacity 0.2s;
   
  }
  .fade-enter,.fade-leave-to{ 
    opacity: 0;
  }  
  .editPriceBox{
    width: 100%;
    height: 100%;
    background: rgba(254,238,222,0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
   

  }
  .editBox{
    width: 75%;
    height:180px;
    background: white;
    border-radius: 15px;
    margin: 0 auto;
    margin-top:50%;
    display: flex;
    flex-direction: column;
     box-shadow: 2px 8px 7px rgba(255,149,101,0.2);
  }
  .editSmallBox{
    width: 100%;
    flex:1;
    padding:0 25px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(254, 238, 222);
    font-size: 16px;
  }
   .editSmallBox:last-child{
     border: 0;
   }
    .editSmallBox>p{
      color:rgb(229,111,66);
    }
    .editSmallBox>div{
      font-size: 18px;
      line-height:17px;
    }
  .editSmallBox input{
    width: 50px;
    height: 20px;
    padding-bottom: 4px;
    box-sizing: border-box

  }
  .editPriceBtn-close{
    width: 38px;
    height: 38px;
    margin: 0 auto;
    margin-top: 30px;
    background: #ddd;
    border-radius: 50%;
    border: 2px solid  white;

  }
  
   .editPriceBtn-check{
    width: 38px;
    height: 38px;
    margin: 0 auto;
    margin-top: 30px;
    background:rgba(255,255,255,0.5);
    border-radius: 50%;
    border: 2px solid  #cc6633;

  }
 
</style>