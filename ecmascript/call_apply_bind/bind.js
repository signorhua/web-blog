/* eslint-disable */

// bind的两个特性
// 1.第一类特性，返回一个绑定了相应this的函数,函数柯里化，拆分函数
function add(a,b,c){
  console.log(a+b+c);
}
var add10 = add.bind(null,10);
add10(1,2);

// 2.bind 和 new 通过new的方式创建一个对象，bind函数在this层面不起作用，传进来的参数还是有用的
function foo(){
  this.b = 100;
  console.log(this.a);
  return this.a;
}
var func = foo.bind({a:1});
func(); // 1
new func(); // undefined 在这里bind不起任何作用


/* eslint-disable */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {

        // 判断this是不是函数，不是函数报错
        if (typeof this !== 'function') {
            throw new TypeError('What is trying to be bound is not callable');
        }

        // 拿到bind方法除了指向this之外的所有参数
        var aArgs = Array.prototype.slice.call(arguments, 1);

        // 需要改变this指向的函数，调用的函数 fToBind.bind(oThis)
        var fToBind = this;

        // 创建了一个空对象fONP
        var fONP = function () {};

        // 返回一个bing之后新的函数
        var fBound = function () {

            // 实现函数柯里化，参数合并
            // bind进来的参数，fBound的参数合并到一起
            var fBoundArg = aArgs.concat(Array.prototype.slice.call(arguments));
            
            // 实现new进来的忽略掉bind绑定的this
            // 1.new fBound() this指向一个空对象
            // 2.这个空对象的原型会指向构造器的prototype的属性  fBound的prototype
            // 3.之前把fBound.prototype 指向了一个new fONP()的实例
            // 4.只要是继承于这个 this instanceof fONP,用new进来的this
            
            var fBound_this = this instanceof fONP ? this : oThis;
            return fToBind.apply(fBound_this, fBoundArg);
        }

        // 空对象的原型指向了 fToBind的原型
        fONP.prototype = fToBind.prototype;
        // 再将fBound的原型指向了 空对象的实例
        fBound.prototype = new fONP();

        return fBound;

    }
}