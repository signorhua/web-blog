### bind apply call 

### bind

  + 手动实现一个bind
     ```js
    Function.prototype.bind = function (oThis) {

        // 判断this是不是函数，不是函数报错
        if (typeof this !== 'function') {
            throw new TypeError('What is trying to be bound is not callable');
        }

        // 拿到bind方法除了指向this之外的所有参数
        var aArgs = Array.prototype.slice.call(arguments, 1);

        // 需要改变this指向的函数，调用的函数 fToBind.bind(oThis)
        var fToBind = this;

        // 返回一个bing之后新的函数
        var fBound = function () {

            // 实现函数柯里化，参数合并
            // bind进来的参数，fBound的参数合并到一起
            var fBoundArg = aArgs.concat(Array.prototype.slice.call(arguments));
            
            // 判断this是用于普通的bind还是用于构造函数从而更改this指向
            // 如果是构造函数进来的this
            // this.__proto__ === fBound.prototype
            // 或者 this instanceof fBound
            
            var fBound_this = this instanceof fBound ? this : oThis;
            return fToBind.apply(fBound_this, fBoundArg);
        }

        // *********
        // 修改fBound返回函数的 prototype 为 fToBind绑定函数的 prototype，实例就可以继承函数的原型中的值
        // fBound.prototype = fToBind.prototype;

        // 以上的做法会导致修改fBound的prototype的时候，也会修改ftoBind的值

        // 可以使用Object.create()
        fBound.prototype = Object.create(fToBind.prototype);

        // 其实es6中我们可以运用更合适的方法，来实现继承
        //Object.setPrototypeOf(fBound.prototype,fONP.prototype);
        // *********

        return fBound;

    }
     ```

  + Object.create可能不支持的情况下,要创建一个新的空指针来实现继承
    ```js
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            throw new TypeError('What is trying to be bound is not callable');
        }
        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;

        // 创建一个新对象
        var FONP = function(){};

        var fBound = function () {
            var fBoundArg = aArgs.concat(Array.prototype.slice.call(arguments));
            var fBound_this = this instanceof FONP ? this : oThis;
            return fToBind.apply(fBound_this, fBoundArg);
        }

        // *********
        // 修改fBound返回函数的 prototype 为 fToBind绑定函数的 prototype，实例就可以继承函数的原型中的值

        FONP.prototype = fToBind.prototype; 
        fBound.prototype = new FONP(); 

        // 为什么要用空指针，而不是直接使用 fBound.prototype = new fToBind()
        // 答： 
        //    1.你不知道 new fToBind() 发生了什么，可能返回的不是实例（this），所以不一定拿的到原型
        //    2.我们想要拿到的是fToBind.prototype
        //    3.新建一个空函数,new 了之后绝对返回本身实例
        //    4.新函数的prototype 指向 fToBind.prototype
        //    5.再进行 fBound.prototype = new FONP()空函数
        //    6.这样子可以实现继承 (new fBound()).__proto__.__proto__ === fToBind.prototype;
        // *********

        return fBound;

    }
    ``` 

### call 

  + 手动实现一个call
    ```js
      Function.prototype.call = function(context){
        if(!context){
          context = typeof window === 'undefined' ? global : window;
        }
        // 解析参数
        var callArg = [...arguments].slice(1);
        // 需要改变this指向的函数
        var fn = this;
        // 改变上下文对象指向，传递参数
        context.fn = this;
        let result = context.fn(...callArg);
        // 上面的操作，给context添加多了一个属性，将删除的属性删除掉
        delete context.fn;
        return result;
      }
    ``` 

### apply

  + 手动实现一个apply
  ```js
    Function.prototype.apply = function(context){
      if(!context){
        context = typeof window === 'undefined' ? global : window;
      }
      // 解析参数
      var arg = arguments[1];
      // 需要改变this指向的函数
      var fn = this;
      // 改变fn的上下文对象
      context.fn = this;
      let result = context.fn(...arg);
      // 上面的操作，给context添加多了一个属性，将删除的属性删除掉
      delete context.fn;
      return result;
    }
  ``` 