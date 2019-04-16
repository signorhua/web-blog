### for in (enumerables) and for of (iterables) 的区别

### for in 
  
  + 以任意顺序遍历一个对象的可枚举属性，对于每个不同的属性，语句都会执行
  + 也就是for in 出来的是 <strong>key</strong>
  - for(variable in object)
    + variable 每次迭代时，将不同的属性名分配给变量
    + object 被迭代枚举其属性的对象
  + for...in 循环只遍历可枚举属性 enumerables 
  - for...in不应该用于迭代一个 Array，不一定以规定的顺序返回索引
  + <strong>Object.keys 返回一个for in 顺序出来的数组</strong>
  - <strong>仅迭代自身的属性 而不是它的原型</strong>
    + Object.getOwnPropertyNames(obj)   **所有**
      * 可枚举和不可枚举都不能列出来
      * 数组会将length属性一起返回
    + obj.hasOwnProperty(prop)  **判断 不属于原型链**
      * 返回一个布尔值，指示对象自身属性中是否具有指定的属性，在原型链或者不存在都会返回false
    + obj.propertyIsEnumerable(prop) **判断 不属于原型链 并且可枚举**
      * 返回一个布尔值，表示指定的属性是否可枚举 enumerables值



  + for in 用于对象
  ```js
    var obj = {a:1};
    for(let key in obj){
      console.log(key); //a
      console.log(obj[key]); //1
    }
  ```
  + for in 用于数组（不建议）
  ```js
    var a = [1,2,3];
    for(let key in a){
      console.log(key); //0，1，2，下标
      console.log(obj[key]); //1，2，3 实际值
    }
    // 不建议
    // a['name'] = 'a';  会把这个name也遍历出来 
  ```
  + for in 用于字符集（不建议）
  ```js
    var str = 'qwer';
    for(let key in str){
        console.log(key); // 0 1 2 3 下标
        console.log(a[key]);//  q w e r 实际值
    }
  ```

  + 影响到for in的遍历
    + Object.defineProperty 定义属性,设置或者修改
      ```js
        Object.defineProperty(obj,prop,des)
        // des 采用上面这种方式声明变量，以下是默认值
        // value  值 默认undefined
        // writable 可写 false
        // enumerable  可遍历 false
        // configurable  可配置 false
      ```
      - writable
        * 为true值时，value值才能够被改变，不能被重新分配

      - Enumerable  定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被列出来
       
      - configurable
        * 是否可以被删除
        * value和writable特性外的其他特性是否可以被修改
          
    + Object.getOwnPropertyDescriptor 获取属性描述
      ```js
        Objet.getOwnPropertyDescriptor(obj,prop)
      ```
    + 对象常量属性
      - Object.defineProperty(obj,prop,{value:propValue}) 默认情况下属性常量化，不可删除，不可更改，可以添加

    + 禁止属性扩展
      -  Object.preventExtensions  
      -  对象变的不可扩展，也就是永远不能再添加新的属性
      -  旧的属性仍然能够删除和修改
      -  原型上依旧可以添加属性
      -  Object.isExtensible 判断这个对象是否可以扩展

    + 密封对象
      - Object.seal();
      - 在Object.preventExtensions 的基础上添加configurable  为false
      - 在禁止属性扩展的情况下，所有自身属性都不可配置的对象  
      - 属性的值仍然可以修改
      - 不会影响从原型链上继承的属性。但 proto ( ) 属性的值也会不能修改
      - Object.isSealed 判断这个对象是否是密封的

    + 冻结对象
      - Object.freeze(obj) 不可配置，不可扩展，不可修改  
      - 在 Object.seal() 基础上，添加writable  为false
      - 冻结对象的所有自身属性都不可能以任何方式被修改
      - 试修改该对象的操作都会失败
      - 如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象
  
### for of

  + 在可迭代对象上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
  + 也就是for in 出来的是 <strong>value</strong>
  - for(variable in iterable)
    + variable 在每次迭代中，将不同属性的值分配给变量
    + iterable 被迭代枚举其属性的对象
  + 普通对象是无法使用for of的
  + 迭代Array 迭代String 迭代Map Set arguments dom集合
