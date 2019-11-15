<template>
  <div class="child1">
      <h3>兄弟组件1(监听兄弟组件2)</h3>
      <div class="">
        这是从父组件发来的信息:
        {{msg}}
      </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus' // 引入一个 Vue的共有变量
export default {
  // props: ['title'] 接收父组件传递的数据
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendTitle', (data) => { // $emit 和 $on 是一对api 使用on接收 emit发散出的信息
      this.msg = data
    }) 
  }
}
</script>

<style>

</style>