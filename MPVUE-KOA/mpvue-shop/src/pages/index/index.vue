<template>
  <div class="index">
    <div class="search">
      <!-- 顶部搜索 -->
      <div class="" @click="toMappage">{{cityName}}</div>
      <div class="">
        <input type="text" name="" id="" placeholder="搜索商品"> 
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" cicular="true" duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="silde-image" :src="item.image_url"></image>
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { get } from '../../utils/index.js'
export default {
  data () {
    return {
      banner: []
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
  methods: {
    ...mapMutations(['update']),
    toMappage () {
      // 通过 wx.getSetting  查询用户是否授权  "scoped.record"
      let _this = this
      wx.getSetting({
        success: (res) => {
          // 若未获得授权打开设置
          console.log(res)
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                // 同意授权地理位置信息
                _this.getCityName()
              }
            })
          }
          else {
            wx.navigateTo({
              url: '/pages/mappage/main'
            })
          }
        },
        fail: (err) => {
          console.log(err)
        },
        complete: () => {}
      })
    },
    getCityName () {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'b4ae27ebe16d26d51401367a43450a72'});
      myAmapFun.getRegeo({
        success: function(data) {
          // 成功回调
          console.log(data)
          // set cityName
        },
        fail: function(info) {
          // 失败回调
          console.log(info)
          _this.update({ cityName: '北京'})
        }
      })
    },
    async getData () {
      const data = await get('/index/index')
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>