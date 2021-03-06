### tcp 三次握手

#### tcp 和 http 的关系

    1.http中只有请求，和响应，不存在连接和传输
    2.请求和响应都是数据报，需要创建tcp连接，传输通道

#### tcp为什么要持久连接 （长连接）

    1.tcp连接需要三次握手，每次重复连接都需要3次握手，消耗大
    2.http1.1中长连接，请求是串发的，一个接一个
    3.http2中长连接，请求是并发的，同一个用户 对 同一个服务器 ，只需要一个tcp连接

#### 为什么tcp需要三次握手建立连接

    1.为了防止服务端无用的链接
    2.确保链接成功
    eg：
        第一次握手，客户端向服务端，发送数据包，操作正常没问题
        第二次握手，服务端向客户端，数据包出问题了，客户端没接受到
            1.客户端没接受到，有延时限制功能，超过时间自动取消掉了
            2.服务端，以为客户端接受到了，保持着这个无效链接
            如果有第三次握手，确定客户端我已经接收到了，确保了连接成功

#### 三次握手

![三次握手](https://github.com/signorhua/web-knowledge/blob/master/http/03tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png?raw=true)

