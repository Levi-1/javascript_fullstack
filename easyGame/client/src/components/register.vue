<template>
    <div>
        <input type="text" name="输入你的用户名" id="" v-model="username">
        <input type="password" name="输入你的密码" id="" v-model="password">
        <input type="password" name="再次输入你的密码" id="" v-model="check_password">
        <button @click="confirm">确认</button>
        <button @click="cancel">取消</button>
    </div>
</template>

<script>
import config from '../assets/default'
export default {
    data() {
        return {
            username: '',
            password: '',
            check_password:'',
            check: false
        }
    },
    methods: {
        confirm () {
            if( this.password.trim() === '' || this.check_password.trim() === '' || this.username.trim() === '') {
                this.$toast('用户名密码不能为空')
            } else if (this.check) {
                this.$http({
                    method: 'post',
                    url: `${config.URL}/register`,
                    data: {
                        username: this.username.trim(),
                        password: this.password.trim()
                    }
                }).then({})
            }
        },
        cancel () {
            this.$router.push({path: '/'})
        }
    },
    watch: {
        check () {
            return this.password === this.check_password
        }
    }
}
</script>

<style>

</style>