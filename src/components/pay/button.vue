<template>
  <div>
<<<<<<< HEAD
    <img v-for="(item,index) of img" :src="item.url" :style="item.style" @click="info" class="img-sml">
=======
    <img v-for="(item,index) of img" :key="index" :src="item.url" :style="item.style" @click="info" class="img-sml">
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
    <img :src="imgbig.url" :style="imgbig.style" @click="change(message)" class="img-big">
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      message: true,
      img: [{
<<<<<<< HEAD
        url: '/static/资源button.png',
=======
        url: '../../assets/resource.png',
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
        style: {
          position: 'fixed',
          left: '8.4rem',
          top: '14.6rem'
        }
      },{
<<<<<<< HEAD
        url: '/static/委托button.png',
=======
        url: '../../assets/entrust.png',
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
        style: {
          position: 'fixed',
          left: '8.4rem',
          top: '14.6rem'
        }
      },{
<<<<<<< HEAD
        url: '/static/闲置button.png',
=======
        url: '../../assets/unused.png',
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
        style: {
          position: 'fixed',
          left: '8.4rem',
          top: '14.6rem'
        }
      },{
<<<<<<< HEAD
        url: '/static/资源button.png',
=======
        url: '../../assets/resource.png',
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
        style: {
          position: 'fixed',
          left: '8.4rem',
          top: '14.6rem'
        }
      }],
      imgbig: {
<<<<<<< HEAD
        url: '/static/主button.png',
=======
        url: '../../assets/main.png',
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
        style: {
          position: 'fixed',
          left: '8.2rem',
          top: '14.4rem'
        }
      }
    }
  },
  methods:{
    change(message) {
      if(message) {
        this.img[0].style.left = "5.2rem";
        this.img[0].style.top = "14.7rem";
        this.img[1].style.left = "5.8rem";
        this.img[1].style.top = "13.3rem";
        this.img[2].style.left = "7rem";
        this.img[2].style.top = "12.4rem";
        this.img[3].style.left = "8.4rem";
        this.img[3].style.top = "12rem";
      }
      else if(!message) {
        this.img.forEach((item,index)=>{
          item.style.left = "8.4rem";
          item.style.top = "14.6rem";
        })
      }
      console.log(message);
      this.message = !this.message;
    },
    add() {
      this.img[0].style.left = "5rem";
      this.img[1].style.left = "2rem";
    },
    reduce() {
      console.log(this.img[0].style.left--);
    },
    info() {
      alert("oo");
    }
  }
}  
</script>

<style scoped>
  .img-big {
    width: 1.4rem;
    height: 1.4rem;
  }
  .img-sml {
    width: 1rem;
    height: 1rem;
  }
</style>
