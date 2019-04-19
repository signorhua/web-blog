### 深拷贝和浅拷贝

##### 1.什么是浅拷贝，什么是深拷贝
##### 2.浅拷贝和深拷贝有什么区别
##### 3.怎么在我们的项目中运用到他们，优化我们的代码

### 什么是浅拷贝

  + 问：进行一个简单的复制 for-in
  ```js
    var obj = {a:1};
    var copyObj = {};
    for(let k in obj){
      if(obj.hasOwnProperty(k)){ //判断该属性不在原型中
        copyObj[k] = obj[k];
      }
    }
    console.log(copyObj); // {a:1}
    copyObj.a = 2; // copyObj {a:2}
    console.log(obj.a); // 1
  ```
  + 问：以上的复制方法实现了复制了吗
  + 答：实现了，改变copyObj不会改变obj了

  ```js
    var obj = {a:1,sub:{b:2}};
    var copyObj = {};
    for(let k in obj){
      if(obj.hasOwnProperty(k)){ //判断该属性不在原型中
        copyObj[k] = obj[k];
      }
    }
    console.log(copyObj); // {a:1,sub:{b:2}}
    copyObj.sub.b = 3; // copyObj {a:1,sub:{b:3}}
    console.log(obj.sub.b); // 3
  ```
  + 问：子对象实现了复制了吗
  + 答：没有实现
##### 类似于这种父对象实现了复制，子对象没有实现复制的复制，就叫做浅复制

### 什么是深拷贝

  + 问：那什么是深拷贝
  + 答：深拷贝就是浅拷贝的升级，子对象会一起复制
  ```js
  var  obj = {
    a:1,
    sub:{b:2}
  };
  var copyObj = function(obj){
    var newObj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        return JSON.parse(JSON.stringify(obj));
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            copyObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
  };
  var newObj = copyObj(obj);
  newObj.sub.b = 3;
  console.log(obj); //{a:1,sub:{b:2}} 没有被改动到
  ```
  + 深拷贝在上面使用了两种方式
    + JSON.parse(JSON.stringify(obj))
    + 利用遍历递归实现每个对象和子对象

### 怎么在我们的项目中运用到他们，优化我们的代码

+ 使用同一个对象、数组给两个不同变量的时候，指向同一个变量地址，会照成很混乱，为了使两个变量互不影响，就需要使用到拷贝了
+ 实现方式
  + JSON.parse(JSON.stringify());//深拷贝
  + for in 遍历递归 // 耗性能 深拷贝
  + Object.assign();  // 浅拷贝
    ```js
      var  obj = {
        a:1,
        sub:{b:2}
      };
      var newObj = Object.assign({},obj);
      newObj.sub.b = 3;
      console.log(obj);
    ``` 

### 扩展知识 Object.assign使用

+ Object.assign(tar,sor1,sor2); 
+ 用于将所有 <strong>可枚举属性</strong> 的值从一个或多个源对象复制到目标对象。它将返回目标对象 
+ 浅拷贝 * 
+ 合并对象 *
+ 合并具有相同属性的对象，属性被后续参数中具有相同属性的其他对象覆盖 *
+ 继承属性和不可枚举属性是不能拷贝的
+ 拷贝 symbol 类型的属性
+ 原始类型会被包装为对象，undefined,null,boolean，num,其实也就只有字符串的包装对象才可能有自身可枚举属性
  ```js
    var v1 = "abc";
    var v2 = true;
    var v3 = 10;
    var v4 = Symbol("foo")
    var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }
  ```
+ 异常会打断后续拷贝任务,异常情况会比如说target目标对象defineProperty设置了只读属性
+ 拷贝访问器