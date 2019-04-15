### 判断数据类型

+ typeof
    + 不能分辨出数组和obj
    + 不能分辨出null和obj

***

+ instanceof
  + 基本包装类型 需要new方式才可实现
      ``` js
      var a = new String('a');
      a instanceof String // true
      'a' instanceof String // false
      ```
  - 数组可同时属于null Array Object
  - 对象同时属于 null Object

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
  ```
  ```js
  function returnType(){
    return Array.from(arguments).map((item)=>Object.prototype.toString.call(item).slice(8,-1));
  }
  ```

