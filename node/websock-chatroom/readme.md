## 应用层
    http websocket

    http: client ->> server
    websocket: client ->> server
    server -> client
    全双工通信


    http2.0: 支持  服务端推送(server-push)

# 连接
1. 发送 一个 http请求 ， 后端 响应 101 switch protol  
2. 辅助协议 connection ：upgrade 
3. 之后由http协议升级为websocket，后续的发送接收信息都会通过websocket 此全双工通道