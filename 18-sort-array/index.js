/**
 * array.sort(function(a, b){
 * lấy a - b;
 * 1: nếu return < 0 ==> a sẽ đứng trước b; (b dung sau a)
 * 2: nếu return > 0 ==> a sẽ đứng sau b; ( b dung truoc a)
 * 3: nếu  = 0 ==> không thay đổi vị trí
 *
 * Neu mang la chu cai, thi chi can array.sort() la xong 
 * ==========> return ve 1 mang da duoc sap sep, no co thay doi mang hien tai
 * })
 */

var numbers = [40, 100, 1, 5, 25, 10];

 var x = numbers.sort(function(a , b){
	return a - b
});

 console.log(x) // => [ 1, 5, 10, 25, 40, 100 ]

// ---------------------------------------------------- 

 var so = [4, 250, 1, 5, 22, 18];

 var y = so.sort(function(a , b){
	return b - a
});

console.log(y);
//------------------------------------------------------

var persons = [
	{name: 'Trinh Phuong Nga', age: 23},
	{name: 'Phan Hai Nam', age: 22},
	{name: 'Phan Tuan Viet', age: 29}
]

var sortedPesons = persons.sort(function( a, b){
	return a.age - b.age;
});

console.log(sortedPesons);

//----------------------------------------------------------------------

var products = [
	{name: 'Nokia', price: 60, stock: 4},
	{name: 'Iphone', price: 100, stock: 2},
	{name: 'Samsung', price: 90, stock: 3}	
	{name: 'Samsung', price: 120, stock: 8}
]

var sortByPrice = products.sort(function(a, b){
	return b.price - a.price
});


var sortByStock = products.sort(function(a, b){
	return (b.price * b.stock) - (a.price * a.stock);
});

console.log('Sort by price: ', sortByPrice);

console.log('Sort by stock :', sortByStock);