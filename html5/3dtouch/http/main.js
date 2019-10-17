var http = require('http');// node 底层核心库
var fs = require('fs');//引入文件库
var path = require('path');
//request 用户的访问
//response 服务器响应用户响应 
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url == '/images/sloth.png'){
        console.log('图片');
        res.writeHead(200,{'Content-Type':'image/png'});
        let imgStream = fs.createReadStream(path.join(__dirname,'sloth.png'));
        imgStream.pipe(res);
        return;
    }
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    let fileStream = fs.createReadStream(path.join(__dirname,'index.html'));//__dirname  返回项目物理路径
    fileStream.pipe(res);//将文件流pipe到res节点
})//创建一个web服务
.listen(8080)