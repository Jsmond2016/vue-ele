<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :key="index">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list" :key="index">
          <h1 class="title">{{item .name}}</h1>
          <ul>
            <li v-for="(food,index) in item.foods" class="food-item border-1px" :key="index">
              <div class="icon">
                <img :src="food.icon" width="57px" height="57px">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

    const ERR_OK = 0

    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          goods: []
        }
      },
      methods: {
        _initScroll() {
          this.menuScroll = new BScroll(this.$refs.menuWrapper, {})

          this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
        }
      },
      created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

        this.$http.get('/api/goods').then((response) => {
          response = response.body
          if (response.errno === ERR_OK) {
            this.goods = response.data
            this.$nextTick(() => { /* 深入响应式原理,在下次 DOM 更新循环结束之后执行延迟回调,目的是我了获得高度 */
              this._initScroll()
            })
          }
        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px /*这里不写安卓浏览器*/
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.special
            bg-image('special_3')
          &.invoice
            bg-image('invoice_3')
       .text
         display: table-cell
         width: 56px
         vertical-align: middle
         border-1px(rgba(7,17,27,0.1))
         font-size: 12px

    .foods-wrapper
      flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147,153,159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px
      padding-bottom:  18px
      border-1px(rgba(7,17,27,0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          color: rgb(7,17,27)
        .desc , .extra
          font-size: 10px
          line-height: 10px
          color: rgb(147,153,159)
        .desc
          margin-bottom: 8px
        .extra
          &.count
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
