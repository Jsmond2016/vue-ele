<template>
   <div>
     <transition name="move">
       <div class="food" v-show="showFlag"></div>
     </transition>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        food: {
          type: Object
        }
      },
      data() {
        return {
          showFlag: false
        }
      },
      methods: {
        show() {
          this.showFlag = true
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: white
    transition: all .2s linear
    transform: translate3d(0,0,0)
    &.move-enter-active, &.move-leave-enter
      transform: translate3d(100%,0,0)
</style>
