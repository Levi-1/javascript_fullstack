const https = require('https')
const http = require('http')
const cheerio = require('cheerio')

http.createServer((req,res)=>{
    doubanSpider('https://movie.douban.com/top250?filter=', (data) => {
        console.log(data)
        res.writeHead(200,{
            //text/plain
            //text/html
            //mime类型
            'Content-type':'application/json',
            'Access-Control-Allow-origin':'*'            
        })
        res.end(JSON.stringify(data))
    })
}).listen(8088,()=>{
    console.log('server is running 8088')
})

// doubanSpider('https://movie.douban.com/top250?filter=', (data) => {
//     console.log(data)
// })

function doubanSpider(url, cb) {
    https.get(url, (res) => {
        let html = ''//以流的形式传输,每次都会触发事件
        res.on('data', (chunk) => {
            html += chunk
        })
        res.on('end', () => {//结束时console html
            const $ = cheerio.load(html)
            let movies = [];
            $('li .item').each(function () {//jQuiry的选择器
                //拿到每一项
                const picUrl = $('.pic img', this).attr('src')//item 限制$的选择作用域            
                const title = $('.info .title', this).text()
                const star = $('.star .rating_num', this).text()
                const inq = $('.inq', this).text()
                // console.log(picUrl)
                // console.log(title)
                // console.log(star)
                // console.log(inq)
                movies.push({
                    picUrl,
                    title,
                    star,
                    inq
                })
            })
            cb(movies)
        })
    })
}

// https.get('https://movie.douban.com/top250?filter=', (res) => {
//     let html = ''//以流的形式传输,每次都会触发事件
//     res.on('data', (chunk) => {
//         html += chunk
//     })
//     res.on('end', () => {//结束时console html
//         const $ = cheerio.load(html)
//         $('li .item').each(function () {//jQuiry的选择器
//             //拿到每一项
//             const picUrl = $('.pic img', this).attr('src')//item 限制$的选择作用域            
//             const title = $('.info .title', this).text()
//             const star = $('.star .rating_num', this).text()
//             const inq = $('.inq', this).text()
//             console.log(picUrl)
//             console.log(title)
//             console.log(star)
//             console.log(inq)
//         })
//     })
// })