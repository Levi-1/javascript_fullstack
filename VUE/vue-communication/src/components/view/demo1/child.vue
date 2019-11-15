<template>
  <div class="child">
      <h2>子组件</h2>

      <p>The msg from father is</p>
      <strong>{{sendMsg}}</strong>

      <p class="hr"></p>

      <p>The ChangeMsg from child is:</p>
      <p></p>
  </div>
</template>

<script>
export default {
    props: ['sendMsg'], //父组件向子组件传递值
    computed: {
        changeMsg () {
            return this.sendMsg.toUpperCase()
        }
    }
}
</script>

<style>
.hr{
    margin: 50px 0;
}
</style>