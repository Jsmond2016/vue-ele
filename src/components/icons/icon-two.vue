<template>
  <div class="icon-one">
    <span class="icon" :class="classMap[seller.supports[index].type]"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: Object,
      goods: Object,
      ratings: Object
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 4px
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.special
      bg-image('special_2')
    &.invoice
      bg-image('invoice_2')
</style>
