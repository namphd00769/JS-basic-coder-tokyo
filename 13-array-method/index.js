var a = [1, 2, 3 , 4, 6, 8];
var b = [3,  5 , 7];
var d = [10,  20 , 30];
var x = 'nam';

// sum = 0;
// for(var i = 0; i <= a.length ; i++){
// 	sum += arr[i];
// 	console.log(sum);
// }

// => concat() mutiple array
// var c = a.concat(b,d);
// console.log(c);

/**
 * 1: a.concat(b)
 * Nối nhieu  mảng với nhau, nó sẽ không thay đổi base array tại mà nó sẽ tạo 1 new array
 * -->return new array
 */

// var c = a.concat(b); // gán biến c bằng giá trị của new array
// console.log(a); //=> không thay đổi mảng a hiện tại
// console.log(b); //=> không thay đổi nabgr b hiện tại
// console.log(c);

/**
 * 2: a.push(x)
 * Thêm phần tử vào cuối mảng, và thay đổi trực tiếp base array
 * -->return: new length cua arr
 * 
 */
// a.push(x);
// console.log(a);

/**
 * 3:Pop()
 * Đẩy phần tử cuối cùng trong mảng
 * Thay đổi base array,
 * --> return phân tử bị đẩy ra (8)
 * 
 */
// var c = a.pop();
// console.log(c);
// console.log(a)

/**
 * 4:shift()
 *  method removes the first array
 *  Nó sẽ thay đổi trực tiếp base array
 *  --> return phần tử được xóa đầu tiên trong mảng
 */
// var c = a.shift();
// console.log(c);
// console.log(a);
 
/**
 * 5: unshift()
 * Thêm phần tử vào đầu mảng
 * Method sẽ thay đổi trực tiếp base array;
 * --> return length new array
 */
// a.unshift(x);
// console.log(a);
// console.log(a.length);