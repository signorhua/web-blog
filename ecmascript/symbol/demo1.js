// ES5的对象属性名都是字符串，
// 就很容易造成属性名的冲突，
// 比如一个项目很庞大，又不是一个人开发的，
// 就有可能会造成变量名冲突，
// 如果有一个独一无二的名字就好了，
// 这样就能从根本上防止属性名冲突。
// 这就是ES6引入Symbol的原因
const printC = (con) => {
  console.log(con);
};
// 1.独一无二
// eslint-disable-next-line symbol-description
const s1 = Symbol();
// eslint-disable-next-line symbol-description
const s2 = Symbol();
printC(s1 === s2); // false

// 2.可以带参数
const s3 = Symbol('s3');
const s4 = Symbol('s4');
printC(s3 === s4); // false

// 3.Symbol 不可以和其他类型的值进行运输
// const s5 = Symbol('s5');
// printC(`${s5}1`);
// TypeError: Cannot convert a Symbol value to a string
// symbol不允许和其他值进行计算

// 4.Symbol 作为属性名
const mySymbol = Symbol('symbol');

// 4.1
const a = {};
a[mySymbol] = 'symbol属性值';
// 只能使用[]，不能使用点运算，包括获取

// 4.2
const b = {
  [mySymbol]: 'symbol属性值',
};
printC(b);

// 4.3
const c = {};
Object.defineProperty(c, mySymbol, { value: 'smybol属性值' });

// 5.Symbol在类外部也是可以访问的，
// 只是不会出现在for...in、for...of循环中，
// 也不会被Object.keys()、Object.getOwnPropertyNames()
console.log(Object.keys(b));

// 6.Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名
const d = {
  [Symbol('a')]: 'a',
  [Symbol('b')]: 'b',
  c: 'c',
};
const dSymbolKey = Object.getOwnPropertySymbols(d);
console.log(Array.isArray(dSymbolKey));
// console.log(Object.getOwnPropertySymbols(d));
