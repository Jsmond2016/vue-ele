<template>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight': totalCount>0}">
              <span class="icon-shopping_cart" :class="{'highlight': totalCount>0}"></span>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
        <div class="ball-cotainer">
          <transition-group  name="drop">
            <div v-for="(ball,index) in balls" :key="index" v-show="ball.show" class="ball">
              <div class="inner"></div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        selectFoods: {
          type: Array,
          default() {
            return [
              {
                price: 10,
                count: 5
              }
            ]
          }
        },
        deliveryPrice: {
          type: Number,
          default: 0
        },
        minPrice: {
          type: Number,
          default: 0
        }
      },
      data() {
        return {
          balls: [
            {show: false},
            {show: false},
            {show: false},
            {show: false},
            {show: false}
          ]
        }
      },
      methods: {
        drop(el) {
          console.log(el)
        }
      },

      computed: {
        totalPrice() {
          let total = 0
          this.selectFoods.forEach((food) => {
            total += food.price * food.count
          })
          return total
        },
        totalCount() {
          let count = 0
          this.selectFoods.forEach((food) => {
            count += food.count
          })
          return count
        },
        payDesc() {
          if (this.totalPrice === 0) {
            return `￥${this.minPrice}元起送`
          } else if (this.totalPrice < this.minPrice) {
            let diff = this.minPrice - this.totalPrice
            return `还差￥${diff}元起送`
          } else {
            return '去结算'
          }
        },
        payClass() {
          if (this.totalPrice < this.minPrice) {
            return 'not-enough'
          } else {
            return 'enough'
          }
        }
      }
    }
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
              &.highlight
                background: #00a0dc
              .icon-shopping_cart
                font-size: 24px
                color: #80858a
                width: 24px
                height: 44px
                line-height: 44px
                &.highlight
                  color: #ffffff
           .num
             position: absolute
             top: 0
             right: 0
             width: 24px
             height: 16px
             line-height: 16px
             text-align: center
             border-radius: 16px
             font-size: 9px
             font-weight: 700
             color: #fff
             background: rgb(240,20,20)
             box-shadow: 0 4px 8px rgba(0,0,0,0.4)
          .price
            display: inline-block
            vertical-align: top
            line-height: 24px
            margin-top: 12px
            padding-right: 12px
            box-sizing: border-box
            border-right: 1px solid rgba(255,255,255,0.1)
            font-size: 16px
            font-weight: 700
            color: rgba(255,255,255,0.4)
            &.highlight
              color: white
          .desc
            display: inline-block
            vertical-align: top
            margin: 12px 0 0 12px
            line-height: 24px
            font-size: 12px
            color: rgba(255,255,255,0.4)
        .content-right
          flex: 0 0 105px
          width: 105px
          color: rgba(255,255,255,0.4)
          .pay
            height: 48px
            line-height: 48px
            text-align: center
            font-size: 12px
            font-weight: 700
            color: white
            background: #2b343b
            &.not-enough
              background: #2b343b
            &.enough
              background: #00b43c
        .ball-container
          .ball
            position: fixed
            left: 32px
            bottom: 22px
            z-index: 200
            transition: all .4s
            .inner
              width: 16px
              height: 16px
              border-radius: 50%
              background: rgb(0,160,220)
              transition: all .4s
</style>
