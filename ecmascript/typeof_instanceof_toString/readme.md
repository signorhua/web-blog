### 判断数据类型

+ 数据类型
    * undefined
    * null
    * boolean
    * string
    * number
    * object
    * symbol(ES6新增)
***

+ typeof
    + 不能分辨出数组和obj
    + 不能分辨出null和obj

***

+ instanceof
  + instanceof 原理：
    + 在原型链(__proto__)中查找构造函数的原型对象
  + 基本包装类型 需要new方式才可实现
      ``` js
      var a = new String('a');
      a instanceof String // true
      'a' instanceof String // false
      ```
  + 模拟实现 instanceof
    ```js
    function new_instanceof(fun,Fun){ //new_instanceof([1],Array);
      var FunPro = Fun.prototype;
      var fun_pro_ = fun.__proto__;
      while(true){
        if(fun_pro_ === null){
          return false;
        }
        if(fun_pro_ === FunPro){
          return true;
        }
        fun_pro_ = fun_pro_.__proto__;
      }
    } 
    ```
  + Function.prototype.__proto__ === Object.prototype //***
  + Function.__proto__ === Function.prototype
  + Object.__proto__ === Function.prototype
***

+ Object.prototype.toString.call
  ```js
  Object.prototype.toString.call(1) // "[object Number]"

  Object.prototype.toString.call('hi') // "[object String]"

  Object.prototype.toString.call({a:'hi'}) // "[object Object]"

  Object.prototype.toString.call([1,'a']) // "[object Array]"

  Object.prototype.toString.call(true) // "[object Boolean]"

  Object.prototype.toString.call(() => {}) // "[object Function]"

  Object.prototype.toString.call(null) // "[object Null]"

  Object.prototype.toString.call(undefined) // "[object Undefined]"

  Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"

  Object.prototype.toString.call(arguments)); // "[object Arguments]"
  ```
  ```js
  function returnType(){
    return Array.from(arguments).map((item)=>Object.prototype.toString.call(item).slice(8,-1));
  }
  ```
***

