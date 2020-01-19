<template>
  <div class="count">
      {{count}}
      <!-- <button @click="test">+</button> -->
      <!-- <button @click="$store.commit('add',20)">+</button> 调用add方法传入20 -->
      <button @click="add(5)">+5</button>
      <button @click="addAction">+10</button>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="reduceAction">-</button>
      {{gcount}}
  </div><!--  $store为vuex中封装的，不是自定义在main.js中从store.js的引入 -->
      
     
  
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            // myCount:null
        }
    },
    // mounted() { // $store在script中使用时要使用this
    //     this.myCount = this.$store.state.count
    // },
    // computed: {
    //     myCount() {
    //         return this.$store.state.count
    //     }
    // },
    // computed: mapState(['count']),
    computed: {
        ...mapState(['count']),
        ...mapGetters(['gcount']) // 计算属性
    },
        // computed: mapState({
        //     myCount: state => state.count
        //     // ,
        //     // myCount (state){
        //     //     return state.count
        //     // }
        // }),
    methods: {
        // test() {
        //     this.myCount++
        // }
        ...mapActions([
            'addAction',
            'reduceAction'
        ]),
        ...mapMutations([
            'add',
            'reduce'
        ])
    }
}
</script>

<style>

</style>