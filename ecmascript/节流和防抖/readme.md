### 函数节流和防抖

### 什么是函数节流和防抖
### 为什么要函数节流和防抖
### 函数节流和防抖会带来什么好处

### 函数节流
 
  + 在一个单位时间里面，这个函数只能执行一次，多次调用，只有一次可以触发
  + 幻灯片按时播放操作，不断播放，但是只有一段时间内才能发生一次

### 函数防抖

  + 在事件被触发n秒之后再进行回调，如果在这n秒之内又被触发了，则重新计时
  + 电梯不断上乘客，上一个，关闭时间延后10s

### 为什么要函数节流以及防抖

  + 限制函数的执行频次

### 如果一次在触发一个函数，节流和防抖会有什么差别

  + 节流会每隔一段时间执行一次
  + 防抖只会执行一次

### 函数节流和防抖带来什么好处

  + 以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象（优化性能）

### 函数节流或者函数防抖应用场景

  + 函数节流  适合大量事件，按照时间平均分配
    - 游戏中的刷新率
    - dom元素的拖拽
    - canvas的画笔功能
 
  + 函数防抖  适合多次事件一次响应操作
    - 防止连续提交表单，减少一段时间内多次提交
    - 输入框连续输入做限制，减少一段时间内多次请求
    - scroll是否滑动到底部，滚动事件 + 函数防抖 

### js实现函数节流（一段时间内只能执行一次）

  + 思路1 利用定时器实现
  ```js
    function throttle(fn,wait=3000,isStart=true){
      let canUse = true;
      return function(...arg){
        // 是否执行一次先
        if(isStart){
          fn.apply(this,arg);
          isStart = false;
          return;
        }
        // 可以执行
        if(canUse){
          canUse = false;
          setTimeout(()=>{
            fn.apply(this,arg);
            canUse = true;
          },wait)
        }
      }
    }
  ```
  + 思路2  记住点击时间,进行判断
  ```js
  function throttle(fn,wait=3000,isStart=true){
    var pre = 0;
    return function(...arg){
    var now = +new Date();
    if(!isStart){
      pre = now;
      isStart = true;
    }
    if(now - pre >= wait){
      fn.apply(this,arg);
      pre = now;
    }
    }
  }
  ```

### js实现函数防抖

  ```js
    function debounce(fn,wait=3000,isStart=true){
      let timer = null;
      return function(...arg){
        //  是否立即执行一次
        if(isStart){
          fn.apply(this,arg);
          isStart = false;
          return;
        }
        // 如果定时器存在,清空定时器，重新定义
        if(timer){
          clearTimeout(timer);
        }
        timer = setTimeout(()=>{
          fn.apply(this,arg);
        },wait);
      
      }
    }
  ```
