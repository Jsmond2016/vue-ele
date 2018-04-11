<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard-arrow_right"></i>
      </div>

      <div class="bullentin-wrapper"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props: {
        seller: {
          type: Object
        }
      },
      created() {
        this.classMap = ['decrease', 'discount', 'gurantee', 'special']
      }
    }
</script>

<style lang="stylus" rel=stylesheet/stylus>
  @import "../../common/stylus/mixin.styl"

  .header
    color: #fff
    background: #000
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      position: relative
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            width: 30px
            height: 18px
            vertical-align: top
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.special
              bg-image('invoice_1')

          .text
            font-size: 10px // 手机上展示为 10px，chrome不能展示10px
            line-height: 12px
      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0 8px
        line-height: 24px
        border-radius: 14px
        background: rgba(0,0,0,0.2)
        .count
          font-size: 10px
          vertical-align: top
        .icon-keyboard-arrow_right
          margin-left: 2px
          font-size: 10px
          line-height: 24px

</style>
