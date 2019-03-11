var a = 1;
var b = 2;

function myFun() {
   var b = Math.random();
   a = 1997;
   console.log(b);
}

myFun();
console.log(a);