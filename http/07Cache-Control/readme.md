####  Cache-Control 

    'Cache-Control': 'max-age=20,public'(可用逗号隔开)
    通用消息头字段被用于在http 请求和响应中通过指定指令来实现缓存机制

##### 可缓存性

    public  在这个http请求返回当中，代表这个http请求它返回的内容所经过的任何路径当中包括一些中间的http代理服务器，以及发出这个请求的客户端浏览器它都可以对这个返回内容的缓存操作
    
    private  响应只能被单个用户缓存，只有发起请求的浏览器可以缓存,代理服务器都不允许缓存这个数据
    
    no-cache 任何一个节点都不可以缓存，在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证

#### 到期

    'Cache-Control': 'max-age=20',
    20s之后才过期

    max-age=<seconds>
    缓存了多少秒之后才会过期，浏览器才会再次发出请求

    s-maxage=<seconds>
    存在代理服务器端，会覆盖掉代理max-age，用s-maxage，专门为代理服务器设置的

    max-stale=<seconds>
    发起请求的一方主动带的一个头，即使在max-age和s-maxage过期了，在max-stale的时间范围内，我们仍然可以使用过期的缓存

#### 重新验证

    must-revalidate 
        缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源

    proxy-revalidate
        与must-revalidate作用相同，但它仅适用于共享缓存（例如代理），并被私有缓存忽略

#### 其他

    no-store 
        缓存不应存储有关客户端请求或服务器响应的任何内容，永远都不留存，和no-cache不同的是no-cache经过验证之后不保存，代理服务器都不缓存
    
    no-transform
        不得对资源进行转换或转变。Content-Encoding, Content-Range, Content-Type等HTTP头不能由代理修改。例如，非透明代理可以对图像格式进行转换，以便节省缓存空间或者减少缓慢链路上的流量。 no-transform指令不允许这样做


#### 前端解决浏览器缓存方案

    动态哈希值

#### 前端缓存验证

    浏览器  本地缓存 代理缓存 源服务器

##### 验证头

    Last-Modified  上次修改时间 
        配合 If-Modified-Since 或者 If-Unmodified-Since 使用
    对比上次修改时间以验证资源是否需要更新
        服务端发送 Last-Modified：123
        客户端返回 If-Modified-Since: 123


    Etag    数据签名
        如果我们对一个资源进行修改，数据签名就会改变
        配合 If-Match 或者 If-None-Match使用
            服务端发送 Etag：123
            客户端返回 If-Match: 123
        
##### 忽略所有缓存

    谷歌的disable cache 和 设置Cache-Control:no-store;
    直接忽略掉所有缓存，和缓存相关的头信息

##### 补充Vary

    vary:'X-Test-Cache',
    必须vary声明的这个值，这个值是请求带的一个头，这个头信息的值必须相等，才可以共有一份缓存