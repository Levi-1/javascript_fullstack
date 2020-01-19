const http = require('http')

http.createServer((req, res) => {
    console.log(res.url, req.method),
    res.writeHead(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允许访问的源
        'Access-Control-Allow-Headers': 'X-auth, content-type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Credentials': true // 是否允许cookie传输
    })
    // res.end(JSON.stringify({
    //     bookName: 'php'
    // }))
    res.end(`
    getBook(${JSON.stringify({bookName: 'php'})})
    `)
}).listen(3000, () => {
    console.log('server is running')
})