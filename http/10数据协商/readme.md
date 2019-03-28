### 数据协商
    
    什么叫数据协商
        客户端发送给服务端一个请求的时候，客户端会声明我希望拿到的数据格式，以及数据相关的一些限制，服务端会根据它的一些请求的头信息，到底要返回怎么样一个数据
    
    分类中分为请求和返回

#### 请求
    Accept：我想要的数据类型
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    q这里是代表权重，权重越希望返回的数据格式

    Accept-Encoding: 怎么样的编码格式，压缩方式
    Accept-Language: 返回怎么样的语言，中国展示中文，返回中文还是英文
    Uset-Agent：浏览器的信息

#### 返回
    Content
    Content-Type: 返回的数据格式
    Content-Encoding: 返回的编码格式
    Content-Language
    
#### 补充 
    在chromeDevtools中netWork中，每个请求都有个size列，上下两个值，上面的是整个包，包含头信息，下面是主要内容，实际内容大小
    这个size值和Encoding压缩，编码格式有关,上面的值会随着压缩模式的变化而变化，下面实际的值不会变化，解压之后的实际内容不会变
    
