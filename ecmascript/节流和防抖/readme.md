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

  ```js
  function throttle(fn, interval = 300) {
      let canRun = true;
      return function () {
          if (!canRun) return;
          canRun = false;
          setTimeout(() => {
              fn.apply(this, arguments);
              canRun = true;
          }, interval);
      };
  }
  ```

### js实现函数防抖（n秒后执行，n秒之内再次触发，重新计时n秒）

  ```js
    function debounce(fn, wait = 300) {
      var timer = null;
      return function () {
          if (timer) {// 如果是已经开始了的任务，时间就不为空，把定时器任务置空
              clearTimeout(timer);
              timer = null;
          }
          timer = setTimeout( () => {
              fn.apply(this, arguments)
          }, wait)
      }
    }
  ```
### js实现防抖加强版，先立即执行一次，后面再进行防抖操作

  ```js
    function debounce(fn, wait = 300, immediate = true){
      // 定时器，作用于，参数
      let timer,context,args;
      // 开启延时操作
      const later = ()=> setTimeout(()=>{
        // 延时函数执行完毕，清空缓存
        timer = null;
        // 非立即执行的情况
        if (!immediate) {
          fn.apply(context, args);
          context = args = null;
        }
      },wait)

      return function(...params){
        
        if(!timer){
          // 如果没有创建延迟执行函数，就创建一个
          timer = later();
          // 立即执行
          if(immediate){
            fn.apply(this,params);
          }else{
            // 非立即执行，将函数参数暴露出去
            context = this;
            args = params;
          }
        }else{
          // 存在延迟执行函数，清除一个并且重新调用
          clearTimeout(timer);
          timer = later();
        }

      }
  }
  ```