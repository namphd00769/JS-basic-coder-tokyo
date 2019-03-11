//Array map
/**
 * Array map sẽ lặp qua từng phần tử trong mảng, và biến đổi nó thông qua 1 cái transform functions
 * và giả về 1 mảng mới, gồm các phần tử đã được biến đổi
 * ---> nó sẽ tạo 1 array mới chứa các phần tử true, mà không thay đổi mảng ban đầu
 */

var rectangle = [
	{width: 10, height: 20},
	{width: 15, height: 50},
	{width: 20, height: 40},
];

var result =  rectangle.map(function(item) {
	return item.width * item.height
})
console.log(result);

//--------------------------------------------------------------------------------------------------

//Array Filter
/**
 * Nó sẽ lặp qua từng phần tử trong mảng, và sẽ return về true or false
 * ---> Nếu mà là true thì nó sẽ cho qua, còn bị false sẽ bị giữu lại
 * ---> nó sẽ tạo 1 array mới chứa các phần tử true, mà không thay đổi mảng ban đầu
 */
var ages = [22, 33, 16, 13, 40, 88];

var x = ages.filter(function(age) {
	return age > 18 //(true or false);
});

console.log(x);

//---------------------------------------------------------------------------------------------------------

//Array Find
/**
 * Nó sẽ lặp qua từng phần tử trong mảng
 * ---> Nếu mà là true thì nó sẽ cho qua và kết thúc vòng lặp mà không quan tâm đến các phần tử phía sau,
 * ---> nó sẽ lấy phần tử đầu tiên tìm được , mà không thay đổi mảng ban đầu,
 * (typeof của phần tử đó là phụ thuôc vào phần tử nó lấy là gi)
 */
var numbers = [21, 33, 16, 13, 40, 88];

var number = numbers.find(function(number) {
	return number % 2 === 0 //(true) ;
});

console.log(number);