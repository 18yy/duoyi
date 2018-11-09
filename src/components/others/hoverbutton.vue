<template>
  <div class="app">
    <div class="block" v-show="show"></div>
    <button @click="showMenu" class="btn">{{text}}</button>
    <transition name="move">
      <div class="menu" v-show="show">
        <div class="inner inner-1" @click="toOtherPage('')">组队</div>
        <div class="inner inner-2" @click="toOtherPage('/paying2')">闲置</div>
        <div class="inner inner-3" @click="toOtherPage('')">委托</div>
        <div class="inner inner-4" @click="toOtherPage('')">资源</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    };
  },
  methods: {
    showMenu () {
      this.show = !this.show;
    },
    toOtherPage(page) {
            this.$router.push({
                path: page
            });
        }
  },
  computed: {
    text () {
      return this.show ? '×' : '+';
    }
  }
};
</script>

<style scoped>
.block{
  position: fixed;
  top: 0px;
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
}
.btn {
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index: 999;
  width: 55px !important;
  height: 55px !important;
  line-height: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: #fff;
  font-size: 30px;
  padding-bottom: 3px;
  background: rgb(229,111,66);
}
.menu {
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all .7s ease-in;
}
.move-enter-active .inner {
  transform: translate3d(0, 0, 0);
  transition-timing-function: cubic-bezier(0, .57, .44, 1.97);
}
.move-enter-active .inner-1 {
  transition-delay: .1s;
}
.move-enter-active .inner-2 {
  transition-delay: .2s;
}
.move-enter-active .inner-3 {
  transition-delay: .3s;
}
.move-enter-active .inner-4 {
  transition-delay: .4s;
}
.move-enter .inner {
  transition-timing-function: ease-in-out;
}
.move-enter .inner-1 {
  transform: translate3d(0, 70px, 0);
  transition-delay: .4s;
}
.move-enter .inner-2 {
  transform: translate3d(30px, 50px, 0);
  transition-delay: .3s;
}
.move-enter .inner-3 {
  transform: translate3d(50px, 30px, 0);
  transition-delay: .2s;
}
.move-enter .inner-4 {
  transform: translate3d(70px, 0, 0);
  transition-delay: .1s;
}
.move-leave-active .inner {
  transition-timing-function: ease-in-out;
}
.move-leave-active .inner-1 {
  transform: translate3d(0, 70px, 0);
  transition-delay: .4s;
}
.move-leave-active .inner-2 {
  transform: translate3d(30px, 50px, 0);
  transition-delay: .3s;
}
.move-leave-active .inner-3 {
  transform: translate3d(50px, 30px, 0);
  transition-delay: .2s;
}
.move-leave-active .inner-4 {
  transform: translate3d(70px, 0, 0);
  transition-delay: .1s;
}
.inner {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  background: rgb(229,111,66);
  text-align: center;
  color: #fff;
  transition: all .4s;
  font-size: 10px;
}
.inner-1 {
  top: -70px;
  left: 10px;
}
.inner-2 {
  left: -25px;
  top: -55px;
}
.inner-3 {
  left: -50px;
  top: -25px;
}
.inner-4 {
  top: 10px;
  left: -70px;
}
</style>