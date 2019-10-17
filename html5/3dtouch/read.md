触屏 重力感应 陀螺仪 手机区别pc
touchstart touchmove touchend
- 感知力度，与应阴影 与照片关联

background-size:400%



-  live-server
    http
    http协议为web的底层

-  node 内建http模块
    http.createServer((req,res)=>{
        console.log(req.url)
    })listen(端口)
    一直伺服

-  http fs path node 内置模块
    index.html
    sloth.png
    一切皆是资源 url表示
    /  返回 index.html
    /images/sloth.png 返回sloth.png
    req.url
    文件类型不一样， text/html  image/png
    res.writeHead(200,"Content-Type":"text/html;charset=utf-8")      200表示请求的资源存在-状态码    发送头信息，通知浏览器