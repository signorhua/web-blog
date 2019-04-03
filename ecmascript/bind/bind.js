if(!Function.prototype.bind){
    Function.prototype.bind = function(oThis){

        // 判断this是不是函数，不是函数报错
        if(typeof this !== 'function'){
            throw new TypeError('What is trying to be bound is not callable');
        }

        //拿到bind方法除了指向this之外的所有参数
        var aArgs = Array.prototype.slice.call(arguments,1);

        // 需要改变this指向的函数，传入进来的函数
        var fToBind = this;


        var fONP = function(){};
        
        // 返回一个bing之后新的函数
        var fBound = function(){
            var fBoundArg = aArgs.concat(Array.prototype.slice.call(arguments));
            return fToBind.apply(this instanceof fONP ? this : oThis, fBoundArg);
        }
        
        // 
        fONP.prototype = this.prototype;
        fBound.prototype = new fONP();
        
        return fBound;

    }
}