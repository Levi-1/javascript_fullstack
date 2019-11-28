const WebSocket = require('ws')
const wss = new WebSocket.Server({
    port: 3000
})
wss.on('connection', (ws) => {
    console.log('收到链接')
    ws.on('message', (msg) => {
        console.log('msg', msg)
        // 广播给频道中所有人
        wss.clients.forEach(client => {
            client.send(msg) // 会将msg转化为字符串，在发送前先将信息stringfy是个解决方法
        })
    })
})
