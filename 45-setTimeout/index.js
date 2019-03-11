/**
 * 1: Anymous Function ==>
 */

// setTimeout(() => {
//    console.log("Ket thuc 3s");
// }, 3000);

/**
 * 2: Hàm có tên và truyền tên hàm hàm vào setTimeOut() method
 */

// console.log('...>> Start');
// function done() {
//    console.log("on Finish...")
// }
// setTimeout(done, 3000);
// console.log('...>> running');

/**
 * 3: Gán giá trị của hàm bằng 1 biến , và gọi tên hàm vào setTimeOut();
 */

var done = function okDone() {
   console.log("on Finish...");
}
console.log('...>> Start');
var timeOutId = setTimeout(done, 4000);
console.log('...>> running');
clearTimeout(timeOutId);