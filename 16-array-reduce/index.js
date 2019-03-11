//Array reduce()
/**
	Nó sẽ lặp qua 2 phần tử đâu tiên , xong lần tiếp theo là chỉ 1 phần tử
	--> giả về 1 giá trị duy nhất
 */
var numbers = [65, 44, 12, 4];

var sum = numbers.reduce(function(a, b){
	return a + b;
});

console.log(sum);

//----------------------------------------------------------------------------------

var products = [
	{name: 'Iphơne', quantity: 2, price: 100},
	{name: 'Sasmung', quantity: 1, price: 200},
	{name: 'Nokia', quantity: 3, price: 50}
]

var totalPrice =  products.map(function(oder){
	return (oder.quantity * oder.price);
}); //=> 1 mang chua tong cac gia tri

var result = totalPrice.reduce(function(a, b){
	return a + b
});

console.log(result);

//---------------------------------------Cách 2----------------------------------


var oders = [
	{fullname:'Phan Hai Nam', quantity: 55, price: 180},
	{fullname:'Trinh Phuong Nga', quantity: 25 ,price: 150},
	{fullname:'Phan Tuan Viet', quantity: 30, price: 200}
];

var totalOrders = oders.reduce(function(currentTotal, product){
	return currentTotal + (product.quantity * product.price)
} , 0);

console.log('...Tổng số tiền của 1 ca là: ', totalOrders);