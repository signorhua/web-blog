#### csp 内容安全策略

    内容安全策略   (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段
    默认为网页内容使用标准的同源策略

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

    Content-Security-Policy ： 'script-src http: https:'

    why ：出于安全考虑，禁止html代码里面添加脚本语言
            XSS是一种经常出现在web应用中的计算机安全漏洞，它允许恶意web用户将代码植入到提供给其它用户使用的页面中
        
    所有请求只能根据http 和 https 请求
    Content-Security-Policy ： 'default-src http: https:'

####  补充：

    只能根据本域名下的所有请求进行加载,外部链接都不允许
    'Content-Security-Policy':'default-src \'self\''

    指定某一个网站的资源可以加载
    'Content-Security-Policy':'default-src \'self\' https://cdn.bootcss.com'

    表单提交限制本往网站
    'Content-Security-Policy':'default-src \'self\'; form-action \'self\''

    只限制script的请求，其他请求不限制,限制script请求只能是本网站和表单提交只能是本网站
    'Content-Security-Policy':'script-src \'self\'; form-action \'self\''

####  设置reporter报告功能 请求csp的相关

    在此模式下，CSP策略不是强制性的，但是任何违规行为将会报告给一个指定的URI地址

    'Content-Security-Policy-Report-Only':'script-src \'self\'; form-action \'self\'; report-uri /report'

#### 启用违例报告 违例和report不一样，这个强制

    默认情况下，违规报告并不会发送。为启用发送违规报告，你需要指定 report-uri 策略指令，并提供至少一个URI地址去递交报告：
    'Content-Security-Policy':'script-src \'self\'; form-action \'self\'; report-uri /report'