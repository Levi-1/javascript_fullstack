<template>
  <div class="search">
      <div class="head">
          <div class="">
              <img src="../../../static/images/search.png" alt="">
              <input type="text" name="" id="" confirm-type="search" focus="true" v-model="words">
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
                <div class="">日式</div>
                <div class="">式</div>
                <div class="">日</div>
                <div class="">斡旋</div>
            </div>
      </div>

  </div>
</template>

<script>
export default {
    data () {
        return {
            words: ''
        }
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
        clearHistory () {}
    }
}
</script>

<style lang="less" scoped>
@import url('./style.less');
</style>