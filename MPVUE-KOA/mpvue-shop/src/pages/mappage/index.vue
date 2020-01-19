<template>
  <div class="mappage">
      <div class="section">
          <input type="text" name="" id="" placeholder="搜索" focus="true" v-model="keywords" @input="bindInput">
          
      </div>
      <scroll-view :scorll-y="true" class="addcont" style="height: 500rpx;">
          <div class="result" v-for="(item, index) in tips" :key="index" @touchstart="bindSearch(item.name)">
              {{item.name}}
          </div>
      </scroll-view>
      <div class="map_container">
          <div class="title">
              显示当前位置:
          </div>
          <map class="map" id="map" scale="16" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
      </div>
  </div>
</template>

<script>
import aMapFile from '../../utils/amap-wx.js'
import { mapMutations } from 'vuex'
export default {
    data () {
        return {
            tips: [],
            longitude: 0,
            latitude: 0,
            markers: [],
            keywords: ''
        }
    },
    mounted() {
        this.getMapadress()
    },
    methods: {
        ...mapMutations(['update']),
        getMapadress () {
            let _this = this
            var myAmapFun = new aMapFile.AMapWX({key: 'b6fbfb969cd61912980b0c2b1149e6e5'})
            myAmapFun.getRegeo({
                iconPath: "/static/images/marker.png",
                iconWidth: 22,
                iconHeight: 32,
                success: function (data) {
                    console.log(data)
                    let marker = [
                        {
                            id: data[0].id,
                            longitude: data[0].longitude,
                            latitude: data[0].latitude,
                            width: data[0].width,
                            height: data[0].height
                        }
                    ]
                    _this.markers = marker
                    _this.longitude = data[0].longitude
                    _this.latitude = data[0].latitude
                },
                fail: function (info) {
                    console.log(info)
                }
            })
        },
        bindInput (e) {
            let _this = this
            let keywords = _this.keywords
            var myAmapFun = new aMapFile.AMapWX({key: 'b6fbfb969cd61912980b0c2b1149e6e5'})
            myAmapFun.getInputtips({
                keywords: keywords,
                location: '',
                success: function (data) {
                    console.log(data)
                    if (data && data.tips) {
                        _this.tips = data.tips
                    }
                }
            })
        },
        bindSearch (address) {
            this.update({cityName: address})
            wx.navigateBack({
                delta: 1
            })

        }
    }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>