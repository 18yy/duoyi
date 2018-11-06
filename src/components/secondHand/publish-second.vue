<template>
  <div class="publishWrap">
    <XHeader>
      <x-icon slot="overwrite-left" type="ios-close-empty" size="100" style="fill:#cc6633;position:relative;top:-25px;left:-10px;"></x-icon>
      发布闲置
    </XHeader>
    <div class="publishBox">
      <div :class="[isBarShow?'leftContent-active':'leftContent']">
        <div class="publishTop">
          <div class="title">
            <input type="text" placeholder="标题 品类品牌型号" maxlength="20" v-model="name">
          </div>
          <div class="descript">
            <textarea type="text"  placeholder="描述一下商品的转手原因，入手渠道和使用感受" v-model="describe">
              
            </textarea>
          </div>
          <div class="imgAndMore">
            <div class="updateImg">
              <div class="previewBox">  

              </div>
              <div class="previewBox">  
                
              </div>
              <div class="updateInput">
                <input type="file" @change="getFile($event)">
              </div>
            </div>
            <div class="moreIco" @click="showBar" v-show="!isBarShow">
              <span>更多</span>
              <img :src="menuSrc" alt="">
            </div>
          </div>
        </div>
        <div class="publishBottom">
          <div class="checkContent">
            <p >支持交易方式（可多选）</p>
            <div class="checkBox" >
            <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
              <div class="inputBox">
                <span class="radio" :class="{'on':item.isChecked}"></span>
                <input :value="item.label" :checked='item.isChecked' @click="check(index)" type="checkbox">
              </div>
              <p class="font-two" :class="{'on-font':item.isChecked}">{{item.label}}</p>
            </div>
            </div>
          </div>
          <div class="publishPriceAndType">
            <div>
              <p>价格</p>
              <x-icon type="ios-arrow-thin-right" size="50" style="fill:#cc6633;position:absolute;right:0;top:50%;margin-top: -25px;"></x-icon>
            </div>
          </div>
          <div class="publishPriceAndType">
            <div>
              <p>分类</p>
              <x-icon type="ios-arrow-thin-right" size="50" style="fill:#cc6633;position:absolute;right:0;top:50%;margin-top: -25px;" ></x-icon>
            </div>
          </div>
        </div>
        <div class="publishBtn">
          <button @click="submitPublish">
          确认发布
          </button>
        </div>
        </div>
      <transition name="slide-fade">
        <div class="rightContent" v-show="isBarShow">
          <div class="rightBar">
            <x-icon @click.native="showBar" type="ios-close-empty" size="80" style="fill:#cc6633;position:relative;top:6px;left:50%;margin-left: -40px;"></x-icon>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import { XHeader } from 'vux'

   export default {
      name: 'publish-second',
      components:{
        XHeader
      },
      data(){
        return{
          file:'',
          name:'',
          describe:'',
          title:'发布闲置',
          isBarShow:false,
          menuSrc: require('@/assets/indexmenu.png'),
            radios: [
              {
                label: '面对面寄存',
                isChecked: true,
              },
              {
                label: '寄存柜寄存',
                isChecked: false,
              },
              {
                label: '校园快递上门取货',
                isChecked: false,
              }
            ]

        }
      },
      methods:{
        getFile(event) {
            this.file = event.target.files[0];
          },
        submitPublish(){
          console.log(this.name)
          console.log(this.describe)
          console.log(this.file)
           event.preventDefault();
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('descipt', this.descipt);
            formData.append('imgs', this.file);
            formData.append('price', this.name);
            let config = {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }

               axios.post('http://39.108.138.225:8080/duoyi/goods/add', formData, config).then(function (res) {
                console.log(res.data)
              }).catch(function (err) {
                 console.log(err);
               })

        },
        showBar(){
          console.log('click')
          this.isBarShow=!this.isBarShow
        },
         check(index) {
            this.radios[index].isChecked = !this.radios[index].isChecked;
          }      
      }
   }
</script>

<style scoped lang="less">

  .publishWrap /deep/ .vux-header .vux-header-title{
    color: black!important;
  }
  .vux-header{
    background:rgb(249,249,249);
  }
  .vux-header-left {
    margin-top: 25px;
  }
  .publishWrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .publishBox{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: rgb(254,238,222);
    position: relative;
    left: 0;
    bottom: 0;
     overflow: hidden; 
  }

  .leftContent{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    transition: left 0.2s; 
  }
  .leftContent-active{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -25%;
    transition: left 0.2s; 
  }

  .publishTop{
    width: 100%;
    height: 43%;
    background: white;
  }
  .publishBottom{
    width: 100%;
    height: 34%;
    background: white;
    margin-top:3%;
  }
   .publishBtn{
    width: 100%;
    height: 14%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  } 
  .publishBtn button{
    width: 70%;
    height: 55%;
    background: rgb(255,149,101); 
    border-radius: 30px;
    box-shadow: 2px 8px 12px rgba(255,149,101,0.6);
    font-size:20px;
    color: white;
    line-height: 55%;
    text-align: center;
  }
  .rightContent{
    width: 25%;
    height: 100%;
    position: absolute;
    right: 0;
    top:0;
    background: rgb(249,190,130);
  }
    .slide-fade-enter-to, .slide-fade-leave-to{
    transition: transform 0.2s;
    transform:translate(0px,0px);
  }
  .slide-fade-enter,.slide-fade-leave-to{ 
    transform:translate(100%,0);
     transition:transform 0.2s linear; 
  }  
  .title{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgb(254, 238, 222);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title input{
    width: 300px;
    height: 40px;
    font-size: 14px;
  }
  .descript{
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .descript textarea{
    padding-top: 5px;
    width:300px;
    height: 120px;
    font-size: 14px;
  }
  .imgAndMore{
    width: 300px;
    margin: 0 auto;
    position: relative
  }
  /*上传图片模块*/
  .updateImg{
    width: 260px;
    height: 100px;

  }
  .updateImg /deep/ .el-upload--picture-card{
    width:60px;
    height:60px;

  }
   .updateImg /deep/ .el-upload-list--picture-card .el-upload-list__item{
    width:60px;
    height:60px;
  }
  .el-icon-plus{
    line-height: 50px;
  }
  .moreIco{
    height: 30px;
    position: absolute;
    right: 0;
    top:60%;
    margin-top: -15px;
    display: flex;
    font-size: 14px;
    color:rgb(229,111,66);
  }
  .moreIco img{
    width: 14px;
    height: 14px;
    padding-left: 5px;
  }
  .checkContent{
    box-sizing: border-box;
    width: 300px;
    height: 54%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .checkContent>p{
    font-size: 14px;
    color:rgb(229,111,66);
    padding: 5px 0;
  }
  .checkContent .checkBox{
    margin-top: 5px;   
    padding-left: 10px;
    height: 73%;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .inputBox {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  
  }
  .inputBox>input{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    opacity: 0;
  }
 .radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
  background-image: url(../../assets/radio-unclick.png);
  background-repeat: no-repeat;
  background-size: 70% 70%;
} 
.on {
  background-image: url(../../assets/radio-click.png);
  background-size: 70% 70%;
}
.on-font {
  font-weight: bold;
}
.font-two {
  margin-left: 10px;
  display: inline;
  font-size: 14px;
  line-height: 25px;
  color: rgb(229,111,66);
}
.publishPriceAndType{
  width: 100%;
  height: 23%;
  border-top: 1px solid rgb(254, 238, 222);
  display: flex;
  flex-direction: column;
  justify-content:center;

}
.publishPriceAndType p{
  display: inline-block;
}
.publishPriceAndType>div{
  width: 300px;
  margin: 0 auto;
  font-size: 14px;
  color:rgb(229,111,66);
   position: relative;
}
</style>