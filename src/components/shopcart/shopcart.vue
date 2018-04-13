<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <span class="icon-shopping-cart"></span>
            </div>
          </div>
          <div class="price"></div>
          <div class="desc"></div>
        </div>
        <div class="content-right"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .shopcart
      position: fixed
      left: 0
      bottom: 0
      z-index: 50
      width: 100%
      height: 48px
      .content
        display: flex
        background: #141d27
        .content-left
          flex: 1
          .logo-wrapper
            display: inline-block
            vertical-align: top
            position: relative
            top: -10px
            margin: 0 12px
            padding: 6px
            width: 56px
            height: 56px
            box-sizing: border-box
            border-radius: 50%
            background: #141d27
            .logo
              width: 100%
              height: 100%
              border-radius: 50%
              text-align: center
              background: #2b343c
              .icon-shopping-cart
                font-size: 24px
                color: #80858a
                width: 24px
                height: 24px
                line-height: 24px
          .price
            display: inline-block
            vertical-align: top
            line-height: 24px
            margin-top: 12px
            padding-right: 12px
            box-sizing: border-box
            border-right: 1px solid rgba(255,255,255,0.1)
            fnot-size: 16px
            font-weight: 700
          .desc
            display: inline-block
        .content-right
          flex: 0 0 105px
          width: 105px
</style>
