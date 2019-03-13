## iframe使用总结

----

#### 父子通信

    父页面获取子iframe的window
    document.getElementById('childIframe').contentWindow
    
    父页面获取子iframe中的元素
    document.getElementById('childIframe').contentWindow.document.getElementById('button')

    父页面调用子iframe中的全局方法
    document.getElementById('childIframe').contentWindow.say()

    父元素调用子iframe中的全局属性，全局变量
    document.getElementById('childIframe').contentWindow.a
    
    子页面获取父iframe的window
    top 或者 parent
    其余操作都类似

### 兄弟通信

    利用父元素进行传输
    利用websocket传输

### postMessage

    跨域iframe互相交流使用postMessage
    html5新的api使用

    otherIframe.postMessage(messageData, targetOrigin, [transfer]);

        otherIframe 以下的窗口都可以适用
            1.文档窗口中的iframe 
                var iframe = document.getElementById('my-iframe');
            2.JavaScript打开的弹窗
                var win = window.open();
            3.当前文档窗口的父窗口
                var win = window.parent;
            4.打开当前文档的窗口
                var win = window.opener();
        messageData 传输的数据，
        targetOrigin 传输的目标位置，可以用*来代替，任意窗口 http://127.0.0.1:5500
        transfer  可选属性
    
    ----

    otherIframe中接受消息

        window.addEventListener("message", function(event) {        
            console.log(event, event.data);    
        }, false);

        兼容message事件
        if (window.addEventListener) {
            //为窗口注册message事件，并绑定监听函数
            window.addEventListener('message', receiveMsg, false);
        }else {
            window.attachEvent('message', receiveMsg);
        }
    
