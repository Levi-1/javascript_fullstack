<template>
  <div class="container">
      <child :send-sendMsg="myMsg"></child> <!-- v-bind=""-->
  </div>
</template>

<script>
import child from './child'
export default {
    data () {
        return{
            myMsg: 'This is my Msg'
        }
    },
    components: {
        child
    }
}
</script>

<style>

</style>