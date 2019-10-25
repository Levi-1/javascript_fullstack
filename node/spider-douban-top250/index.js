const https = require('https')
const cheerio = require('cheerio')

doubanSpider('https://movie.douban.com/top250?filter=', (data) => {
    console.log(data)
})

function doubanSpider(url, cb) {
    https.get(url, (res) => {
        let html = ''//以流的形式传输,每次都会触发事件
        res.on('data', (chunk) => {
            html += chunk
        })
        res.on('end', () => {//结束时console html
            const $ = cheerio.load(html)
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
                cb({
                    picUrl,
                    title,
                    star,
                    inq
                })
            })
        })
    })
}

https.get('https://movie.douban.com/top250?filter=', (res) => {
    let html = ''//以流的形式传输,每次都会触发事件
    res.on('data', (chunk) => {
        html += chunk
    })
    res.on('end', () => {//结束时console html
        const $ = cheerio.load(html)
        $('li .item').each(function () {//jQuiry的选择器
            //拿到每一项
            const picUrl = $('.pic img', this).attr('src')//item 限制$的选择作用域            
            const title = $('.info .title', this).text()
            const star = $('.star .rating_num', this).text()
            const inq = $('.inq', this).text()
            console.log(picUrl)
            console.log(title)
            console.log(star)
            console.log(inq)
        })
    })
})