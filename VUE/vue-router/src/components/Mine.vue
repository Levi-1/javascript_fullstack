<template>
  <div>我的页面    
    <!-- <router-link v-bind:to="{name:'详情页',params:{id:123}}"><button class="goDetail">查看详情</button></router-link> -->
    <button @click="godetail">查看详情</button>
    <router-view></router-view>
    </div>
  
</template>

<script>
export default {
methods:{
  godetail(){
    this.$router.push({name:'详情页',params:{id:234}})
  }
}
}
</script>

<style>

</style>