### == 和 === 有什么区别？

### === 不需要进行类型转换，只有类型相同并且值相等时，才返回 true

### == 需要转换成为相同的类型进行判断

  + 1. 首先判断两者类型是否相同，如果相等，判断值是否相等
  + 2. 如果类型不同，进行类型转换
  + 3. 判断比较的是否是 null 和 undefined, 如果是, 返回 true
  + 4. 判断比较的一方当中是否有NaN，如果有，返回false
  + 6. 判断其中一方是否为 boolean, 如果是, 将 boolean 转为 number 再进行判断
  + 5. 判断两者类型是否为 string 和 number, 如果是, 将字符串转换成 number
  + 7. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol , 如果是, 将 object 转为原始类型再进行判断 ToPrimitive

### 对象转换为原始类型

+ 某个对象出现在了需要原始类型才能进行操作的上下文时，JavaScript 会自动调用 ToPrimitive 函数将对象转化为原始类型
```js
  var ToPrimitive = function(obj,preferredType){
    
    var APIs = {
      typeOf: function(obj){
        return Object.prototype.toString.call(obj).slice(8,-1);// 确认传入的对象类型
      },
      isPrimitive: function(obj){
        var _this = this,
            types = ['Null','Undefined','String','Boolean','Number'];// js中的5种原始类型
        return types.indexOf(_this.typeOf(obj)) !== -1; 
      }
    };

    // 如果 传入的 本身已经是原始类型，则直接返回
    if(APIs.isPrimitive(obj)) {return obj;}
    
    // 对于 Date 类型，会优先使用其 toString 方法；否则优先使用 valueOf 方法
    preferredType = (preferredType === 'String' || APIs.typeOf(obj) === 'Date' ) ? 'String' : 'Number';
    if(preferredType==='Number'){
      if(APIs.isPrimitive(obj.valueOf())) { return obj.valueOf()};
      if(APIs.isPrimitive(obj.toString())) { return obj.toString()};
    }else{
      if(APIs.isPrimitive(obj.toString())) { return obj.toString()};
      if(APIs.isPrimitive(obj.valueOf())) { return obj.valueOf()};
    }
    throw new TypeError('TypeError');
  }
```

### [] == ![]

+ [] == ![] ! 优先级比较高 所以 先转换![] 
  - [] == false

+ [] == false 一方为boolean,布尔值先转换成 数值 Number(false) 
  - [] == 0

+ [] == 0 一方为对象，ToPrimitive([])
  -  "" == 0

+ "" == 0 一方为字符串，一方为数值，字符串转换为数值 Number("") 
  -  0 == 0

+ 所以返回 true 

