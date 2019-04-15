/* eslint-disable */

// ajax 重点对选
// xmlHttpRequest IE下使用 ActiveObject('Microssoft.XMLHTTP');
// 

// get 方式

function get(url,callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    callback(xhr);
  }
  xhr.open('get',url,true);

  xhr.send();
}
function complate(){
  console.log('complate');
}


// post 方式




