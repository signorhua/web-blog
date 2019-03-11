/* eslint-disable */

// 老版本类和继承

function F() {} // 新建一个类，对象
const f = new F(); // 创建了一个实例

// ***
// prototype 对象指向原型
// console.log(F.prototype);

// ***
// constructor 原型指向对象  
const Fprototype = F.prototype;
console.log(Fprototype.constructor === F );

// ***
// instanceof 判断实例是否来自某个对象
console.log(f instanceof F);

// ***
// __proto__    实例指向对象原型
console.log(f.__proto__ === F.prototype );



