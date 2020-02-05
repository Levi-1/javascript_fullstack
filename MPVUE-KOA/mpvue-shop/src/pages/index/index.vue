<template>
  <div class="index">
    <div class="search">
      <!-- 顶部搜索 -->
      <div class="" @click="toMappage">{{cityName}}</div>
      <div class="" @click="toSearch()">
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
    <div class="channel">
      <div class="" v-for="(item, index) in channel" :key="index" @click="categroyList(item.id)">
        <img :src="item.icon_url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="brand">
      <div class="head" @click="toBrandList()">
        品牌制造商直供
      </div>
      <div class="content">
        <div class="" v-for="(item, index) in brandList" :key="index" @click="brandDetail(item.id)">
          <div class="">
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}￥起</p>
          </div>
          <img :src="item.pic_url" alt=" ">
        </div>
      </div>
    </div>
    <div class="newgoods">
      <div class="newgoods-top" @click="goodsList('new')">
        <div class="top">
          <p>新品首发</p>
          <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in newGoods" :key="index">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>{{item.retail_price}}￥</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="newgoods hotgoods" >
      <div class="newgoods-top" @click="goodsList('hot')">
        <div class="top">
          <p>人气推荐 <span></span> 好物精选</p>
          <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in hotGoods" :key="index">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>{{item.retail_price}}￥</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="topicList">
      <div class="topicList-top">
        专题精选
        <span class="icon"></span>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li @click="topicDetail(item.id)" v-for="(item, index) in topicList" :key="index">
              <img :src="item.item_pic_url" alt="">
              <div class="btom">
                <div class="">
                  <p>{{item.title}}</p>
                  <p>{{item.subtitle}}</p>
                </div>
                <div class="">
                  {{item.price_info}}元起
                </div>
              </div>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
    <div class="newcategory">
      <div class="list" v-for="(item, index) in newCategoryList" :key="index">
        <div class="head">{{item.name}}好物</div>
        <div class="sublist">
          <div  v-for="(subitem, subindex) in item.goodsList" :key="subindex">
            <img :src="subitem.list_pic_url" alt="">
            <p>{{subitem.name}}</p>
            <p>{{subitem.retail_price}}</p>
          </div>
          <div class="">
            <div class="last">
              <p>{{item.name}}好物</p>
              <span class="icon"></span>
            </div>
          </div>
        </div>
      </div>
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
      banner: [],
      channel: [],
      brandList: [],
      newGoods: [],
      hotGoods: [],
      topicList: [],
      newCategoryList: []
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
  mounted () {
    this.getData()
    this.getCityName()
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
      this.banner = data.banner
      this.channel = data.channel
      this.brandList = data.brand
      this.newGoods = data.newGoods
      this.hotGoods = data.hotGoods
      this.topicList = data.topicList
      this.newCategoryList = data.newCategoryList
    },
    categroyList (id) {
      wx.navigateTo({
        url:'/pages/categroylist/main?id=' + id
      })
    },
    brandDetail (id) {
      wx.navigateTo({
        url:'/pages/brandDetail/main?id=' + id
      })
    },
    toBrandList () {
      wx.navigateTo({
        url:'/pages/brandList/main'
      })
    },
    goodsList (info) {
      if (info == 'hot') {
        wx.navigateTo({
          url:'/pages/newgoods/main?isHot=' + 1
        })
      }
      else {
        wx.navigateTo({
          url:'/pages/newgoods/main?isNew=' + 1
        })
      }
    },
    topicDetail (id) {
      wx.navigateTo({
        url:'/pages/topicdetail/main?id=' + id
      })
    },
    toSearch () {
      wx.navigateTo({
        url:'/pages/search/main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>