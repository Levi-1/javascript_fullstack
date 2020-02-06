<template>
  <div class="search">
      <div class="head">
          <div class="">
              <img src="../../../static/images/search.png" alt="">
              <input type="text" name="" id="" confirm-type="search" focus="true" v-model="words" @focus="inputFocus" @input="tipsearch" @confirm="searchWords" placeholder="商品搜索">
              <img src="../../../static/images/deleteclosecancel.png" alt="" class="del" @click="clearInput()">
          </div>
          <div class="" @click="cancel">取消</div>
      </div>
      <div class="searchtips" v-if="words">
          <div class="">
              牙刷
          </div>
          <div class="nogoods">
              数据库暂无此类商品
          </div>
      </div>
      <div class="history">
            <div class="t">
                <div class="">历史记录</div>
                <div class="" @click="clearHistory()"></div>
            </div>
            <div class="content">
                <div class="">日式</div>
            </div>
      </div>
      <div class="history hotsearch">
            <div class="t">
                <div class="">热门搜索</div>
                <div class="" @click="clearHistory()"></div>
            </div>
            <div class="content">
                <div class="" v-for="(item, index) in hotData" :key="index">
                    {{item.keyword}}
                </div>
            </div>
      </div>

  </div>
</template>

<script>
import { get, post } from '../../utils/index.js'
export default {
    data () {
        return {
            words: '',
            openId: '',
            historyData: [],
            hotData: []
        }
    },
    
    mounted () {
        this.openId = wx.getStorageSync('openId')
        this.getHistoryData ()
    },

    methods: {
        clearInput () {
            this.words = ''
        },
        cancel () {
            console.log('act')
            wx.navigateTo({
                url:'/pages/search/main'
            })
        },
        clearHistory () {},
        inputFocus () {},
        tipsearch () {},
        async searchWords (e) {
            const data = await post('/search/addhistoryaction', {
                'openId': this.openId,
                'keyword': this.words
            })
            // 获取历史数据
            this.getHistoryData()
        },
        async getHistoryData () {
            console.log(this.openId)
            const data = await get('/search/indexaction?openId=' + this.openId)
            this.historyData = data.historyData
            this.hotData = data.hotKeyWord
            console.log(data)
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./style.less');
</style>