<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: 'scroll',
  props: {
    /**
      * 1 滚动的时候会派发scroll事件，会节流。
      * 2 滚动的时候实时派发scroll事件，不会节流。
      * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      */
    probeType: {
      type: Number,
      default: 1
    },
    /**
      * 点击列表是否派发click事件
      */
    click: {
      type: Boolean,
      default: true
    },
    /**
      * 是否开启横向滚动
      */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
      * 是否派发滚动事件
      */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 列表的数据
      */
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 当数据更新后，刷新scroll的延时。
      */
    refreshDelay: {
      type: Number,
      default: 20
    },
    direction: {
      type: String,
      default: DIRECTION_V
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        probeType: this.probeType,
        eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
      })

      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) { //派发上拉加载更多
            this.$emit('scrollToEnd')
          }
        })
      }

      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => { // 派发下拉刷新
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      if (this.beforeScroll) { // 是否派发列表滚动开始事件tar
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
  },
  watch: {
    data () { //监听数据变化，延时xx时间后刷新better-scroll的效果,保证滚动效果正常
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style>

</style>