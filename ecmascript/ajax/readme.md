# ajax

----
## xhr实例的对象

```js
  var xhr;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest(); 
  }else{
    xhr = new ActiveObject('Microsoft.XMLHTTP'); //兼容ie
  }
```
---
## open方法

创建http请求，请求未发送
open(method,url,async,username,password)
+ method 请求的类型
  + post get put delete 
+ url 请求的地址
+ async 用于是否为异步处理
  + 默认为true
+ username 定义用户名，不常用，默认为null
+ password 定义密码 不常用，默认为null

---
## setRequestHeader 方法

setRequestHeader(name,value);
+ name 定义http请求头部的名称
+ value 定义http请求头部的值

setRequestHeader调用时间
+ 必须在open方法之后调用
+ send方法调用之前

+ 可以连续使用多次

---
## timeout 属性

timeout 设置过期时间 
+ 单位 毫秒
+ 发生超时之后会触发<strong>ontimeout</strong>事件

xhr.timeout = 3000 

---
## upload 属性

upload 用于在数据传输中，返回服务器收集到的数据多少
+ 可用于上传进度的获取

---
## send 方法

send方法 用于发送open方法创建的http请求
send([body=null])
+ 参数 body 定义http 请求的数据 
+ 当http请求为get和head时，该参数被忽略
+ body的类型可以为
  + array 二进制缓冲数组
  + blob 二进制对象
  + document 类似xml的数据
  + domString 字符串
  + formData 表单数据

---
## abort 方法
当请求后想终止了，调用这个方法即可

---
## xhr事件

+ onloadstart
+ onprogress
+ onabort
+ onerror
+ onload
+ ontimeout
+ onloadend

---
## xhr.readyState xhr的状态

+ 0 unsent 未调用open方法
+ 1 opened 已经调用了open方法
+ 2 headers_received 已经调用了send方法，响应的http头部和状态可以获取
+ 3 loading 正在下载数据，下载的数据还不完整
+ 4 done 数据下载完成
  
https://www.jianshu.com/p/ac0bd54ed150