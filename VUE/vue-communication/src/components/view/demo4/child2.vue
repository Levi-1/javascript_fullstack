<template>
  <div class="child2">
      <h3>兄弟组件2（传递状态给兄弟组件1）</h3>
      <div class="">
        <button @click="sendMessage">sendMessage</button>
      </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  data () {
    return {
      title: '我是要传递的信息,来自child2'
    }
  },
  methods: {
    sendMessage () {
      // this.$emit('sendTitle', this.title)
      Bus.$emit('sendTitle', this.title)
    }
  }
}
</script>

<style>

</style>