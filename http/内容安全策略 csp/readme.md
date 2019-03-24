#### csp 内容安全策略

    作用：
        1.限制资源获取
        2.报告资源获取越权
    
    限制方式：
        1.default-src 限制全局
        2.制定资源类型

    资源类型：
        connect-src 请求发送的目标
        img-src 可以从哪几个目标下加载
        等等
    
#### 禁止在html代码里面内嵌js inlineScript

    why ：出于安全考虑，禁止html代码里面添加脚本语言
            XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中

    解决方案 响应头添加新信息：
        
        只能根据http 和 https 请求
        Content-Security-Policy ： 'default-src http: https:'

    补充：
        只能根据本域名下的js进行加载
        'Content-Security-Policy':'default-src \'self\''

