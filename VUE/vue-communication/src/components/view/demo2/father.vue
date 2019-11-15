<template>
  <div class="container">
      <ul class="red">
          <li v-for="item in myObj" :key="item.id">
              {{item.name}}
          </li>
      </ul>
      <child :send-msg="myMsg" :send-num="myMsg" :send-obj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
    data () {
        return{
            myMsg: 'Im msg of father',
            myNum: 123456,
            myObj: [
                {
                    id: 1,
                    name: 'z3'
                },
                {
                    id: 2,
                    name: 'l4'
                }
            ]
        }
    },
    components:{
        child
    }
}
</script>

<style>

</style>