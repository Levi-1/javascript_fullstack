<template>
  <div>
      <input type="text" name="输入用户名" id="" v-model="username">
      <input type="password" name="输入密码" id="" v-model="password">
      <button @click="login">登录</button>
      <button @click="register">注册</button>
  </div>
</template>

<script>
import config from '../assets/default'
export default {
    name: 'index',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        login () {
            if ( !this.username.trim() === '' || this.password.trim() === '' ) {
                this.$toast('用户名或密码不能为空')
            } else {
                this.$http({
                    method: 'post',
                    url: `${config.URL}/login`,
                    data: {
                        password: this.password.trim(),
                        username: this.username.trim()
                    }
                }).then({})
            }
        },
        register () {
            this.$push({path: '/register'})
        }
    }
}
</script>

<style>

</style>