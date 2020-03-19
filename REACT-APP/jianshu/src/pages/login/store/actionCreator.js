import axios from "axios"
import { types } from "."

const changeLogin = (result) => ({
    type: types.CHANGE_LOGIN,
    value: result
})

export const logout = () => ({
    type: types.LOGOUT,
    value: false
})

export const loginAction = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
        .then((res) => {
            const result = res.data.data
            console.log(result)
            if (result) {
                dispatch(changeLogin(result))
            } else {
                alert('登录失败')
            }
            // console.log(res)
        })
    }
}