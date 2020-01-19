# 跨域
    浏览器的安全策略:
    两个服务需要通信，需要遵守同源策略: 同协议/同域名/同端口号
    同源才能请求
    不同源会产生跨域

# cors
    cross-origin-resource-share
    一个规范，允许服务器申明那些源可以访问

# 请求的步骤
1. 简单请求：直接发起跨域请求
2. 复杂请求: 先发起预检请求（preFlight），预先试探一下服务端是否支持跨域，之后才会发起正式的跨域请求
    <form action="" method="" enctype=""></form>

    简单请求， 表单可以构造的请求

# jsonP
    link script img: 不受同源策略的影响