### cookie

#### 什么是cookie？
    cookie 是服务端返回数据的时候，通过set-Cookie这个header设置到浏览器里面，保存在浏览器里面的数据
    下次再同域的请求中，请求就会带上这个cookie
    以键值对存在，可以设置多个

#### cookie主要用在一下三个方面
    会话状态管理（用户登录状态，购物车，游戏分数，其他需要记录的信息）
    个性化设置 （用户自定义设置，主题等）
    浏览器行为跟踪 （如跟踪分析用户行为等）
        
#### cookie属性
    max-age 和 expires 设置过期时间
    secure 只在https的时候发送
    HttpOnly 无法通过js中document.cookie访问 Csrs攻击（安全问题）

#### cookie服务端发送和客户端返回
    服务端发送： set-cookie: 'id=123'
    客户端返回： cookie:'id=123'
    
#### cookie一次性设置多个
    set-cookie: ['id=123', 'abc=456']
    在response Headers里面显示的就是 两个set-Cookie头信息
    服务端返回的是 cookie:'id=123,abc=456'

#### cookie默认时间
    cookie的默认过期时间，浏览器关闭的时候就过期
    设置cookie过期时间 ['id=123; max-age=2','abc=456']

#### cookie设置httpOnly
    ['id=123; max-age=2', 'abc=456; HttpOnly']

#### Cookie的作用域 

    Domain 和 Path 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。

    Domain 标识指定了哪些主机可以接受Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了Domain，则一般包含子域名。
    例如，如果设置 Domain=test.com，则Cookie也包含在子域名中（如abc.test.com）。

    Path 标识指定了主机下的哪些路径可以接受Cookie（该URL路径必须存在于请求URL中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。
    例如，设置 Path=/docs，则以下地址都会匹配：
    /docs
    /docs/Web/
    /docs/Web/HTTP

    通过判断request.headers.host 去设定cookie
    set-Cookie: ['id=123','abc=456; domain=test.com']

### session

#### seesion是什么

    cookie 不是seesion!!!  

    cookie 虽然很方便，但是使用 cookie 有一个很大的弊端，cookie 中的所有数据在客户端就可以被修改，数据非常容易被伪造，那么一些重要的数据就不能存放在 cookie 中了，而且如果 cookie 中数据字段太多会影响传输效率。为了解决这些问题，就产生了 session，

    session是另一种记录客户状态的机制，session 中的数据是保留在服务器端的，客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session

    session 实现过程 
        1.在服务器端生成全局唯一标识符session_id
        2.在服务器内存里开辟此session_id对应的数据存储空间
        3.将session_id作为全局唯一标示符通过cookie发送给客户端
        4.以后客户端再次访问服务器时会把session_id通过请求头中的cookie发送给服务器
        5.服务器再通过session_id把此标识符在服务器端的数据取出

    !!!cookie 不是session 唯一实现方式