#### cros跨域


    跨域其实是有请求回来的，但是浏览器因为内容安全策略的问题，把返回的值忽略掉了，并且报了个错

    功能概述
    跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

#### cros跨域 Access-Control-Allow-Origin 访问控制允许来源

    所有的服务都可以接受
    'Access-Control-Allow-Origin': '*'
    设定专门的服务器可以接受
    'Access-Control-Allow-Origin':'http://127.0.0.1:1234'

#### jsonp 原理

    script标签请求资源，src允许跨域

#### 跨域补充知识

    在cors跨域过程其他的限制
        方法限制，只允许 get，post，head
        Content-Type限制，只允许的Content-Type值
                text/plain
                multipart/form-data
                application/x-www-form-urlencoded
        请求头限制

#### 预请求验证

    规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）
    
    允许哪些头发出请求
    'Access-Control-Allow-Headers': 'X-Test-Cors'
    允许哪些请求方法
    'Access-Control-Allow-Methods': 'PUT'
    设置最大请求时间 
    设置1000，1000秒之内请求过了，你不再需要发送预请求来验证了
    'Access-Control-Max-Age': '1000'







