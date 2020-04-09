import A from './a'
import B from './b'
import Pic from './img/map.png'
// webpack 默认只能打包js模块,遇到非js模块如何解决？
// loader
import './index.css'
import axios from 'axios'

var img = new Image()
img.src = Pic
img.className = 'pic'
document.getElementById('root').append(img)

A()
B()

axios.get('/api/info').then((res)=>{
    console.log(res)
})

function test () {
    console.log('welcome to lm')
}

test()