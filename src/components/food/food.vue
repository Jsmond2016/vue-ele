<template>
   <div>
     <transition name="move">
       <div class="food" v-show="showFlag" ref="food">
         <div class="food-content">
           <div class="image-header">
             <img :src="food.image">
             <div class="back" @click="hide">
               <i class="icon-arrow_lift"></i>
             </div>
           </div>
          <div class="content">
            <h1 class="title2">{{food.name}}</h1>
            <div class="detail2">
              <span class="sell-count">月售{{food.sellCount}}份</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
          </div>
         </div>
       </div>
     </transition>
   </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
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
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.food, {
                 click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        },
        hide() {
          console.log(1)
          this.showFlag = false
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
    &.move-enter-active, &.move-leave-active
      transform: translate3d(100%,0,0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100% /* 骚操作 */
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: white
    .content
      padding: 10px
      .title2
        line-height: 14px
        margin-bottom: 8px
        font-weight: 700
        color: rgb(7,17,27)
      .detail2
        margin-bottom: 18px
        ling-height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color:  rgb(147,153,159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240,20,20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147,153,159)
</style>
