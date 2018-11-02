<template>
  <div>
    <div class="mask" v-show="isReallyShow" @click="hideSlide"></div>
    <div class="slideContent" v-show="isReallyShow">
    
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide-bar',
    data() {
      return {

      }
    },
    methods:{
      hideSlide: function () {
        this.$store.dispatch('hideSlideBar');
      }
    },
    computed: {
      isReallyShow() {
        return this.$store.getters.isShowMethod
      }
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
    background:rgba(255,255,255,0.5);
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
  }

</style>
