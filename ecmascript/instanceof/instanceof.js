/* eslint-disable */
// // 模拟实现instanceof
// function new_instanceof(fun,Fun){
//   var FunPro = Fun.prototype;
//   var fun_pro_ = fun.__proto__;
//   while(true){
//     if(fun_pro_ === null){
//       return false;
//     }
//     if(fun_pro_ === FunPro){
//       return true;
//     }
//     fun_pro_ = fun_pro_.__proto__;
//   }
// }
// var arr = [1,2];
// console.log(
//   new_instanceof(arr,Array)
// )

function returnType(){
  return Array.from(arguments).map((item)=>Object.prototype.toString.call(item).slice(8,-1));
}


