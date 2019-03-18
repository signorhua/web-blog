#### reduce 语法

    arr.reduce(callback, initialValue)
    
    callBack有四个参数
    previousValue 上一次调用该函数时的返回值
    currentValue 正在处理的元素
    currentIndex 正在处理的数组元素下标
    array 当前调用reduce方法的数组

    initalValue 可选的初始值，作为第一次调用函数是传递给previousValue值

    使用场景
    求和：
        var arr = [1,2,3,4];
        arr.reduce(function(pre,cur){
            return pre+cur;
        })
    求最大值
        var arr = [1,2,3,4];
        arr.reduce(function(pre,cur){
            return pre>cur ? pre : cur;
        })

    高级用法
        计算数组中每个元素出现的次数
        数组去重
        二维数组转为一维数组
        将多维数组转化为一维
        对象里的属性求和
        下划线转驼峰
