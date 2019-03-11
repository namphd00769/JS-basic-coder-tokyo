
// var employees = [
// 	{name: 'Phan Hai Nam', age: 22},
// 	{name: 'Trinh Phuong Nga', age: 22},
// 	{name: 'Phan Dang Khoi', age: 0.5},
// 	{name: 'Phan Bao Khoi', age: 0.5},
// 	{name: 'Phan Tuan Viet', age: 29}
// ]

// // for(var i = 0; i <= employees.length; i++){
// // 	var employee = employees[i]
// // 	console.log(employee.name, employee.age)
// // }


// // Loop for of
// var content = '';
// for (var employee of employees){
// 	content += '<li>'+ employee.name + " " + employee.age + '</li>'
// }

// document.getElementById('user-list').innerHTML = content;


//Loop For in (key in objects)

var crush = {
	name: 'Trinh Phuong Nga',
	age: 22,
	address: 'Nam Dinh',
	job: 'nurse'
}

for (keys in crush) {
	console.log(keys + " :  " + crush[keys] );
}
