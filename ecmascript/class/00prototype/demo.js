/* eslint-disable */

// 老版本类和继承

function F() {} // 新建一个类，对象也称为构造函数
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


// ***
// 每一个对象其实都是Object的实例，__proto__ 都指向 Object.prototype 
console.log(F.prototype.__proto__ === Object.prototype);
console.log({}.__proto__ === Object.prototype);
console.log(F.prototype instanceof Object);
console.log({} instanceof Object);

console.log('使用原型链讲继承')
// ***
// es6之前的继承都是通过原型链来实现的
// 利用prototype一层一层向上挖掘共享属性

// 父对象
function Person () {
  this.head = '脑袋瓜子';
  this.emotion = ['喜', '怒', '哀', '乐']; //人都有喜怒哀乐
}
Person.prototype.say = function(){
  console.log('hello');
}
// 子对象
function Student (studentId) {
  this.studentId = studentId;
}

// 将student的原型指向person的实例，实现继承Person
Student.prototype = new Person();
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
console.log(Object.prototype.__proto__);