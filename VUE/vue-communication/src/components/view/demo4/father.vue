<template>
  <div class="container">
      <h2>ffffffather</h2>
      <child1 :send-title="msg"></child1>
      <child2 @sendTitle="getTitle"></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
    data () {
        return {
            msg: ''
        }
    },
    components: {
        child1,
        child2
    },
    getTitle (e) {
        this.msg = e
    }
}
</script>

<style>

</style>